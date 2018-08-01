import * as React from "react";
import { ContentHeader } from "../shared";

interface IProps {
    title: string;
}

const Title: React.SFC<IProps> = ({ title }) => {
    return <ContentHeader>{title}</ContentHeader>;
};

export default Title;
