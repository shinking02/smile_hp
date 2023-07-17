import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";

const app = document.getElementById("app");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    app
)