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
                    height: "70px",
                    width: "720px",
                    right: 40,
                    backgroundColor: "#B7B7B7",
                    opacity: 0.4,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "98px",
                    height: "28px",
                    width: "200px",
                    right: 40,
                    backgroundColor: "#B7B7B7",
                    opacity: 0.4,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "24px",
                    right: "60px",
                    cursor: "pointer",
                }}
            >
                <Link to="/double-platinum-leed-well">
                    <div
                        style={{
                            fontSize: "26px",
                            color: "rgb(9, 54, 124)",
                            fontWeight: 600,
                            textAlign: "right",
                        }}
                    >
                        World first Double Platinum LEED and WELL Platinum
                    </div>
                    <div
                        style={{
                            fontSize: "16px",
                            marginTop: "10px",
                            color: "rgb(9, 54, 124)",
                            lineHeight: "20px",
                            fontWeight: 600,
                            textAlign: "left",
                        }}
                    >
                        ASID national HQ Washington DC featuring CIRCADIAN
                        PROTECTIVE lighting
                    </div>
                    <div
                        style={{
                            fontSize: "18px",
                            color: "rgb(9, 54, 124)",
                            fontWeight: 600,
                            textAlign: "right",
                            marginTop: "20px",
                        }}
                    >
                        click to learn more...
                    </div>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30%",
                    }}
                >
                    <img
                        src="https://benya.nyc3.digitaloceanspaces.com/up-left.jpg"
                        alt="header"
                        height="158px"
                        width="100%"
                        style={{
                            objectFit: "cover",
                            borderWidth: "5px",
                            borderColor: "black",
                            borderStyle: "solid",
                            borderLeftWidth: "4px",
                            borderBottomWidth: "0px",
                            width: "98%",
                        }}
                    />
                    <img
                        src="https://benya.nyc3.digitaloceanspaces.com/bottom-left.jpg"
                        alt="header"
                        height="157px"
                        width="100%"
                        style={{
                            objectFit: "cover",
                            borderWidth: "5px",
                            borderColor: "black",
                            borderStyle: "solid",
                            borderBottomColor: "#827717",
                            borderLeftWidth: "4px",
                            width: "98%",
                        }}
                    />
                </div>

                <img
                    src="https://benya.nyc3.digitaloceanspaces.com/right-up.jpg"
                    alt="header"
                    height="320px"
                    width="70%"
                    style={{
                        objectFit: "cover",
                        borderWidth: "5px",
                        borderColor: "black",
                        borderStyle: "solid",
                        borderBottomColor: "#827717",
                        borderLeftWidth: "0px",
                        borderRightWidth: "0px",
                    }}
                />
            </div>
        </div>
    );
};

export default Header;
