import styled from "styled-components";

interface TitleProps {
    title: string;
}

const TitleWrapper = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.black};
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.lightBlue};
`;

const Title = (props: TitleProps) => {
    return <TitleWrapper>{props.title}</TitleWrapper>;
};

export default Title;
