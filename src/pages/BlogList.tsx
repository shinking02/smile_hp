import { useEffect, useState } from "react";

import styled from "styled-components";

import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import { ContentsContainer } from "@/components/ContentsContainer";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import APIClient, { Blog } from "@/lib/apiClient";
import { sp } from "@/lib/media";

const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${sp`
        justify-content: center;
    `}
    &:after {
        content: "";
        width: 352px;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    text-align: center;
`;

const BlogList = () => {
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
        setPage(page + 1);
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
                            href={`/blog/${blog.date}`}
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
                            fetchBlogs();
                        }}
                    />
                </ButtonContainer>
            )}
        </ContentsContainer>
    );
};

export default BlogList;
