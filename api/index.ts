import fs from "fs";

import express, { Router } from "express";

const app = express();
const router = Router();

function displayDirectoryContents(path: string) {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        console.log("Contents of directory:", path);
        files.forEach((file) => {
            console.log(file);
        });
    });
}

router.get("/", (_, res) => {
    displayDirectoryContents(process.cwd());
    res.send("Express on Vercel");
});

app.use("/api", router);

export default app;
