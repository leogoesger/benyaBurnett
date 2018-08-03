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
>>>>>>> BB-21: formated article displayed
};

export default Title;
