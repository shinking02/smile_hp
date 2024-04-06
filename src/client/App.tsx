
import Layout from "@client/components/Layout";
import Contact from "@client/pages/Contact";
import NotFound from "@client/pages/NotFound";
import Top from "@client/pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

const theme = {
    lightBlue: "#b3e5fc",
    yellow: "#fff762e5",
    black: "#444444",
    white: "#ffffff",
    lightGray: "#c0c0c0",
};

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        font-family: "YuGothic", "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<Top />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
