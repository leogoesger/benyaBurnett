import * as React from "react";
import { Link } from "react-router-dom";

import { Colors } from "../../styles";
const LogoImage = require("../../static/footer-logo.png");

const Footer = () => {
    return (
        <div
            style={{
                position: "absolute",
                width: "1200px",
                bottom: "0px",
                height: "30px",
                backgroundColor: "#000000",
            }}
        >
            <Link to="/">
                <img
                    src={LogoImage}
                    alt="footer-logo"
                    style={{ padding: "10px 0px 0px 20px" }}
                />
            </Link>
            <span
                style={{
                    color: Colors.WHITE,
                    fontSize: "12px",
                    float: "right",
                    marginTop: "8px",
                    marginRight: "10px",
                }}
            >
                Copyright © 2018 Design Services, Inc. - Deborah Burnett. All
                Rights Reserved. Benya Burnett Consultancy
            </span>
        </div>
    );
};

export default Footer;
