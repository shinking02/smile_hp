import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import remarkBreaks from "remark-breaks";
import styled from "styled-components";

import { ContentsContainer } from "../components/ContentsContainer";
import APIClient, { BlogResponse } from "../lib/apiClient";


import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { sp } from "@/lib/media";

const MarkdownContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    ${sp`
        width: 100%;
    `}
    h1 {
        font-size: 24px;
        font-weight: bold;
        color: ${(props) => props.theme.black};
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.lightBlue};
        margin-bottom: 22px;
    }
    p {
        color: ${(props) => props.theme.black};
        letter-spacing: 0.08em;
        line-height: 1.4em;
        margin-top: 11px;
    }
    img {
        width: 100%;
        margin: 22px auto;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const Date = styled.div`
    color: ${(props) => props.theme.black};
    letter-spacing: 0.08em;
    line-height: 1.4em;
    margin-top: 11px;
`;

const Blog = () => {
    const location = useLocation();
    const date = new URLSearchParams(location.search).get("date") || "";
    const [blogRes, setBlogRes] = useState<BlogResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchBlog = async () => {
        setIsLoading(true);
        const apiClient = new APIClient();
        const response = await apiClient.getBlog(date);
        setBlogRes(response);
        setIsLoading(false);
    };
    useEffect(() => {
        (async () => {
            await fetchBlog();
        })();
    }, []);

    return (
        <ContentsContainer>
            {isLoading && <Loading />}
            <MarkdownContainer>
                {blogRes && (
                    <>
                        <ReactMarkdown
                            remarkPlugins={[remarkBreaks]}
                            components={{
                                p: ({ children }) => (
                                    <p style={{ marginBottom: "1em" }}>{children}</p>
                                ),
                            }}
                        >
                            {blogRes.contents}
                        </ReactMarkdown>
                        <Date>{blogRes.formattedDate}</Date>
                    </>
                )}
            </MarkdownContainer>
            <ButtonContainer>
                <Button
                    title="戻る"
                    onClick={() => {
                        window.history.back();
                    }}
                />
            </ButtonContainer>
        </ContentsContainer>
    );
};

export default Blog;
