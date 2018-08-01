import * as React from "react";
import { Typography } from "@material-ui/core";
import { MainContent, ContentHeader, ContactUs } from "../shared";

import { People } from "./";

const Layout = () => {
    return (
        <MainContent>
            <ContentHeader>Contact</ContentHeader>
            <div style={{ padding: "40px", marginBottom: "40px" }}>
                <Typography>
                    The following projects include work at Benya Burnett
                    Consultancy, Benya Lighting Design, Pacific Lightworks,
                    Luminae Souter Lighting Design, and Smith Hinchman & Grylls.
                </Typography>
            </div>
            <People />
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <ContactUs />
            </div>
        </MainContent>
    );
};

export default Layout;
