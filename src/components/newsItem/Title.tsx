import * as React from "react";
import { ContentHeader } from "../shared";
import newsMap from "../../static/newsMap";

interface IProps {
	type: string;
}

const Title: React.SFC<IProps> = ({ type }) => {
<<<<<<< HEAD
	return (
		<ContentHeader>
			NEWS / MEDIA : {type in newsMap ? newsMap[type] : "Missing Map"}
		</ContentHeader>
	);
=======
	let displayType = "";
	switch (type) {
		case "reviews":
			displayType = "Reviwes";
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
		case "upcoming-events":
			displayType = "Upcoming Events";
			break;
	}
	return <ContentHeader>News/Media : {displayType}</ContentHeader>;
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
};

export default Title;
