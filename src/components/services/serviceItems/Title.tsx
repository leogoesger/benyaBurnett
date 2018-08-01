import * as React from "react";
import { ContentHeader } from "../../shared";

interface IProps {
    title: string;
}

const Title: React.SFC<IProps> = ({ title }) => {
    return (
        <ContentHeader>
            <span>Service:</span>
            <span style={{ fontWeight: 100, fontSize: "30px" }}> {title}</span>
        </ContentHeader>
    );
};

export default Title;
