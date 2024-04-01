import styled from "styled-components";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
}

const ButtonWrapper = styled.button<{ disabled?: boolean }>`
    display: inline-block;
    padding: 6px 30px;
    border: 2px solid ${(props) => props.theme.black};
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => props.theme.black};
    transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
    &:hover {
        transform: scale(1.04);
    }
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const Button = (props: ButtonProps) => {
    return (
        <ButtonWrapper
            onClick={props.disabled ? undefined : props.onClick}
            disabled={props.disabled}
        >
            {props.title}
        </ButtonWrapper>
    );
};

export default Button;
