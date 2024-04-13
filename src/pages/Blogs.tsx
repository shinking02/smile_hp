import { useEffect, useState } from "react";

import styled from "styled-components";

import { ContentsContainer } from "@/components/ContentsContainer";
import Title from "@/components/Title";
import APIClient, { Blog } from "@/lib/apiClient";

const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [hasNext, setHasNext] = useState(false);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const apiClient = new APIClient();
            const res = await apiClient.getBlogs(page);
            setBlogs((prevBlogs) => [...prevBlogs, ...res.blogs]);
            setHasNext(res.hasNext);
            setIsLoading(false);
        })();
    }, [page]);

    return (
        <ContentsContainer>
            <Title title="ブログ" />
            <BlogContainer>
                {blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            <h2>{blog.title}</h2>
                            <p>{blog.date}</p>
                            <img src={blog.thumbnailPath} alt={blog.title} />
                        </div>
                    );
                })}
                {hasNext && !isLoading && (
                    <button onClick={() => setPage((prev) => prev + 1)}>もっと見る</button>
                )}
            </BlogContainer>
        </ContentsContainer>
    );
};

export default Blogs;
