import * as React from "react";
import { Divider } from "@material-ui/core";

const HeaderThumb = require("../../static/header-thumb.jpg");

interface IProps {
    children: React.ReactNode;
}

const ContentHeader: React.SFC<IProps> = props => {
    return (
        <div style={{ width: "100%", position: "relative", height: "100px" }}>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100px",
                    backgroundColor: "rgb(239, 239, 239)",
                }}
            />
            <img src={HeaderThumb} alt="header" width="100%" height="100px" />
            <div
                style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    paddingLeft: "30px",
                    paddingTop: "26px",
                    fontSize: "36px",
                    fontWeight: 400,
                }}
            >
                {props.children}
            </div>
            <Divider style={{ marginTop: "-2px" }} />
        </div>
    );
};

export default ContentHeader;
