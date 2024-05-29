export interface Video {
    title: string;
    description: string;
    duration: string;
    mostUsedWords: string[];
}

export interface VideosData {
    videosFormated: Video[];
    daysNeeded: number;
}