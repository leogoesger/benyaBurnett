import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";

interface IProps {
    logOutHandler: () => void;
    email: string;
    didPost: boolean;
}

interface IArticle {
    title: string;
    text: string;
    type: string;
    imgUrl: string;
    url: string;
}

const Layout: React.SFC<IProps> = ({ logOutHandler }) => {
    return (
        <MainContent>
            <ContentHeader>Admin</ContentHeader>
            <div
                style={{
                    padding: "40px",
                    marginBottom: "40px",
                }}
            >
                <Typography>Edit News Articles...</Typography>
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
