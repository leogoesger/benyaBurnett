import * as React from "react";
import { MainContent, ContentHeader } from "../shared";
import { RenderArticle, NewsItemDialog } from "../newsItem";
import { Typography } from "@material-ui/core";
import { Colors } from "../../styles";
import { Tooltip } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

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
            <ContentHeader>
                World first Double Platinum LEED and WELL
            </ContentHeader>
            <div style={{ padding: "40px" }}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui...
                </Typography>
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
                                        onSubmit={updateArticleHandler(
                                            article._id
                                        )}
                                    />
                                    <Tooltip title="Delete">
                                        <Delete
                                            style={styles.adminBtn}
                                            onClick={() =>
                                                deleteArticleHandler(
                                                    article._id
                                                )
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
