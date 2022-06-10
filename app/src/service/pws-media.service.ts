import {
    ZypeOnAirStatusResponse,
    ZypeViewVideoResponse,
    ZypeListVideosResponse,
    ZypeConfigResponse,
    ZypeIsAudioResponse,
} from "../zype/ZypeMedia.types";

export interface ListVideosConfig {
    categories?: { [category: string]: string };
    categoryValue?: string;
    categoryName?: string;
    startDate?: number;
    groupSlug?: string;
    perPage?: number;
    endDate?: number;
    query?: string;
    page?: number;
}

const doRequest = async <T = any>(url: string, access_token: string | null = null) => {
    try {
        const response = await fetch(url, {
            ...(access_token && { headers: { Authorization: `Bearer ${access_token}` } }),
        });
        return await response.json() as T;
    } catch (e) {
        console.error("Error while fetching PWS API:", e);
    }
};

export class PwsMediaService {
    private token: string | null = null;
    private baseUrl: string;

    constructor(show: string, pws_host: string) {
        this.baseUrl = `//${pws_host}/media/${show}`;
    }

    set accessToken(token: string | null) {
        this.token = token;
    }

    getOnAirStatus() {
        return this.doMediaRequest<ZypeOnAirStatusResponse>("on-air-status");
    }

    getOnAirVideo(manifest = false) {
        return this.doMediaRequest<ZypeViewVideoResponse>(`on-air?manifest=${manifest}`);
    }

    getVideoBySlug(slug: string) {
        if (slug === "live") {
            return this.doMediaRequest<ZypeViewVideoResponse>(`/on-air`);
        }
        return this.doMediaRequest<ZypeViewVideoResponse>(`videos/slug/${slug}`);
    }

    getVideoById(id: string) {
        if (id === "live") {
            return this.doMediaRequest<ZypeViewVideoResponse>(`/on-air`);
        }
        return this.doMediaRequest<ZypeViewVideoResponse>(`videos/${id}`);
    }

    getNextVideo(id: string) {
        return this.doMediaRequest<ZypeViewVideoResponse>(`next/${id}`);
    }

    getConfig(includeVideos = true, perPage = 12) {
        return this.doMediaRequest<ZypeConfigResponse>(
            `config?includeVideos=${includeVideos}&perPage=${perPage}`,
        );
    }

    getIsAudio(id: string, isOnAir: boolean) {
        return this.doMediaRequest<ZypeIsAudioResponse>(`is-audio/${id}?onAir=${isOnAir}`);
    }

    getVideos(resume: string | null = null, config: ListVideosConfig = {}) {
        if (resume) {
            return this.doMediaRequest<ZypeListVideosResponse>(`videos?resume=${resume}`);
        }

        let query = Object.entries(config).reduce((acc, [key, val]) => acc + `&${key}=${val}`, "");
        if (query) {
            query = `?${query.slice(1)}`;
        }

        return this.doMediaRequest<ZypeListVideosResponse>(`/videos/${query}`);
    }

    private doMediaRequest<T>(url: string) {
        return doRequest<T>(`${this.baseUrl}/${url}`, this.token);
    }
}
