import * as React from "react";
import Title from "./Title";
import { ContactUs } from "../../../containers";

const Codes = () => {
    return (
        <div className="main-content">
            <Title
                title={"LEED and WELL compliant lighting design and consulting"}
            />
            <div className="main-content-paragraph">
                Details coming soon..
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

export default Codes;
