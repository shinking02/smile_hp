import styled from "styled-components";

import { useScreenSize, ScreenSize, tab, sp } from "../media";

import ActivityCard from "@/components/ActivityCard";
import Button from "@/components/Button";
import { ContentsContainer } from "@/components/ContentsContainer";
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

const ContentsBackground = styled.div`
    margin-top: 100vh;
    background-color: white;
    margin-left: calc(((100vw - 100%) / 2) * -1);
    margin-right: calc(((100vw - 100%) / 2) * -1);
    z-index: -1;
    padding: 20px 0;
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const ActivitiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${tab`
        flex-direction: column;
    `}
    ${sp`
        flex-direction: column;
    `}
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
            <ContentsBackground>
                <ContentsContainer>
                    <Title title="スマイルとは" />
                    <Letter>
                        私たち「スマイル」は50人程度で活動している手話ダンスグループです。
                        名前のように笑顔で、楽しく活動しています。
                    </Letter>
                </ContentsContainer>
                <ContentsContainer>
                    <Title title="活動内容" />
                    <ActivitiesContainer>
                        <ActivityCard
                            title="練習"
                            summary="月2回(水曜日)に練習を行っており、新しい曲に挑戦しています。叙情歌や最近の曲を交えて楽しく踊っています。"
                            imagePath="/practice.jpg"
                        />
                        <ActivityCard
                            title="発表会"
                            summary="年に一回(秋または春)、各地の会員が集まり、日ごろの練習の成果を発表します。"
                            imagePath="/presentation.jpg"
                        />
                        <ActivityCard
                            title="ボランティア活動"
                            summary="地域の老人福祉施設、病院、学校や学童などで披露させて頂いています。"
                            imagePath="/volunteer.jpg"
                        />
                    </ActivitiesContainer>
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
            </ContentsBackground>
        </>
    );
};

export default Top;
