import * as React from "react";
import { Typography } from "@material-ui/core";

import { members } from "../../static/reference";

interface IProps {
    memberParam: string;
}
const MemberContent: React.SFC<IProps> = ({ memberParam }) => {
    const member = members[memberParam];
    return (
        <div style={{ padding: "40px", paddingTop: "10px" }}>
            <Typography>{member.bio1}</Typography>
            {member.bio2 && (
                <Typography style={{ paddingTop: "10px" }}>
                    {member.bio2}
                </Typography>
            )}
        </div>
    );
};

export default MemberContent;
