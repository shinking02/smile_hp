import fs from "fs";

import express from "express";

interface BlogsResponse {
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

function getFirstImagePathFromMarkdown(markdown: string): string {
    // 画像のパスを抽出する正規表現パターン
    const imageRegex = /!\[[^\]]*\]\((.*?)\)/;
    const match = markdown.match(imageRegex);

    if (match && match.length > 1) {
        return match[1];
    } else {
        return "";
    }
}

function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため、+1する
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
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
    const blogs: Blog[] = targetDirectories
        .map((dir) => {
            const markdown = fs.readFileSync(`${dir}/blog.md`, "utf-8");
            const yyyymmdd = dir.split("/").pop() || "No date";
            return {
                title: extractTitleFromMarkdown(markdown) || "No title",
                date: yyyymmdd,
                formattedDate: formatDate(yyyymmdd),
                markdown,
                thumbnailPath: getFirstImagePathFromMarkdown(markdown) ?? "",
            };
        })
        .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

    const response: BlogsResponse = {
        blogs,
        hasNext,
    };
    res.send(response);
}
