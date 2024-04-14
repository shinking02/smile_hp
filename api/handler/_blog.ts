import fs from "fs";

import express from "express";

interface BlogResponse {
    contents: string;
    formattedDate: string;
}

function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため、+1する
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
}

export function handleBlog(req: express.Request, res: express.Response) {
    const date = req.query.date as string; // YYYY-MM-DD
    const blogDirectory = `${process.cwd()}/blogs/${date}`;
    const markdown = fs.readFileSync(`${blogDirectory}/blog.md`, "utf-8");

    const response: BlogResponse = {
        contents: markdown,
        formattedDate: formatDate(date),
    };
    res.send(response);
}
