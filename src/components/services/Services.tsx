import * as React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { services } from "../../static/reference";

const Services = () => {
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
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    marginTop: "30px",
                    marginBottom: "60px",
                }}
            >
                {services.map(service => {
                    return (
                        <div
                            key={service.displayName}
                            style={{
                                display: "flex",
                                height: "150px",
                                justifyContent: "space-between",
                                width: "40%",
                                marginTop: "6px",
                            }}
                        >
                            <Link to={service.to}>
                                <img
                                    src={service.imgUrl}
                                    alt="some"
                                    width="150px"
                                />
                            </Link>

                            <div
                                style={{
                                    padding: "26px 0px 26px 20px",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    width: "350px",
                                }}
                            >
                                <Link to={service.to}>
                                    {service.displayName}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
