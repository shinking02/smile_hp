import express from "express";

export function handleBlogs(req: express.Request, res: express.Response) {
    res.send("Blogs");
}
