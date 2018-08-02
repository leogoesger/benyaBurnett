import * as React from "react";
import { Typography } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";

const NewsItem = () => {
    return (
        <MainContent>
            <ContentHeader>News Item</ContentHeader>
            <div style={{ padding: "40px", marginBottom: "40px" }}>
                <Typography>
                    The following projects include work at Benya Burnett
                    Consultancy, Benya Lighting Design, Pacific Lightworks,
                    Luminae Souter Lighting Design, and Smith Hinchman & Grylls.
                </Typography>
            </div>
        </MainContent>
    );
};

export default NewsItem;
