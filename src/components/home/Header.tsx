import * as React from "react";
import { Link } from "react-router-dom";

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
                    height: "110px",
                    width: "100%",
                    backgroundColor: "#B7B7B7",
                    opacity: 0.7,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "24px",
                    right: "100px",
                    cursor: "pointer",
                }}
            >
                <Link to="/double-platinum-leed-well">
                    <div
                        style={{
                            fontSize: "36px",
                            color: "#0d47a1",
                            fontWeight: 400,
                            textAlign: "right",
                        }}
                    >
                        World first Double Platinum LEED and WELL
                    </div>
                    <div
                        style={{
                            fontSize: "18px",
                            color: "#0d47a1",
                            fontWeight: 200,
                            textAlign: "right",
                        }}
                    >
                        certified project featuring Circadian protective
                        lighting by Benya Burnett Consultancy
                    </div>
                    <div
                        style={{
                            fontSize: "18px",
                            color: "#0d47a1",
                            fontWeight: 400,
                            textAlign: "right",
                            marginTop: "14px",
                        }}
                    >
                        click to learn more...
                    </div>
                </Link>
            </div>
            <img
                src="https://benya.nyc3.digitaloceanspaces.com/homePhoto.png"
                alt="header"
                height="330px"
                width="100%"
            />
        </div>
    );
};

export default Header;
