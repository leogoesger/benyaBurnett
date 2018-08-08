import * as React from "react";
import { ImageWrapper } from "./";

interface IProps {
    pathname: string;
}

const Image: React.SFC<IProps> = ({ pathname }) => {
    switch (pathname) {
        case "/team":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/team.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/team/james":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/jim.jpg"
                    width="200px"
                    height="230px"
                />
            );
        case "/team/deborah":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/deborahHead.jpg"
                    width="200px"
                    height="250px"
                />
            );
        case "/awards":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/award.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/services/legal-expert-witness-services-and-testimony":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/legal.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/services/architectural-and-day-lighting-design":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/architectural.jpg"
                    width="200px"
                    height="230px"
                />
            );
        case "/services/keynote-presentations-and-seminars":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/keynote.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/services/dark-sky-compliant-exterior-and-street-lighting-design-and-consulting":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/dark.jpg"
                    width="200px"
                    height="260px"
                />
            );
        case "/services/product-development-and-consulting":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/development.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/services/environmental-impact-studies-and-research":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/environment.jpg"
                    width="200px"
                    height="250px"
                />
            );
        case "/services/codes-standards-and-guide-lines-development":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/rules.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/services/technical-writing-CEU-and-charette-content-development":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/write.jpg"
                    width="200px"
                    height="200px"
                />
            );
        case "/services/LEED-and-WELL-compliant-lighting-design-and-consulting":
            return (
                <ImageWrapper
                    img="https://benya.nyc3.digitaloceanspaces.com/leed.jpg"
                    width="200px"
                    height="240px"
                />
            );

        default:
            return null;
    }
};

export default Image;
