import { useEffect, useState } from "react";


import Button from "@client/components/Button";
import { ContentsContainer } from "@client/components/ContentsContainer";
import Title from "@client/components/Title";
import { sp } from "@client/media";
import styled from "styled-components";

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    max-width: 40%;
    ${sp`
        max-width: 90%;
    `}
`;

const ContactForm = styled.form``;

const FormTitle = styled.div`
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: bold;
    color: ${(props) => props.theme.black};
`;

const FormInput = styled.input`
    width: 90%;
    margin: 0 auto;
    height: 32px;
    color: ${(props) => props.theme.black};
    font-size: 14px;
    padding: 0 8px;
    margin-bottom: 20px;
`;

const FormTextArea = styled.textarea`
    width: 90%;
    margin: 0 auto;
    height: 160px;
    color: ${(props) => props.theme.black};
    font-size: 14px;
    padding: 0 8px;
    margin-bottom: 20px;
`;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitDisable, setIsSubmitDisable] = useState(true);

    useEffect(() => {
        name && email && message
            ? setIsSubmitDisable(false)
            : setIsSubmitDisable(true);
    }, [name, email, message]);

    return (
        <ContentsContainer>
            <ContactForm
                method="post"
                action={import.meta.env.VITE_HYPER_FORM_URL || ""}
            >
                <Title title="お問い合わせ" />
                <FormSection>
                    <FormTitle>お名前</FormTitle>
                    <FormInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="例）山田太郎"
                        type="text"
                        name="name"
                    />
                    <FormTitle>メールアドレス</FormTitle>
                    <FormInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="例）example@example.com"
                        type="email"
                    />
                    <FormTitle>お問い合わせ内容</FormTitle>
                    <FormTextArea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                    />
                </FormSection>
                <ButtonContainer>
                    <Button
                        title="送信"
                        disabled={isSubmitDisable}
                        type="submit"
                    />
                </ButtonContainer>
            </ContactForm>
        </ContentsContainer>
    );
};

export default Contact;
