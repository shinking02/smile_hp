import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface BlogListResponse {
    blogs: Blog[];
    hasNext: boolean;
}

export interface Blog {
    title: string;
    date: string; //YYYY-MM-DD
    formattedDate: string; //YYYY年MM月DD日
    markdown: string;
    thumbnailPath: string;
}

export interface BlogResponse {
    contents: string;
    formattedDate: string;
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

    public async getBlogs(page: number, size?: number): Promise<BlogListResponse> {
        return this.get<BlogListResponse>(`/api/blog_list?page=${page}&size=${size ?? ""}`);
    }

    public async getBlog(date: string): Promise<BlogResponse> {
        return this.get<BlogResponse>(`/api/blog?date=${date}`);
    }
}

export default APIClient;
