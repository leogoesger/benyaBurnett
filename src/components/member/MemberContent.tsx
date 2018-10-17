import * as React from "react";

import James from "./James";
import Deborah from "./Deborah";

interface IProps {
    memberParam: string;
}
const MemberContent: React.SFC<IProps> = ({ memberParam }) => {
    if (memberParam === "james") {
        return <James />;
    } else if (memberParam === "deborah") {
        return <Deborah />;
    }
};

export default MemberContent;
