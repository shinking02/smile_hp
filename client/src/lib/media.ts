import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from "styled-components";

export const media = {
    //モバイルファースト
    tb: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation => css`
        @media (min-width: 600px) {
            ${css(first, ...interpolations)}
        }
    `,
    pc: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation => css`
        @media (min-width: 1025px) {
            ${css(first, ...interpolations)}
        }
    `
}