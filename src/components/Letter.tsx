import { ReactNode } from "react";

import styled from "styled-components";

interface LetterProps {
    children?: ReactNode;
}

const LetterWrap = styled.div`
    color: ${(props) => props.theme.black};
    letter-spacing: 0.08em;
    line-height: 1.4em;
    margin-top: 11px;
`;

const Letter = (props: LetterProps) => {
    return <LetterWrap>{props.children}</LetterWrap>;
};

export default Letter;
