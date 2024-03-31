import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

const Content = styled.div<{ headerHeight: number; footerHeight: number }>`
    min-height: calc(
        100vh - ${(props) => props.footerHeight + props.headerHeight + 40}px
    );
    padding: calc(${(props) => props.headerHeight}px + 40px) 4% 0;
`;

const Layout: React.FC = () => {
    const [footerHeight, setFooterHeight] = useState(85);
    const [headerHeight, setHeaderHeight] = useState(40);
    useEffect(() => {
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");
        if (footer) {
            setFooterHeight(footer.clientHeight);
        }
        if (header) {
            setHeaderHeight(header.clientHeight);
        }
    }, []);
    return (
        <>
            <Header />
            <Content headerHeight={headerHeight} footerHeight={footerHeight}>
                <Outlet />
            </Content>
            <Footer />
        </>
    );
};

export default Layout;
