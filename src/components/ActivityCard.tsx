import styled from "styled-components";

import { sp, tab } from "../media";

interface ActivityCardProps {
    title: string;
    summary: string;
    imagePath: string;
}

const CardWrapper = styled.div`
    display: block;
    width: 280px;
    margin-top: 20px;
    ${tab`
        display: flex;
        width: 100%;
    `}
    ${sp`
        width: 100%;
    `}
`;

const CardDetail = styled.div`
    display: block;
    color: ${(props) => props.theme.black};
    line-height: 1.4em;
    letter-spacing: 0.08em;
`;

const CardImage = styled.img`
    width: 100%;
    ${tab`
        width: 220px;
        margin-right: 20px;
    `}
`;

const CardTitle = styled.div`
    margin: 6px 0;
    font-size: 18px;
    font-weight: bold;
`;

const CardSummary = styled.div``;

const ActivityCard = (props: ActivityCardProps) => {
    return (
        <CardWrapper>
            <CardImage src={props.imagePath} />
            <CardDetail>
                <CardTitle>{props.title}</CardTitle>
                <CardSummary>{props.summary}</CardSummary>
            </CardDetail>
        </CardWrapper>
    );
};

export default ActivityCard;
