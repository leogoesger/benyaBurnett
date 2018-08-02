import * as React from "react";
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { NewsLayout } from "../components/newsItem";

interface IProps extends RouteComponentProps<any>, React.Props<any> {}

interface IArticle {
	title: string;
	text: string;
	url: string;
	date: Date;
	type: string;
}
interface IState {
	articles: IArticle[];
}

class NewsItem extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}

	componentDidMount() {
		this.fetchArticlesByType();
	}

	async fetchArticlesByType() {
		const type = this.props.match.params.newsItem;
		const url = `${process.env.SERVER_ADDRESS}/api/articles/${type}`;
		try {
			const res = await axios.get(url);
			console.log(res);
			if (res.data) {
				this.setState({
					articles: res.data,
				});
			}
			console.log(this.state.articles);
		} catch (e) {
			throw e;
		}
	}

	render() {
		if (!this.state.articles) return null;
		return <NewsLayout articles={this.state.articles} />;
	}
}

export default NewsItem;
