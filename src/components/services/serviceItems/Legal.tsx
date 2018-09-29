import * as React from "react";
import { Button } from "@material-ui/core";

import Title from "./Title";
import { ContactUs } from "../../../containers";

const Legal = () => {
    return (
        <div className="main-content">
            <Title title={"Legal expert witness services and testimony"} />
            <div
                style={{
                    float: "right",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <img
                    src="https://benya.nyc3.digitaloceanspaces.com/expert-witness-large.jpg"
                    alt="expert"
                />
                <Button
                    href="http://www.benyalighting.com/"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    style={{
                        ...btnStyle,
                        borderRadius: "2px",
                        width: "auto",
                        marginTop: "8px",
                    }}
                >
                    Download James Benya CV
                </Button>
            </div>
            <div className="main-content-paragraph">
                James Benya possesses one of the most robust expert ratings of
                any lighting expert in North America. Since 1980, he has
                provided expert witness testimony in over 100 cases. He has
                testified in cases regarding:
            </div>
            <ul className="main-content-ordered-list">
                <li>Trip and Fall</li>
                <li>Assault</li>
                <li>Product Liability</li>
                <li>Professional Liability</li>
                <li>Wrongful Death</li>
                <li>Libel</li>
                <li>Light Pollution (Excessive Lighting)</li>
            </ul>
            <div className="main-content-paragraph">
                As a lighting and daylighting expert, James can testify in cases
                for either the plaintiff or the defendant in federal, state or
                county courts.
            </div>
            <div className="main-content-paragraph">
                James may give opinions regarding lighting design, lighting
                applications and visibility. He may testify regarding artificial
                light, safety lighting, LED, lasers, headlights, lighting
                fixtures and emergency lighting.
            </div>
            <div className="main-content-paragraph">
                He has also appeared on behalf of neighborhood groups seeking to
                prevent light pollution. Most recently, James has been an expert
                witness in cases related to claims that Canadian oil refineries
                produced excessive lighting, lighting that negatively impacted
                the environment.
            </div>
            <div className="main-content-paragraph">
                James can provide reports concerning industrial, office,
                commercial, automotive and airport lighting. He is able to
                explain complex technical lighting issues in ways that are easy
                for the lay person to understand.
            </div>
            <div className="main-content-paragraph">
                To contact James, email him or call him at (503) 519-9631.
            </div>
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <ContactUs />
            </div>
        </div>
    );
};

const btnStyle = {
    width: "160px",
    fontSize: "12px",
    color: "#e0e0e0",
    fontWeight: 700,
};

export default Legal;
