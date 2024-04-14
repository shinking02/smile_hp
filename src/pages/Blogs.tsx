import { useEffect, useState } from "react";

import styled from "styled-components";

import BlogCard from "@/components/ BlogCard";
import Button from "@/components/Button";
import { ContentsContainer } from "@/components/ContentsContainer";
import Title from "@/components/Title";
import APIClient, { Blog } from "@/lib/apiClient";
import { sp } from "@/lib/media";

const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${sp`
        justify-content: center;
    `}
`;

const Loading = styled.div`
    width: 45px;
    aspect-ratio: 1;
    margin: 12px auto;
    --c: no-repeat linear-gradient(${(props) => props.theme.black} 0 0);
    background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
    animation:
        l14-1 0.5s infinite alternate,
        l14-2 2s infinite;
    @keyframes l14-1 {
        0%,
        10% {
            background-size: 20% 100%;
        }
        100% {
            background-size: 20% 20%;
        }
    }
    @keyframes l14-2 {
        0%,
        49.9% {
            background-position:
                0 0,
                0 100%,
                50% 50%,
                50% 50%,
                100% 0,
                100% 100%;
        }
        50%,
        100% {
            background-position:
                0 50%,
                0 50%,
                50% 0,
                50% 100%,
                100% 50%,
                100% 50%;
        }
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [hasNext, setHasNext] = useState(false);
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBlogs = async () => {
        setIsLoading(true);
        const apiClient = new APIClient();
        const response = await apiClient.getBlogs(page);
        setBlogs([...blogs, ...response.blogs]);
        setHasNext(response.hasNext);
        setIsLoading(false);
    };

    useEffect(() => {
        (async () => {
            if (blogs.length === 0) {
                await fetchBlogs();
            }
        })();
    }, []);

    return (
        <ContentsContainer>
            <Title title="ブログ" />
            <BlogContainer>
                {blogs.map((blog, index) => {
                    return (
                        <BlogCard
                            key={index}
                            title={blog.title}
                            date={blog.formattedDate}
                            thumbnail={blog.thumbnailPath || "images/noimage.jpg"}
                            href={`/blogs/${blog.date}`}
                        />
                    );
                })}
            </BlogContainer>
            {isLoading && <Loading />}
            {hasNext && (
                <ButtonContainer>
                    <Button
                        title="もっと見る"
                        onClick={() => {
                            setPage(page + 1);
                            fetchBlogs();
                        }}
                    />
                </ButtonContainer>
            )}
        </ContentsContainer>
    );
};

export default Blogs;
