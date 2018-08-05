import * as React from "react";
import axios from "axios";
import { NewsItemLayout } from "../components/newsItem";

interface IProps {
	match: {
		params: {
			newsItem: string;
		};
	};
}

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
			this.setState({
				articles: res.data,
			});
		} catch (e) {
			throw e;
		}
	}

	render() {
		if (!this.state.articles) return null;
		return <NewsItemLayout articles={this.state.articles} />;
	}
}

export default NewsItem;
