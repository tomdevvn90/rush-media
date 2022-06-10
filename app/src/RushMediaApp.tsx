import React from 'react';

import { PwsMediaService } from "./service/pws-media.service";
import { ZypeMedia } from "./zype/ZypeMedia.component";
import { ZypeViewVideoResponse } from './zype/ZypeMedia.types';

export interface RushMediaProps {
    pwsHost: string;
    showSlug: string;
    groupSlug: string | null;
    episodeSlug: string | null;
    pageSlug: string;
    isAuthenticated: boolean;
}

export interface RushMediaState {
    isAuthenticated: boolean;
}

export default class RushMediaApp extends React.Component<RushMediaProps, RushMediaState> {
    private mediaService: PwsMediaService;

    constructor(props: RushMediaProps) {
        super(props);

        this.mediaService = new PwsMediaService(props.showSlug, props.pwsHost);

        this.state = {
            isAuthenticated: this.props.isAuthenticated || (document.cookie.includes('CTC_1') && document.cookie.includes('CTC_2') && document.cookie.includes('CTC_3'))
        }
    }

    render() {
        const initialVideoResponse: ZypeViewVideoResponse = {
            authenticated: this.props.isAuthenticated,
            playerApiKey: "",
            video: {
                id: null,
                title: "",
                slug: "",
                description: "",
                shortDescription: "",
                thumbnails: [],
                categories: [],
                publishedAt: "",
                subscriptionRequired: false,
                manifest: null,
                onAir: false,
                isAudio: false,
                duration: 0,
                autoplay: false,
            }
        }

        return (
            <ZypeMedia
                mediaService={this.mediaService}
                viewVideoResponse={initialVideoResponse}
                groupSlug={this.props.groupSlug}
                episodeSlug={this.props.episodeSlug}
                pageSlug={this.props.pageSlug}
                isAuthenticated={this.state.isAuthenticated}
            ></ZypeMedia>
        );
    }
}
