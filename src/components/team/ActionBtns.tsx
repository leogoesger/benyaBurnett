import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const ActionBtns = () => {
    return (
        <div
            style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-around",
                margin: "20px auto",
            }}
        >
            <Link to="team/james">
                <Button variant="outlined">{"BIO / CV: James Benya"}</Button>
            </Link>
            <Link to="team/deborah">
                <Button variant="outlined">
                    {"BIO / CV: Deborah Burnett"}
                </Button>
            </Link>
            <Link to="team/partners">
                <Button variant="outlined">{"Other Team Partners"}</Button>
            </Link>
        </div>
    );
};

export default ActionBtns;
