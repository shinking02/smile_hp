import styled from "styled-components";

import { sp, useScreenSize, ScreenSize } from "../media";

import Button from "@/components/Button";
import Letter from "@/components/Letter";
import Title from "@/components/Title";
const ThumbnailContainer = styled.div<{ src: string }>`
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${(props) => props.src});
`;

const Mask = styled.div`
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const ThumbnailText = styled.div<{ isSp: boolean }>`
    position: absolute;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: ${(props) => (props.isSp ? "60px" : "90px")};
    font-weight: bold;
    z-index: 2;
    white-space: nowrap;
    & span {
        font-size: ${(props) => (props.isSp ? "100px" : "140px")};
        color: ${(props) => props.theme.lightBlue};
    }
`;

const ContentsWrapper = styled.div`
    margin-top: 100vh;
    background-color: white;
    margin-left: calc(((100vw - 100%) / 2) * -1);
    margin-right: calc(((100vw - 100%) / 2) * -1);
    z-index: -1;
    padding: 20px 360px;
    ${sp`
        padding: 20px 10px;
    `}
`;

const ContentsContainer = styled.div`
    margin: 80px auto;
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const Top: React.FC = () => {
    return (
        <>
            <ThumbnailContainer src="/background.webp">
                <Mask />
            </ThumbnailContainer>
            <ThumbnailText isSp={useScreenSize() == ScreenSize.SP}>
                <span>手話</span>で<br />
                <span>踊</span>ろう
            </ThumbnailText>
            <ContentsWrapper>
                <ContentsContainer>
                    <Title title="スマイルとは" />
                    <Letter>
                        私たち「スマイル」は50人程度で活動している手話ダンスグループです。
                        名前のように笑顔で、楽しく活動しています。
                    </Letter>
                </ContentsContainer>
                <ContentsContainer>
                    <Title title="活動内容" />
                </ContentsContainer>
                <ContentsContainer>
                    <Title title="一緒に踊りませんか?" />
                    <Letter>
                        手話ダンスは年齢を問わず楽しむことができます。現在50代～80代の方が在籍しており、ほとんどの方が手話もダンスも未経験から始めています。
                        手話と聞くと難しいイメージがありますが、ダンスと一緒に覚えていくので自然と身に付きます。
                        まずは見学や体験だけでもいかがですか。お気軽にお問い合わせください。
                    </Letter>
                    <ButtonContainer>
                        <Button
                            title="お問い合わせ"
                            onClick={() => {
                                location.href = "/contact";
                            }}
                        />
                    </ButtonContainer>
                </ContentsContainer>
                <ContentsContainer>
                    <Title title="ブログ" />
                </ContentsContainer>
                <ContentsContainer>
                    <Title title="活動場所" />
                </ContentsContainer>
            </ContentsWrapper>
        </>
    );
};

export default Top;
