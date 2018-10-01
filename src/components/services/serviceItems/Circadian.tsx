import * as React from "react";

import Title from "./Title";
import { ContactUs } from "../../../containers";

const Circadian = () => {
    return (
        <div className="main-content">
            <Title title={"Circadian lighting design and peer review"} />
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

export default Circadian;
