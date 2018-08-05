import * as React from "react";
import { Button, MenuItem, Menu, Paper } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { PostArticle, DeleteArticle } from "./";

interface IProps {
	submitArticleHandler: (d: IArticle) => void;
	removeArticleHandler: (d: string) => void;
	didPost: boolean;
}

interface IArticle {
	title: string;
	text: string;
	type: string;
	imgUrl: string;
	url: string;
}

interface IState {
	anchorEl: any;
	openPost: boolean;
	show: string;
	openPaper: boolean;
}

class ArticleManager extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			show: null,
			openPost: false,
			openPaper: false,
		};
	}

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleClick = (e) => {
		this.setState({ anchorEl: e.target });
	};

	showPost = () => {
		this.setState({ anchorEl: null, show: "post", openPaper: true });
	};

	showDelete = () => {
		this.setState({ anchorEl: null, show: "delete", openPaper: true });
	};

	clearPaperContent = () => {
		this.setState({ show: null });
	};

	render() {
		const { anchorEl } = this.state;
		let content = null;
		switch (this.state.show) {
			case "post":
				content = (
					<PostArticle
						submitArticleHandler={this.props.submitArticleHandler}
						clearPaperContent={this.clearPaperContent}
						didPost={this.props.didPost}
					/>
				);
				break;

			case "delete":
				content = (
					<DeleteArticle
						removeArticleHandler={this.props.removeArticleHandler}
						clearPaperContent={this.clearPaperContent}
					/>
				);
				break;
			default:
				content = <h1>Waiting</h1>;
		}

		return (
			<div>
				<Button
					aria-owns={anchorEl ? "simple-menu" : null}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					<MenuIcon />
					<h1 style={{ marginLeft: "10px" }}>Manage Articles</h1>
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.showPost}>Post Article</MenuItem>
					<MenuItem onClick={this.handleClose}>
						Update Articles
					</MenuItem>
					<MenuItem onClick={this.showDelete}>
						Delete Articles
					</MenuItem>
				</Menu>
				{this.state.openPaper && (
					<Paper style={{ width: "700px", padding: "20px" }}>
						{content}
					</Paper>
				)}
			</div>
		);
	}
}

const btnStyle = {
	width: "100px",
	fontSize: "16px",
	color: "#eeeeee",
	fontWeight: 100,
	height: "36px",
	margin: "20px auto",
};

export default ArticleManager;
