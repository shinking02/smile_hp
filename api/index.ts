import express, { Router } from "express";

import { handleBlog } from "./handler/_blog.js";
import { handleBlogList } from "./handler/_blogList.js";

const app = express();
const router = Router();

router.get("/blog_list", handleBlogList);
router.get("/blog", handleBlog);

router.get("/", (req, res) => {
    res.send("API is working!");
});

app.use("/api", router);

export default app;
