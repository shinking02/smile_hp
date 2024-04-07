import express, { Router } from "express";

import { handleBlogs } from "./handlers/blogs";

const app = express();
const router = Router();

router.get("/blogs", handleBlogs);

app.use("/api", router);

export default app;
