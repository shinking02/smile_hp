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

function extractTitleFromMarkdown(markdown: string): string | null {
    const titleMatch = markdown.match(/^#\s+(.+)/);
    if (titleMatch && titleMatch.length > 0) {
        return titleMatch[0];
    } else {
        return null;
    }
}

export function handleBlogs(req: express.Request, res: express.Response) {
    const PAGE_SIZE = 12;
    const [page, size] = [req.query.page, req.query.size];
    const sizeNumber = parseInt(size as string);
    const pageNumber = parseInt(page as string) || 0;
    const startIndex = (() => {
        if (!isNaN(sizeNumber)) {
            return 0;
        }
        return pageNumber * PAGE_SIZE;
    })();
    const endIndex = isNaN(sizeNumber) ? startIndex + PAGE_SIZE : sizeNumber;
    const blogDirectories = fs.readdirSync(`${process.cwd()}/blogs`);
    const hasNext = endIndex < blogDirectories.length;
    const targetDirectories = blogDirectories
        .map((dir) => `${process.cwd()}/blogs/${dir}`)
        .slice(startIndex, endIndex);

    const blogs: Blog[] = targetDirectories.map((dir) => {
        const markdown = fs.readFileSync(`${dir}/blog.md`, "utf-8");
        const meta = fs.readFileSync(`${dir}/meta.json`, "utf-8");
        const { date, thumbnailPath } = JSON.parse(meta);
        return {
            title: extractTitleFromMarkdown(markdown) || "No title",
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
