import * as React from "react";
import { Content, Title } from "./";
import { MainContent } from "../shared";

const Layout = () => {
    return (
        <MainContent>
            <Title />
            <Content />
        </MainContent>
    );
};

export default Layout;
