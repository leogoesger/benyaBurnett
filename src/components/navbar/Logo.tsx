import * as React from "react";
import { Link } from "react-router-dom";

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
            {localStorage.getItem("bbToken") && (
                <div
                    style={{
                        position: "absolute",
                        padding: "8px",
                        left: "80px",
                    }}
                >
                    <Link
                        to="/admin"
                        style={{
                            color: "#99aa00",
                            fontWeight: 400,
                        }}
                    >
                        Logged In as Admin
                    </Link>
                </div>
            )}
            <div
                style={{
                    color: "#cfcfcf",
                    fontSize: "10px",
                    padding: "32px 0px 10px 10px",
                }}
            >
                Design Services INC
            </div>
            <Link to="/">
                <img
                    src={LogoImage}
                    alt="logo"
                    width="200px"
                    height="30px"
                    style={{ marginLeft: "10px" }}
                />
            </Link>
        </div>
    );
};

export default Logo;
