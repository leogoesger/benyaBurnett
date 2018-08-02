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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
