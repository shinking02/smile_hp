import React from "react";

import { SpeedInsights } from "@vercel/speed-insights/react";
import ReactDOM from "react-dom/client";

import App from "@/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <SpeedInsights />
    </React.StrictMode>,
);
