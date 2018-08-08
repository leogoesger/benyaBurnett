import * as React from "react";
import { Button } from "@material-ui/core";

import { members } from "../../static/reference";
import { ContactUs } from "../../containers";

interface IProps {
    memberParam: string;
}

const ActionBtns: React.SFC<IProps> = ({ memberParam }) => {
    const member = members[memberParam];
    return (
        <div>
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "40px auto 10px auto",
                }}
            >
                <Button href={member.bioUrl} variant="outlined">
                    {"Download Bio"}
                </Button>
                <Button href={member.CVUrl} variant="outlined">
                    {"Download CV"}
                </Button>
                <ContactUs />
            </div>
        </div>
    );
};

export default ActionBtns;
