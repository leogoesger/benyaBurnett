import * as React from "react";
import { Tooltip } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

import { Title, RenderArticle, NewsItemDialog } from "./";
import { MainContent } from "../shared";

import { Colors } from "../../styles";

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
    type: string;
    articles: IArticle[];
    createArticleHandler: (d: any) => void;
    deleteArticleHandler: (d: any) => void;
    updateArticleHandler: (d: any) => (data: any) => void;
}

const Layout: React.SFC<IProps> = ({
    articles,
    createArticleHandler,
    updateArticleHandler,
    deleteArticleHandler,
    type,
}) => {
    const bbToken = localStorage.getItem("bbToken");
    return (
        <MainContent>
            {articles[0] && <Title type={articles[0].type} />}
            <div style={{ marginBottom: "40px" }}>
                {articles.map((article, indx) => (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <RenderArticle key={indx} article={article} />
                        {bbToken && (
                            <div style={styles.adminBtnContainer}>
                                <NewsItemDialog
                                    articleData={article}
                                    type={type}
                                    isEditForum={true}
                                    onSubmit={updateArticleHandler(article._id)}
                                />
                                <Tooltip title="Delete">
                                    <Delete
                                        style={styles.adminBtn}
                                        onClick={() =>
                                            deleteArticleHandler(article._id)
                                        }
                                    />
                                </Tooltip>
                            </div>
                        )}
                    </div>
                ))}
                <div style={{ width: "200px", margin: "0 auto 40px auto" }}>
                    {bbToken && (
                        <NewsItemDialog
                            onSubmit={createArticleHandler}
                            type={type}
                        />
                    )}
                </div>
            </div>
        </MainContent>
    );
};

export default Layout;

const styles = {
    adminBtnContainer: {
        width: "48px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginRight: "10px",
    },
    adminBtn: {
        color: Colors.GREEN,
        cursor: "pointer",
    },
};
