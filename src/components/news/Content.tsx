import * as React from "react";
import { Typography } from "@material-ui/core";
import { news } from "../../static/reference";

import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div style={{ padding: "40px" }}>
            <Typography>
                Page undergoing update: sorry for the inconvenience.
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
                                width: "270px",
                                marginTop: "40px",
                                position: "relative",
                                cursor: "pointer",
                            }}
                        >
                            <div className="news-overlay">{n.displayName}</div>
                            <img
                                src={n.imgUrl}
                                alt={n.displayName}
                                width="270px"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Content;
