import * as React from "react";

import { articles } from "../../static/reference";
import { Colors } from "../../styles";

const Articles = () => {
    return (
        <div
            style={{
                width: "300px",
                backgroundColor: Colors.GREEN,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "440px",
            }}
        >
            {articles.map(article => {
                return (
                    <div
                        className="article-nav-item"
                        style={{
                            color: Colors.WHITE,
                        }}
                    >
                        <span style={{ fontWeight: 400 }}>
                            {article.displayName}
                        </span>
                        <div style={{ fontSize: "10px", marginTop: "6px" }}>
                            {article.description}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Articles;