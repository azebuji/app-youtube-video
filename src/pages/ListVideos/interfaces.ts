export interface Video {
    title: string;
    description: string;
    duration: string;
    mostUsedWords: string[];
    videoId: string
}

export interface VideosData {
    videosFormated: Video[];
    daysNeeded: number;
}