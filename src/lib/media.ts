import { useEffect, useState } from "react";

import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from "styled-components";

export enum ScreenSize {
    SP = 560,
    TAB = 1024,
    PC = 1025,
}

export const sp = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (max-width: ${ScreenSize.SP}px) {
        ${css(first, ...interpolations)}
    }
`;

export const tab = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: ${ScreenSize.SP + 1}px) and (max-width: ${ScreenSize.TAB}px) {
        ${css(first, ...interpolations)}
    }
`;
export const pc = (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
    @media (min-width: ${ScreenSize.PC}px) {
        ${css(first, ...interpolations)}
    }
`;

const getScreenSize = (): ScreenSize => {
    const width = window.innerWidth;

    if (width <= ScreenSize.SP) {
        return ScreenSize.SP;
    } else if (width <= ScreenSize.TAB) {
        return ScreenSize.TAB;
    } else {
        return ScreenSize.PC;
    }
};

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenSize;
};
