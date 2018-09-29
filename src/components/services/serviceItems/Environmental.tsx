import * as React from "react";
import Title from "./Title";
import { ContactUs } from "../../../containers";

const Codes = () => {
    return (
        <div className="main-content">
            <Title title={"Environmental impact studies and research"} />
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

export default Codes;
