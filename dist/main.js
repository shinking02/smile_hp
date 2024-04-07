"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vite_express_1 = __importDefault(require("vite-express"));
const app = (0, express_1.default)();
app.get("/hello", (_, res) => {
    res.send("Hello Vite + React + TypeScript!");
});
vite_express_1.default.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
