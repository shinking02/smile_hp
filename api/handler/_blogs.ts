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
    thumbnailPath: string;
}

export function handleBlogs(req: express.Request, res: express.Response) {
    const PAGE_SIZE = 12;
    const [page, topRequest] = [req.query.page, req.query.topRequest];
    const pageNumber = parseInt(page as string) || 0;
    const startIndex = (() => {
        if (topRequest === "yes") {
            return 0;
        }
        return pageNumber * PAGE_SIZE;
    })();
    const endIndex = topRequest === "yes" ? 3 : startIndex + PAGE_SIZE;
    const blogDirectories = fs.readdirSync(`${process.cwd()}/blogs`);
    const hasNext = endIndex < blogDirectories.length;
    const targetDirectories = blogDirectories
        .map((dir) => `${process.cwd()}/blogs/${dir}`)
        .slice(startIndex, endIndex);

    const blogs: Blog[] = targetDirectories.map((dir) => {
        const markdown = fs.readFileSync(`${dir}/blog.md`, "utf-8");
        const meta = fs.readFileSync(`${dir}/meta.json`, "utf-8");
        const { title, date, thumbnailPath } = JSON.parse(meta);
        return {
            title,
            date,
            markdown,
            thumbnailPath,
        };
    });

    const response: BlogsResponse = {
        blogs,
        hasNext,
    };
    res.send(response);
}
