import * as React from "react";
import { Link } from "react-router-dom";
import { services } from "../../static/reference";

const Content = () => {
    return (
        <div style={{ width: "650px" }}>
            <div
                style={{
                    margin: "30px 20px 0px 20px",
                    lineHeight: "20px",
                    fontWeight: 400,
                }}
            >
                Benya Burnett Consultancy combines Edison award winning
                illuminating engineering and lighting design with
                internationally recognized excellence in circadian wellness and
                epigenetic design expertise.
            </div>
            <div style={{ margin: "30px 20px 0px 20px", fontWeight: 400 }}>
                Offering expert and technical services in the following areas:
            </div>
            <ul
                style={{ listStyleType: "square", margin: "20px 0px 0px 60px" }}
            >
                {services.map(service => {
                    return (
                        <li
                            style={{
                                lineHeight: "20px",
                            }}
                        >
                            <Link className="home-links" to={service.to}>
                                {service.displayName}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Content;
