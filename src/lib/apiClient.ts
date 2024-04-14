import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface BlogsResponse {
    blogs: Blog[];
    hasNext: boolean;
}

interface Blog {
    title: string;
    date: string; //YYYY-MM-DD
    formattedDate: string; //YYYY年MM月DD日
    markdown: string;
    thumbnailPath: string;
}

class APIClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create();
    }

    private async get<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.get(url);
        return response.data;
    }

    // private async post<T, U>(url: string, data: U): Promise<T> {
    //     const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
    //     return response.data;
    // }

    public async getBlogs(page: number, size?: number): Promise<BlogsResponse> {
        return this.get<BlogsResponse>(`/api/blogs?page=${page}&size=${size ?? ""}`);
    }
}

export default APIClient;
