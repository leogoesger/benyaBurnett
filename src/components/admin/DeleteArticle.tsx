import * as React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogContentText,
} from "@material-ui/core";
import { Colors } from "../../styles";
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";

interface IProps {
	removeArticleHandler: (d: string) => void;
	clearPaperContent: () => void;
}

interface IArticle {
	title: string;
	text: string;
	type: string;
	imgUrl: string;
	url: string;
	date: Date;
	_id: string;
}
interface IState {
	articles: IArticle[];
	open: boolean;
}

class DeleteArticle extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			open: false,
		};
	}

	componentDidMount() {
		this.fetchArticles();
	}

	async fetchArticles() {
		this.setState({ articles: null });
		const url = `${process.env.SERVER_ADDRESS}/api/articles`;
		try {
			const res = await axios.get(url);
			this.setState({
				articles: res.data,
			});
		} catch (e) {
			throw e;
		}
	}

	handleClose() {
		this.setState({ open: false });
	}

	render() {
		console.log(this.state);
		return (
			<div style={{ width: "600px", padding: "20px" }}>
				<h1
					style={{
						fontSize: "28px",
						color: Colors.GREEN,
						fontFamily: "Helvetica",
						marginBottom: "20px",
					}}
				>
					Click on article to Delete
				</h1>
				{this.state.articles &&
					this.state.articles.map((article) => {
						return (
							<div style={{ fontSize: "20px", padding: "10px" }}>
								<ConfirmDelete
									article={article}
									removeArticleHandler={
										this.props.removeArticleHandler
									}
									fetchArticles={() => this.fetchArticles()}
								/>
							</div>
						);
					})}
			</div>
		);
	}
}

export default DeleteArticle;
