import * as React from "react";
import { Title, RenderArticle } from "./";
import { MainContent } from "../shared";

interface IArticle {
    title: string;
    text: string;
    url: string;
    date: Date;
    type: string;
}
interface IProps {
    articles: IArticle[];
}
const Layout: React.SFC<IProps> = ({ articles }) => {
    return (
        <MainContent>
            {articles[0] && <Title type={articles[0].type} />}

            {articles.map((article, indx) => {
                return (
                    <div key={indx}>
                        <RenderArticle article={article} />
                        {/* <h1>{article.title}</h1>
						<h6>{article.date}</h6>
						<p>{article.text}</p>
						<h5>{article.url}</h5> */}
                    </div>
                );
            })}
        </MainContent>
    );
};

export default Layout;
