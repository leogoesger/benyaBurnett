import * as React from "react";
import { ContentHeader } from "../shared";

interface IProps {
	type: string;
}

const Title: React.SFC<IProps> = ({ type }) => {
	return <ContentHeader>News/Media : {type}</ContentHeader>;
};

export default Title;
