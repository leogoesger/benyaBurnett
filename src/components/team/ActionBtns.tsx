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
            <div style={{ width: "40%" }}>
                <Link to="team/james">
                    <Button style={{ width: "340px" }} variant="outlined">
                        {"History: Design Service Inc"}
                    </Button>
                </Link>
                <Link to="team/deborah">
                    <Button
                        style={{ width: "340px", marginTop: "14px" }}
                        variant="outlined"
                    >
                        {"History: Benya Burnett Consultancy"}
                    </Button>
                </Link>
            </div>
            <div style={{ width: "30%" }}>
                <Link to="team/james">
                    <Button style={{ width: "240px" }} variant="outlined">
                        {"BIO / CV: James Benya"}
                    </Button>
                </Link>
                <Link to="team/deborah">
                    <Button
                        style={{ width: "240px", marginTop: "14px" }}
                        variant="outlined"
                    >
                        {"BIO / CV: Deborah Burnett"}
                    </Button>
                </Link>
            </div>

            <div style={{ width: "30%" }}>
                <Link to="team/partners">
                    <Button variant="outlined">{"Other Team Partners"}</Button>
                </Link>
            </div>
        </div>
    );
};

export default ActionBtns;
