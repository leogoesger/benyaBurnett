import * as React from "react";
const HeaderImage = require("../../static/headerImage.jpg");

const Header = () => {
    return (
        <div
            style={{
                width: "100%",
                position: "relative",
                height: "330px",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "16px",
                    height: "80px",
                    width: "100%",
                    backgroundColor: "rgb(183, 183, 183, 0.5)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "24px",
                    left: "200px",
                }}
            >
                <div
                    style={{
                        fontSize: "36px",
                        color: "#0d47a1",
                        fontWeight: 400,
                    }}
                >
                    World first Double Platinum LEED and WELL
                </div>
                <div
                    style={{
                        fontSize: "18px",
                        color: "#0d47a1",
                        fontWeight: 200,
                    }}
                >
                    certified project featuring Circadian protective lighting by
                    Benya Burnett Consultancy
                </div>
            </div>
            <img src={HeaderImage} alt="header" height="330px" width="950px" />
        </div>
    );
};

export default Header;
