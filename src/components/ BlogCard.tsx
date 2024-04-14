import styled from "styled-components";

import { sp } from "@/lib/media";

type BlogCardProps = {
    title: string;
    date: string;
    thumbnail: string;
    href: string;
};

const CardContainer = styled.a`
    width: 320px;
    margin: 0 32px 12px 0;
    color: ${(props) => props.theme.black};
    flex-shrink: 0;
    ${sp`
        width: 80%;
        margin: 12px;
    `}
`;

const Image = styled.img`
    margin-bottom: 8px;
    width: 100%;
`;

const BlogTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 4px;
    text-decoration: underline ${(props) => props.theme.lightBlue};
`;

const BlogDate = styled.div`
    font-size: 14px;
`;

const BlogCard = (props: BlogCardProps) => {
    return (
        <CardContainer href={props.href}>
            <Image src={props.thumbnail} />
            <BlogTitle>{props.title}</BlogTitle>
            <BlogDate>{props.date}</BlogDate>
        </CardContainer>
    );
};

export default BlogCard;
