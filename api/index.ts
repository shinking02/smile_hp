import express, { Router } from "express";

// import { handleBlogs } from "./handler/_blogs";

const app = express();
const router = Router();

// router.get("/blogs", handleBlogs);

app.use("/api", router);

export default app;
