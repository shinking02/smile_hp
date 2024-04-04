import express, { Router } from "express";

const app = express();
const router = Router();

router.get("/test", (req, res) => {
    res.json({
        post: {
            title: "Test Post",
            slug: req.params["slug"],
        },
    });
});

app.use("/api", router);

export default app;
