import express from "express";

interface BlogsResponse {
    blogs: Blog[];
    hasNext: boolean;
}

interface Blog {
    title: string;
    date: string; //YYYY-MM-DD
    markdown: string;
}

export function handleBlogs(req: express.Request, res: express.Response) {
    const response: BlogsResponse = {
        blogs: [],
        hasNext: false,
    };
    res.send(response);
}
