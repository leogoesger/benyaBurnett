import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";

import { Content } from "./";

interface IProps {
    logOutHandler: () => void;
}

const Layout: React.SFC<IProps> = ({ logOutHandler }) => {
    return (
        <MainContent>
            <ContentHeader>Admin</ContentHeader>
            <div style={{ padding: "40px", marginBottom: "40px" }}>
                <Typography>
                    The following projects include work at Benya Burnett
                    Consultancy, Benya Lighting Design, Pacific Lightworks,
                    Luminae Souter Lighting Design, and Smith Hinchman & Grylls.
                </Typography>
                <Content />
                <div style={{ width: "200px", margin: "40px auto" }}>
                    <Button variant="outlined" onClick={() => logOutHandler()}>
                        Log Out
                    </Button>
                </div>
            </div>
        </MainContent>
    );
};

export default Layout;
