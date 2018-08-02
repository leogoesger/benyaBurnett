import * as React from "react";
import { Typography } from "@material-ui/core";
import { news } from "../../static/reference";

import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div style={{ padding: "40px" }}>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <div
                style={{
                    width: "80%",
                    display: "flex",
                    margin: "0 auto 40px auto",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                {news.map(n => (
                    <Link to={n.to}>
                        <div
                            style={{
                                width: "250px",
                                marginTop: "40px",
                                position: "relative",
                                cursor: "pointer",
                            }}
                        >
                            <div className="news-overlay">{n.displayName}</div>
                            <img
                                src={n.imgUrl}
                                alt={n.displayName}
                                width="250px"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Content;
