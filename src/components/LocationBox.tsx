import styled from "styled-components";

import { sp, tab } from "@/lib/media";

interface LocationBoxProps {
    location: string;
    locationDetails: {
        locationDetail: string;
        placeName: string;
        href: string;
        imagePath: string;
    }[];
}

const LocationContainer = styled.div`
    display: block;
    margin: 20px 0 0 0;
    max-width: 380px;
    ${tab`
        max-width: 80%;
        margin: 20px auto 0;
    `}
    ${sp`
        width: 100%;
        margin: 20px auto 0;
    `}
`;

const LocationTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 18px auto;
`;

const DetailContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 16px auto;
`;

const DetailImage = styled.img`
    width: 50%;
    margin-right: 12px;
    ${tab`
        margin-right: 38px;
    `}
`;

const DetailText = styled.a`
    width: 50%;
    font-size: 16px;
    line-height: 1.2em;
    margin: auto;
`;

const LocationBox = (props: LocationBoxProps) => {
    return (
        <LocationContainer>
            <LocationTitle>{props.location}</LocationTitle>
            {props.locationDetails.map((detail, index) => {
                return (
                    <DetailContainer key={index}>
                        <DetailImage src={detail.imagePath} />
                        <DetailText href={detail.href}>
                            {detail.locationDetail}
                            <br />
                            {detail.placeName}
                        </DetailText>
                    </DetailContainer>
                );
            })}
        </LocationContainer>
    );
};

export default LocationBox;
