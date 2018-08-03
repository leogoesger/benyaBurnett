import * as React from "react";

import { Jim, Deborah } from "../shared";

const People = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "70%",
                minWidth: "800px",
                margin: "0 auto",
                justifyContent: "space-between",
            }}
        >
            <Jim />
            <Deborah />
        </div>
    );
};

export default People;
