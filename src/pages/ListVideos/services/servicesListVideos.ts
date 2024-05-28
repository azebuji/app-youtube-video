import axiosInstance from "../../../utils/axios";
import { VideosData } from "../interfaces";


export async function findVideos(values: { search: string; dailyLimits: number[]; type: string; }): Promise<VideosData> {
    return axiosInstance.get('/general/', {
        params: values,
    }).then(response => {
        return response.data
    }).catch(error => {
        throw error
    });
}