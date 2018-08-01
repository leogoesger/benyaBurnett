import * as React from "react";
import { MainContent } from "../shared";
import { Title, Services } from "./";

const Layout = () => {
    return (
        <MainContent>
            <Title />
            <Services />
        </MainContent>
    );
};

export default Layout;
