import fs from "fs";

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
    // const [size, page, topRequest] = [req.query.size, req.query.page, req.query.topRequest];
    const blogDirectories = fs.readdirSync(`${process.cwd()}/blogs`);
    console.log(blogDirectories);
    const response: BlogsResponse = {
        blogs: [],
        hasNext: false,
    };
    res.send(response);
}
