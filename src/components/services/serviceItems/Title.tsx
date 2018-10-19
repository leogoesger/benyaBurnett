import * as React from "react";
import { ContentHeader } from "../../shared";

interface IProps {
    title: string;
}

const Title: React.SFC<IProps> = ({ title }) => {
    return (
        <ContentHeader>
            <span
                style={{ color: "#424242", fontWeight: 100, fontSize: "26px" }}
            >
                {title}
            </span>
        </ContentHeader>
    );
};

export default Title;
