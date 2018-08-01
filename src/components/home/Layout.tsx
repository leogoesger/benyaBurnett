import * as React from "react";
import { Articles, Content, Header } from "./";

type Props = {};

const Layout: React.SFC<Props> = () => {
    return (
        <div style={{ height: "100%", position: "relative" }}>
            <Header />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#efefef",
                    width: "100%",
                    height: "55%",
                }}
            >
                <Content />
                <Articles />
            </div>
        </div>
    );
};

export default Layout;
