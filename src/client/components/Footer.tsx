import { sp, useScreenSize, ScreenSize } from "@client/media";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    text-align: center;
    justify-content: center;
    padding: 20px 120px;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    height: 60px;
    ${sp`
        padding: 20px;
    `}
`;

const FooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled.a`
    color: ${(props) => props.theme.white};
    font-size: 12px;
    text-align: center;
`;

const FooterLogo = styled.a`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 80px;
`;

const LogoText = styled.div`
    color: ${(props) => props.theme.white};
    font-size: 12px;
`;

const CopyRight = styled.div`
    margin-top: 10px;
    font-size: 12px;
`;

const Footer = () => {
    const screenSize = useScreenSize();
    return (
        <FooterWrapper>
            <FooterNav>
                <FooterLogo href="/">
                    <LogoImg src="/logo.svg" />
                    {(screenSize === ScreenSize.PC ||
                        screenSize === ScreenSize.TAB) && (
                        <LogoText>手話ダンス スマイル</LogoText>
                    )}
                </FooterLogo>
                <NavLink href="contact">お問い合わせ</NavLink>
            </FooterNav>
            <CopyRight>
                © 2024 手話ダンス スマイル All rights reserved.
            </CopyRight>
        </FooterWrapper>
    );
};

export default Footer;
