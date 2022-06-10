<?php
class PWSMediaService {
    private $pwsHost;
    private $show;

    public function __construct($pwsHost, $show) {
        $this->pwsHost = $pwsHost;
        $this->show    = $show;
    }

    public function getConfig() {
        $config = $this->doRequest("config");

        return is_wp_error($config) ? $config : json_decode(wp_remote_retrieve_body($config));
    }

    public function getMediaByLegacyId($id) {
        $id = intval($id);

        return $this->doRequest("videos/source-id/{$id}");
    }

    public function getMediaBySlug($slug) {
        return $this->doRequest("videos/slug/${slug}");
    }

    public function getOnAirVideo() {
        return $this->doRequest("on-air");
    }

    private function doRequest($endpoint) {
        $url = "https://{$this->pwsHost}/media/{$this->show}/{$endpoint}";

        $key = "pws_media_" . md5($url);

        if (!$resp = wp_cache_get($key, 'pws_media')) {
            $resp = wp_remote_get($url);

            wp_cache_set($key, $resp, 'pws_media', 300);
        }
            
        return $resp;
    }
}
