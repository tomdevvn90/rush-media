<?php
/*
Plugin Name: Rush Media Player v2
Description: Rush audio/media page
Author: Premiere Networks
Author URI: www.premierenetworks.com
Version: $$
*/

require_once(__DIR__ . '/pws-media.service.php');

define('RUSH_MEDIA_SHORTCODE', 'rush-media');
define('RUSH_MEDIA_SHOW_SLUG', 'rush');
define('RUSH_MEDIA_OG_LOGO', 'https://www.rushlimbaugh.com/wp-content/uploads/2020/10/rush-og-image.png');

/**
 * If you change the page slug, make sure to update it here AND to refresh the permalinks
 * (go to settings -> permalinks, just click save). Normally this would be easy to get from
 * $post->post_name but since it's needed for the route rewrites, we need it defined here:
 */
define('RUSH_MEDIA_PAGE_SLUG', 'videos');

$mediaService = new PWSMediaService(
    defined('DEP_PWS_HOST') ? DEP_PWS_HOST : 'services.premierenetworks.com',
    RUSH_MEDIA_SHOW_SLUG
);

/**
 * Enqueue required JS and CSS
 * App is mostly written in JS (React) so this is where the magic starts
 */
add_action('wp_enqueue_scripts', function() {
    // Unofficially comes with WP, but may as well register it here anyway:
    wp_register_script('react', 'https://unpkg.com/react@16/umd/react.production.min.js', [], '16');
    wp_register_script('react-dom', 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js', ['react'], '16');
    wp_register_script('gpt', 'https://www.googletagservices.com/tag/js/gpt.js');

	wp_enqueue_script(RUSH_MEDIA_SHORTCODE, plugin_dir_url( __FILE__ ) . 'app/build/static/js/main.js', ['react', 'react-dom', 'gpt'], date('mdH'), true );
	wp_enqueue_style(RUSH_MEDIA_SHORTCODE, plugin_dir_url( __FILE__ ) . 'app/build/static/css/main.css', [], date('mdH'));
});

// Enable fancier URLs:
add_filter('query_vars', function($qv) {
    return array_merge($qv, ['rush_media_group', 'rush_media_episode']);
});

add_action('rewrite_rules_array', function($rules) {
    return array_merge([
        RUSH_MEDIA_PAGE_SLUG . '/([^/]+)/?$' => 'index.php?pagename='.RUSH_MEDIA_PAGE_SLUG.'&rush_media_group=$matches[1]',
        RUSH_MEDIA_PAGE_SLUG . '/([^/]+)/([^/]+)/?$' => 'index.php?pagename='.RUSH_MEDIA_PAGE_SLUG.'&rush_media_group=$matches[1]&rush_media_episode=$matches[2]',
    ], $rules);
});

register_activation_hook(__FILE__, function() {
    flush_rewrite_rules();
});

function rlDoDefaultOpengraphTag() {
    echo '<meta property="og:title" content="Videos" />';
    echo '<meta property="og:description" content="Watch the Dittocam live and access On-Demand Videos" />';
    echo '<meta property="og:url" content="' . get_permalink() . '" />';
    echo '<meta property="og:image" content="' . RUSH_MEDIA_OG_LOGO . '" />';
}

/**
 * Set up page content
 */
add_action('posts_selection', function() use ($mediaService) {
    if(is_page(RUSH_MEDIA_PAGE_SLUG)) {
        if (get_query_var('rush_media_episode', false)) {
            $props['episodeSlug'] = get_query_var('rush_media_episode');

            $resp = $mediaService->getMediaBySlug(get_query_var('rush_media_episode'));
            
            if (!is_wp_error($resp) && wp_remote_retrieve_response_code($resp) == 200) {
                $video = json_decode(wp_remote_retrieve_body($resp));

                // Set OpenGraph tags
                add_filter('language_attributes', function ($output) {
                    return $output . '
                    xmlns:og="http://opengraphprotocol.org/schema/"
                    xmlns:fb="http://www.facebook.com/2008/fbml"';
                });

                add_action('wp_head', function () use ($video) {
                    if ($video) {
                        $image = count($video->video->thumbnails) ? esc_attr($video->video->thumbnails[0]->url) : RUSH_MEDIA_OG_LOGO;

                        echo '<meta property="og:title" content="' . esc_attr($video->video->title) . '" />';
                        echo '<meta property="og:description" content="' . esc_attr($video->video->description)  . '" />';
                        echo '<meta property="og:url" content="' . home_url($_SERVER['REQUEST_URI']) . '" />';
                        echo '<meta property="og:image" content="' . $image . '" />';
                    } else {
                        rlDoDefaultOpengraphTag();
                    }
                }, 5);
            }
        } else {
            add_action('wp_head', 'rlDoDefaultOpengraphTag');
        }
    }
});

/**
 * Registers the shortcode so the app can render
 */
add_shortcode(RUSH_MEDIA_SHORTCODE, function () use ($mediaService) {
    $props = [
        'pwsHost'         => defined('DEP_PWS_HOST') ? DEP_PWS_HOST : 'services.premierenetworks.com',
        'showSlug'        => RUSH_MEDIA_SHOW_SLUG,
        'pageSlug'        => RUSH_MEDIA_PAGE_SLUG,
        'isAuthenticated' => is_user_logged_in(),
    ];

    if(get_query_var('rush_media_group', false)) {
        $props['groupSlug'] = get_query_var('rush_media_group');
    }

    if(get_query_var('rush_media_episode', false)) {
        $props['episodeSlug'] = get_query_var('rush_media_episode');
        
        // This is probably a legacy URL
        if (is_numeric(get_query_var('rush_media_group')) && is_numeric(get_query_var('rush_media_episode'))) {
            $resp = $mediaService->getMediaByLegacyId(get_query_var('rush_media_episode'));

            if(is_wp_error($resp) || wp_remote_retrieve_response_code($resp) >= 400) {
                // This will just redirect it to the 1st video
                unset($props['groupSlug']);
                unset($props['episodeSlug']);
            } else {
                $video = json_decode(wp_remote_retrieve_body($resp));

                if ($video && $video->video) {
                    $props['episodeSlug'] = $video->video->slug;
                }
            }
        }
    }

    if($props['groupSlug'] && !$props['episodeSlug']) {
        // Do we need to load an initial live stream episode?
        $config = $mediaService->getConfig();

        $currGroup = array_shift(array_filter(
            $config->tabs,
            function($g) use ($props) {
                return $g->slug == $props['groupSlug'];
            }
        ));

        if($currGroup && $currGroup->hasLive == 1) {
            $liveEpisode = $mediaService->getOnAirVideo();
            if (!is_wp_error($liveEpisode) && wp_remote_retrieve_response_code($liveEpisode) >= 200) {
                $liveEpisode = json_decode(wp_remote_retrieve_body($liveEpisode));

                if($liveEpisode->video && $liveEpisode->video->slug) {
                    $props['episodeSlug'] = $liveEpisode->video->slug;
                }
            }
        }
    }

    return '<div id="rush-media-app" data-props="' . esc_attr(wp_json_encode($props)) . '"></div>';
});
