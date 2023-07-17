import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";

const App: React.FC = () => {
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Top />} />
            </Routes>
        </Layout>
    )
}

export default App;