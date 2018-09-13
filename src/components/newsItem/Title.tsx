import * as React from "react";
import { ContentHeader } from "../shared";
import newsMap from "../../static/newsMap";

interface IProps {
	type: string;
}

const Title: React.SFC<IProps> = ({ type }) => {
	return (
		<ContentHeader>
			ARTICLES : {type in newsMap ? newsMap[type] : "Missing Map"}
		</ContentHeader>
	);
};

export default Title;
