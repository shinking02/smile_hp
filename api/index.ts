import fs from "fs";
import path from "path";

import express, { Router } from "express";

const app = express();
const router = Router();
function displayDirectoryContentsRecursive(directoryPath: string) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        console.log("Contents of directory:", directoryPath);
        files.forEach((file) => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error("Error reading file stats:", err);
                    return;
                }

                if (stats.isDirectory()) {
                    // ディレクトリの場合、再帰的にその内容を表示する
                    displayDirectoryContentsRecursive(filePath);
                } else {
                    // ファイルの場合、そのまま表示する
                    console.log(filePath);
                }
            });
        });
    });
}

router.get("/", (_, res) => {
    displayDirectoryContentsRecursive(process.cwd());
    res.send("Express on Vercel");
});

app.use("/api", router);

export default app;
