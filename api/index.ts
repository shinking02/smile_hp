import express, { Router } from "express";

const app = express();
const router = Router();

router.get("/", (_, res) => {
    res.send("Express on Vercel");
});

app.use("/api", router);

export default app;