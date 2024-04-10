import styled from "styled-components";

import { useScreenSize, ScreenSize, tab, sp } from "../media";

import ActivityCard from "@/components/ActivityCard";
import Button from "@/components/Button";
import { ContentsContainer } from "@/components/ContentsContainer";
import Letter from "@/components/Letter";
import LocationBox from "@/components/LocationBox";
import Title from "@/components/Title";
import APIClient from "@/lib/apiClient";

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
    // FIXME: mac版chromeで若干横に大きくなってしまう
    margin-left: calc(((100vw - 100%) / 2) * -1);
    margin-right: calc(((100vw - 100%) / 2) * -1);
    z-index: -1;
    padding: 20px 4%;
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const ResponsiveContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
            <ThumbnailContainer src="images/background.webp">
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
                    <ResponsiveContainer>
                        <ActivityCard
                            title="練習"
                            summary="月2回(水曜日)に練習を行っており、新しい曲に挑戦しています。叙情歌や最近の曲を交えて楽しく踊っています。"
                            imagePath="images/practice.jpg"
                        />
                        <ActivityCard
                            title="発表会"
                            summary="年に一回(秋または春)、各地の会員が集まり、日ごろの練習の成果を発表します。"
                            imagePath="images/presentation.jpg"
                        />
                        <ActivityCard
                            title="ボランティア活動"
                            summary="地域の老人福祉施設、病院、学校や学童などで披露させて頂いています。"
                            imagePath="images/volunteer.jpg"
                        />
                    </ResponsiveContainer>
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
                            onClick={async () => {
                                const apiClient = new APIClient();
                                console.log(await apiClient.getBlogs(0));
                                location.href = "/contact";
                            }}
                        />
                    </ButtonContainer>
                </ContentsContainer>
                {/* <ContentsContainer>
                    <Title title="ブログ" />
                </ContentsContainer> */}
                <ContentsContainer>
                    <Title title="活動場所" />
                    <ResponsiveContainer>
                        <LocationBox
                            location="東京"
                            locationDetails={[
                                {
                                    locationDetail: "中央区",
                                    placeName: "月島社会教育会館",
                                    href: "https://goo.gl/maps/Eai2HNUNq7Rnqi8VA",
                                    imagePath: "images/chuo.jpg",
                                },
                                {
                                    locationDetail: "杉並区",
                                    placeName: "高円寺ゆうゆう館",
                                    href: "https://goo.gl/maps/9yvzsq6NLwpt7DSk6",
                                    imagePath: "images/suginami.jpg",
                                },
                                {
                                    locationDetail: "小平市",
                                    placeName: "美園地域センター他",
                                    href: "https://goo.gl/maps/DXwji5U968diq2VC9",
                                    imagePath: "images/kodaira.jpg",
                                },
                            ]}
                        />
                        <LocationBox
                            location="埼玉"
                            locationDetails={[
                                {
                                    locationDetail: "草加市",
                                    placeName: "草加市民体育館",
                                    href: "https://goo.gl/maps/yhsRrDe9LpWU8enw7",
                                    imagePath: "images/souka.jpg",
                                },
                                {
                                    locationDetail: "越谷市",
                                    placeName: "越谷市北部市民会館",
                                    href: "https://goo.gl/maps/azti3qa1uvxXeK4b9",
                                    imagePath: "images/koshigaya.jpg",
                                },
                                {
                                    locationDetail: "幸手市",
                                    placeName: "幸手市中央公民館",
                                    href: "https://goo.gl/maps/XWmymw9pbkTJ5E4z7",
                                    imagePath: "images/satte.jpg",
                                },
                            ]}
                        />
                    </ResponsiveContainer>
                </ContentsContainer>
            </ContentsBackground>
        </>
    );
};

export default Top;
