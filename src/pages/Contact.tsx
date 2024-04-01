import styled from "styled-components";

import Button from "@/components/Button";
import { ContentsContainer } from "@/components/ContentsContainer";
import Title from "@/components/Title";

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const Contact = () => {
    return (
        <ContentsContainer>
            <Title title="お問い合わせ" />
            <ButtonContainer>
                <Button title="送信" onClick={() => {}} disabled={true} />
            </ButtonContainer>
        </ContentsContainer>
    );
};

export default Contact;
