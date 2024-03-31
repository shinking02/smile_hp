import styled from "styled-components";

import Button from "@/components/Button";
import { ContentsContainer } from "@/components/ContentsContainer";
import Letter from "@/components/Letter";
import Title from "@/components/Title";

const Area404 = styled.div`
    font-size: 160px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.lightGray};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const NotFound = () => {
    return (
        <>
            <Area404>404</Area404>
            <ContentsContainer>
                <Title title="NotFound" />
                <Letter>
                    申し訳ありません。お探しのページが見つかりませんでした。
                    削除されたか移動した可能性があります。
                </Letter>
            </ContentsContainer>
            <ButtonContainer>
                <Button
                    title="トップへ"
                    onClick={() => {
                        location.href = "/";
                    }}
                />
            </ButtonContainer>
        </>
    );
};

export default NotFound;
