import * as React from "react";
import { Title, RenderArticle } from "./";
import { MainContent } from "../shared";

interface IArticle {
	title: string;
	text: string;
	url: string;
	date: string;
	imgUrl: string;
	type: string;
	_id: string;
}

interface IProps {
	articles: IArticle[];
}

const Layout: React.SFC<IProps> = ({ articles }) => {
	return (
		<MainContent>
			{articles[0] && <Title type={articles[0].type} />}
			<div style={{ overflow: "scroll", marginBottom: "40px" }}>
				{articles.map((article, indx) => {
					return (
						<div key={indx}>
							<RenderArticle article={article} />
						</div>
					);
				})}
			</div>
		</MainContent>
	);
};

export default Layout;
