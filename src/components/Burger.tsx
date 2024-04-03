import React from "react";
import { ReactNode } from "react";

import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";

const BurgerNavItem = styled.a`
    color: ${(props) => props.theme.white};
    margin: 40px auto;
    font-weight: bold;
`;

const BurgerStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    & .bm-burger-button {
        position: fixed;
        width: 30px;
        height: 24px;
        right: 10px;
        top: 8px;
        pointer-events: auto;
    }

    & .bm-burger-bars {
        height: 12% !important;
        background: white;
    }

    & .bm-cross-button {
        pointer-events: auto;
    }

    & .bm-menu-wrap {
        background: ${(props) => props.theme.black};
    }

    & .bm-menu {
        padding: 20px;
        pointer-events: auto;
    }

    & .bm-cross {
        background: white;
    }

    & .bm-item-list {
        height: 80% !important;
    }
`;

class Burger extends React.Component {
    render(): ReactNode {
        return (
            <BurgerStyle>
                <Menu right width={180}>
                    <BurgerNavItem href="brogs">ブログ</BurgerNavItem>
                    <BurgerNavItem href="contact">お問い合わせ</BurgerNavItem>
                </Menu>
            </BurgerStyle>
        );
    }
}

export default Burger;
