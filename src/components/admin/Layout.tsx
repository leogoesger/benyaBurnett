import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";

import { Content, PostArticle } from "./";

interface IProps {
	logOutHandler: () => void;
	submitArticleHandler: (d: IArticle) => void;
	email: string;
}
interface IArticle {
	title: string;
	text: string;
	type: string;
	imgUrl: string;
	url: string;
}

const Layout: React.SFC<IProps> = ({
	logOutHandler,
	submitArticleHandler,
	email,
}) => {
	return (
		<MainContent>
			<ContentHeader>Admin</ContentHeader>
			<div style={{ padding: "40px", marginBottom: "40px" }}>
				<Typography>
					The following projects include work at Benya Burnett
					Consultancy, Benya Lighting Design, Pacific Lightworks,
					Luminae Souter Lighting Design, and Smith Hinchman & Grylls.
				</Typography>
				<Content email={email} />
				<div style={{ width: "200px", margin: "40px auto" }}>
					<Button variant="outlined" onClick={() => logOutHandler()}>
						Log Out
					</Button>
				</div>
				<PostArticle submitArticleHandler={submitArticleHandler} />
			</div>
		</MainContent>
	);
};

export default Layout;
