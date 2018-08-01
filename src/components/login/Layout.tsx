import * as React from "react";

import { Form } from "./";
import { MainContent, ContentHeader } from "../shared";

interface IProps {
    handleSubmit: (
        d: {
            email: string;
            password: string;
        }
    ) => void;
}

const Layout: React.SFC<IProps> = ({ handleSubmit }) => {
    return (
        <MainContent>
            <ContentHeader>Login</ContentHeader>
            <div style={{ margin: "0 auto", width: "40%" }}>
                <Form handleSubmit={handleSubmit} />
            </div>
        </MainContent>
    );
};
export default Layout;
