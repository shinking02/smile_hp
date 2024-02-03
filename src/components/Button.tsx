import styled from "styled-components";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

const ButtonWrapper = styled.button`
    display: inline-block;
    padding: 6px 30px;
    border: 2px solid ${(props) => props.theme.black};
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    font-weight: bold;
    &:hover {
        opacity: 0.6;
    }
`;

const Button = (props: ButtonProps) => {
    return <ButtonWrapper onClick={props.onClick}>{props.title}</ButtonWrapper>;
};

export default Button;
