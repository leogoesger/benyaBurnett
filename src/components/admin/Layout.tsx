import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";

<<<<<<< HEAD
import { Content, ArticleManager } from "./";
=======
import { Content, PostArticle } from "./";
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e

interface IProps {
	logOutHandler: () => void;
	submitArticleHandler: (d: IArticle) => void;
<<<<<<< HEAD
	removeArticleHandler: (d: string) => void;
	email: string;
	didPost: boolean;
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
	removeArticleHandler,
	email,
	didPost,
=======
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
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
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
<<<<<<< HEAD
				<ArticleManager
					submitArticleHandler={submitArticleHandler}
					removeArticleHandler={removeArticleHandler}
					didPost={didPost}
				/>
=======
				<PostArticle submitArticleHandler={submitArticleHandler} />
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
			</div>
		</MainContent>
	);
};

export default Layout;
