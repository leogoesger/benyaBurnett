import * as React from "react";
import Header from "../shared/ContentHeader";

interface IProps {
    title: string;
}

const Title: React.SFC<IProps> = ({ title }) => {
    return <Header>{title}</Header>;
};

export default Title;
