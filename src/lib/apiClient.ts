import axios, { AxiosInstance, AxiosResponse } from "axios";

interface BlogsResponse {
    blogs: Blog[];
    hasNext: boolean;
}

interface Blog {
    title: string;
    date: string; //YYYY-MM-DD
    markdown: string;
    thumbnailPath: string;
}

class APIClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            // todo hostを動的にする(dev環境で動かない)
            baseURL: import.meta.env.VITE_API_HOST,
        });
    }

    private async get<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.get(url);
        return response.data;
    }

    // private async post<T, U>(url: string, data: U): Promise<T> {
    //     const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
    //     return response.data;
    // }

    public async getBlogs(page: number, topRequest: boolean = false): Promise<BlogsResponse> {
        return this.get<BlogsResponse>(
            `/api/blogs?page=${page}&topRequest=${topRequest ? "yes" : "no"}`,
        );
    }
}

export default APIClient;
