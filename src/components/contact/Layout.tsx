import * as React from "react";
import { Typography } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";
import { ContactUs } from "../../containers";

import { People } from "./";

const Layout: React.SFC = () => {
    return (
        <MainContent>
            <ContentHeader>Contact</ContentHeader>
            <div style={{ padding: "40px", marginBottom: "40px" }}>
                <Typography>
                    James Benya and Deborah Burnett have made{" "}
                    <i>AVAILABILITY</i> a priority practice for addressing
                    client questions, providing media interviews, assisting
                    students, and always welcoming the opportunity to chat with
                    prospective new clients and industry colleagues. Please
                    contact us at the link or cell number below; we look forward
                    to hearing from you!
                </Typography>
            </div>
            <People />
            <div
                style={{
                    width: "200px",
                    margin: "40px auto",
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
