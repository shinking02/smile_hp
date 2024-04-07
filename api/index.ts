import express, { Router } from "express";

import { handleBlogs } from "./handler/_blogs.js";

const app = express();
const router = Router();

router.get("/blogs", handleBlogs);
import * as fs from "fs";
import * as path from "path";

function listDirectoryContents(directoryPath: string) {
    const contents = fs.readdirSync(directoryPath);

    contents.forEach((content) => {
        const contentPath = path.join(directoryPath, content);
        const stats = fs.statSync(contentPath);

        if (stats.isFile()) {
            console.log(contentPath); // ファイルの場合はconsole.log
        } else if (stats.isDirectory()) {
            console.log(contentPath + " (directory)"); // ディレクトリの場合はconsole.logし、再帰的に処理
            listDirectoryContents(contentPath);
        }
    });
}

router.use("/", () => {
    console.log(process.cwd());
    listDirectoryContents("/var/task/blogs");
});

app.use("/api", router);

export default app;
