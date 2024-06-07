import fs from "fs";

import express from "express";

interface BlogListResponse {
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

function extractTitleFromMarkdown(markdown: string): string | null {
    const titleMatch = markdown.match(/^#\s+(.+)/);
    if (titleMatch && titleMatch.length > 1) {
        return titleMatch[1];
    } else {
        return null;
    }
}

function getFirstImageURLFromMarkdown(markdown: string): string | null {
    const imageURLRegex = /!\[[^\]]*\]\((.*?)\)/;
    const match = markdown.match(imageURLRegex);

    if (match && match.length > 1) {
        return match[1];
    } else {
        return null;
    }
}

function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため、+1する
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
}

export function handleBlogList(req: express.Request, res: express.Response) {
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

    const blogDirectories = fs.readdirSync(`${process.cwd()}/blogs`).sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
    });

    const hasNext = endIndex < blogDirectories.length;
    const targetDirectories = blogDirectories
        .slice(startIndex, endIndex)
        .map((dir) => `${process.cwd()}/blogs/${dir}`);

    const blogs: Blog[] = targetDirectories.map((dir) => {
        const markdown = fs.readFileSync(`${dir}/blog.md`, "utf-8");
        const yyyymmdd = dir.split("/").pop() || "No date";
        return {
            title: extractTitleFromMarkdown(markdown) ?? "No title",
            date: yyyymmdd,
            formattedDate: formatDate(yyyymmdd),
            markdown,
            thumbnailPath: getFirstImageURLFromMarkdown(markdown) ?? "",
        };
    });

    const response: BlogListResponse = {
        blogs,
        hasNext,
    };
    res.send(response);
}
