import * as React from "react";
import { Divider } from "@material-ui/core";

const LogoImage = require("../../static/logo.png");

const Logo = () => {
    return (
        <div
            style={{
                height: "100px",
                display: "border-box",
                borderBottom: "solid",
                borderBottomColor: "#e0e0e0",
                borderBottomWidth: "1px",
            }}
        >
            <div
                style={{
                    color: "#eeeeee",
                    fontSize: "10px",
                    padding: "26px 0px 10px 10px",
                }}
            >
                Design Services INC
            </div>
            <img
                src={LogoImage}
                alt="logo"
                width="180px"
                style={{ marginLeft: "10px" }}
            />
        </div>
    );
};

export default Logo;
