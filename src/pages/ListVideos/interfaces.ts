export interface Video {
    title: string;
    description: string;
    duration: string;
}

export interface VideosData {
    videosFormated: Video[];
    mostUsedWords: string[];
    daysNeeded: number;
}