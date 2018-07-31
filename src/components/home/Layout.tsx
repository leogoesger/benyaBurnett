import * as React from "react";
import { Articles, Content, Header } from "./";

type Props = {};

const Layout: React.SFC<Props> = () => {
    return (
        <div>
            <Header />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: "#efefef",
                    width: "100%",
                    height: "470px",
                }}
            >
                <Content />
                <Articles />
            </div>
        </div>
    );
};

export default Layout;
