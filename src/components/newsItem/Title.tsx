import * as React from "react";
import { ContentHeader } from "../shared";

interface IProps {
    type: string;
}

const Title: React.SFC<IProps> = ({ type }) => {
	let displayType = "";
	switch (type) {
		case "media-interviews-reviews":
			displayType = "Media Interviews & Reviwes";
			break;
		case "online-lectures":
			displayType = "Online Lectures";
			break;
		case "video-interviews":
			displayType = "Video Interviews";
			break;
		case "published-articles":
			displayType = "Published Articles";
			break;
	}
	return <ContentHeader>News/Media : {displayType}</ContentHeader>;
};

export default Title;
