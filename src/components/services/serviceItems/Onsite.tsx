import * as React from "react";
import Title from "./Title";
import { ContactUs } from "../../../containers";

const Onsite = () => {
    return (
        <div className="main-content">
            <Title
                title={"Onsite team 'charette' development and facilitation"}
            />
            <div className="main-content-paragraph">
                <div style={{ width: "500px", margin: "100px auto" }}>
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#616161",
                            margin: "100px 0px 10px 0px",
                        }}
                    >
                        Page undergoing update: sorry for the inconvenience.
                    </div>
                    <div>
                        For detailed information normally found on this page
                        please email Deborah Burnett{" "}
                        <span style={{ textDecoration: "underline" }}>
                            deborah at deborahburnett dot com
                        </span>
                    </div>
                </div>
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

export default Onsite;
