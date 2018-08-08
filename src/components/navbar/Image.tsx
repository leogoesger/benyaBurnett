import * as React from "react";
import { ImageWrapper } from "./";
const Team = require("../../assets/team.jpg");
const Jim = require("../../assets/jim.jpg");
const DeborahHead = require("../../assets/deborahHead.jpg");
const Awards = require("../../assets/award.jpg");
const Architectural = require("../../assets/architectural.jpg");
const Legal = require("../../assets/legal.jpg");
const Keynote = require("../../assets/keynote.jpg");
const Dark = require("../../assets/dark.jpg");
const Development = require("../../assets/development.jpg");
const Enviroment = require("../../assets/enviroment.jpg");
const Rule = require("../../assets/rules.jpg");
const Write = require("../../assets/write.jpg");
const Leed = require("../../assets/leed.jpg");

interface IProps {
    pathname: string;
}

const Image: React.SFC<IProps> = ({ pathname }) => {
    switch (pathname) {
        case "/team":
            return <ImageWrapper img={Team} width="200px" height="200px" />;
        case "/team/james":
            return <ImageWrapper img={Jim} width="200px" height="230px" />;
        case "/team/deborah":
            return (
                <ImageWrapper img={DeborahHead} width="200px" height="250px" />
            );
        case "/awards":
            return <ImageWrapper img={Awards} width="200px" height="200px" />;
        case "/services/legal-expert-witness-services-and-testimony":
            return <ImageWrapper img={Legal} width="200px" height="200px" />;
        case "/services/architectural-and-day-lighting-design":
            return (
                <ImageWrapper
                    img={Architectural}
                    width="200px"
                    height="230px"
                />
            );
        case "/services/keynote-presentations-and-seminars":
            return <ImageWrapper img={Keynote} width="200px" height="200px" />;
        case "/services/dark-sky-compliant-exterior-and-street-lighting-design-and-consulting":
            return <ImageWrapper img={Dark} width="200px" height="260px" />;
        case "/services/product-development-and-consulting":
            return (
                <ImageWrapper img={Development} width="200px" height="200px" />
            );
        case "/services/environmental-impact-studies-and-research":
            return (
                <ImageWrapper img={Enviroment} width="200px" height="250px" />
            );
        case "/services/codes-standards-and-guide-lines-development":
            return <ImageWrapper img={Rule} width="200px" height="200px" />;
        case "/services/technical-writing-CEU-and-charette-content-development":
            return <ImageWrapper img={Write} width="200px" height="200px" />;
        case "/services/LEED-and-WELL-compliant-lighting-design-and-consulting":
            return <ImageWrapper img={Leed} width="200px" height="240px" />;

        default:
            return null;
    }
};

export default Image;
