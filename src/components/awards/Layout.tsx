import * as React from "react";
import { Typography } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";
import { Awards } from "./";

const Layout = () => {
    return (
        <MainContent>
            <ContentHeader>Awards</ContentHeader>
            <div style={{ padding: "40px", marginBottom: "40px" }}>
                <Typography>
                    The following projects include work at Benya Burnett
                    Consultancy, Design Services INC, Benya Lighting Design,
                    Pacific Lightworks, Luminae Souter Lighting Design, and
                    Smith Hinchman & Grylls.
                </Typography>
                <Awards />
            </div>
        </MainContent>
    );
};

export default Layout;
