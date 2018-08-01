import * as React from "react";

import { Jim, Deborah } from "../shared";

const People = () => {
    return (
        <div style={{ display: "flex", width: "90%", margin: "0 auto" }}>
            <Jim />
            <Deborah />
        </div>
    );
};

export default People;
