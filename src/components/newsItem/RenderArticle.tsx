import * as React from "react";
import { Articles } from "../home";

interface IProps {
    article: {
        url: string;
        imgUrl: string;
        title: string;
        date: string;
        text: string;
        type: string;
    };
}

const getText = (text) => {
    if (text.length > 400) {
        return text.slice(0, 400) + "...";
    }
    return text;
};

const RenderArticle: React.SFC<IProps> = ({ article }) => {
    return (
        <a href={`${article.url}`} target="_blank">
            <div
                style={{
                    display: "flex",
                    margin:
                        article.type === "leed-well" ? "20px 0px" : "20px 40px",
                }}
            >
                <img
                    src={article.imgUrl}
                    width="200px"
                    height="200px"
                    alt="Place Holder"
                />

                <div style={{ margin: "10px 20px", width: "450px" }}>
                    <h1 style={{ fontWeight: "bold" }}>
                        {article.title}
                        <div>
                            <span
                                style={{
                                    fontWeight: 200,
                                    fontSize: "12px",
                                }}
                            >
                                Posted on: {article.date.split("T")[0]}
                            </span>
                        </div>
                    </h1>
                    <p style={{ marginTop: "5px", lineHeight: "20px" }}>
                        {getText(article.text)}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default RenderArticle;
