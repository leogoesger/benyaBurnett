import * as React from "react";
import { Colors } from "../../styles";

interface IProps {
    children: React.ReactNode;
}

const Content: React.SFC<IProps> = props => {
    return (
        <div style={{ height: "800px", width: "100%", display: "flex" }}>
            <div
                style={{ width: "90%", backgroundColor: "rgb(239, 239, 239)" }}
            >
                {props.children}
            </div>
            <div style={{ width: "10%", backgroundColor: Colors.GREEN }} />
        </div>
    );
};

export default Content;
