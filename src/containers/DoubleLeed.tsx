import * as React from "react";
import axios from "axios";
import { findIndex, propEq } from "ramda";
import { DoubleLeedLayout } from "../components/doubleLeed";
import { createArticle, deleteArticle, updateArticle } from "../utils/APIs";

interface IArticle {
    title: string;
    text: string;
    url: string;
    date: string;
    imgUrl: string;
    type: string;
    _id: string;
}

interface IState {
    articles: IArticle[];
}

class DoubleLeed extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        this.fetchArticlesByType();
    }

    createArticleHandler = (d) => {
        return createArticle({ ...d, date: new Date() }).then(
            ({ data }: any) => {
                const { articles } = this.state;
                articles.push(data);
                this.setState({ articles });
            }
        );
    };

    deleteArticleHandler = (id) => {
        return deleteArticle(id).then(() => {
            const { articles } = this.state;
            const index = findIndex(propEq("_id", id))(articles);
            articles.splice(index, 1);
            this.setState({ articles });
        });
    };

    updateArticleHandler = (id) => (data) => {
        return updateArticle({ ...data, _id: id }).then(({ data }: any) => {
            const { articles } = this.state;
            const index = findIndex(propEq("_id", data._id))(articles);
            articles[index] = data;
            this.setState({ articles });
        });
    };

    async fetchArticlesByType() {
        const type = "leed-well";
        const url = `${process.env.SERVER_ADDRESS}/api/articles/${type}`;
        try {
            const res = await axios.get(url);
            this.setState({
                articles: res.data,
            });
        } catch (e) {
            throw e;
        }
    }

    render() {
        if (!this.state.articles) return null;
        const type = "leed-well";

        const { articles } = this.state;
        articles.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        return (
            <DoubleLeedLayout
                articles={articles}
                createArticleHandler={this.createArticleHandler}
                deleteArticleHandler={this.deleteArticleHandler}
                updateArticleHandler={this.updateArticleHandler}
                type={type}
            />
        );
    }
}

export default DoubleLeed;
