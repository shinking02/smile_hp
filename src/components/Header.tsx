import styled from "styled-components";

import Burger from "./Burger";
import { sp, useScreenSize, ScreenSize } from "../media";

const HeaderWrapper = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0px 40px;
    ${sp`
        padding: 0px 10px;
    `}
    box-sizing: border-box;
`;

const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 80px;
`;

const LogoText = styled.div`
    color: ${(props) => props.theme.white};
    font-size: 12px;
    margin-left: 8px;
`;

const NavWrapper = styled.div``;

const NavItem = styled.a`
    color: ${(props) => props.theme.white};
    margin-right: 20px;
    font-weight: bold;
`;

const Header = () => {
    const screenSize = useScreenSize();
    return (
        <HeaderWrapper>
            <LogoWrapper href="/">
                <LogoImg src="/logo.svg" />
                {(screenSize === ScreenSize.PC ||
                    screenSize === ScreenSize.TAB) && (
                    <LogoText>手話ダンス スマイル</LogoText>
                )}
            </LogoWrapper>
            <NavWrapper>
                {screenSize === ScreenSize.PC ||
                screenSize === ScreenSize.TAB ? (
                    <>
                        <NavItem href="contact">ブログ</NavItem>
                        <NavItem href="contact">お問い合わせ</NavItem>
                    </>
                ) : (
                    <Burger />
                )}
            </NavWrapper>
        </HeaderWrapper>
    );
};

export default Header;
