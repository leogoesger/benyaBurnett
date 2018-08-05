import * as React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogContentText,
} from "@material-ui/core";

interface IProps {
	article: IArticle;
	removeArticleHandler: (id: string) => void;
	fetchArticles: () => void;
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

class ConfirmDelete extends React.PureComponent<IProps, {}> {
	state = { open: false };

	handleClose() {
		this.setState({ open: false });
	}

	handleOpen() {
		this.setState({ open: true });
	}

	handleDelete() {
		this.props.removeArticleHandler(this.props.article._id);
		this.props.fetchArticles();
		this.setState({ open: false });
	}

	render() {
		return (
			<div>
				<div onClick={() => this.handleOpen()}>
					{this.props.article.title}
				</div>
				<Dialog
					open={this.state.open}
					onClose={() => this.handleClose()}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						{"Delete Article?"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<h1>{this.props.article.title}</h1>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={() => this.handleClose()}
							color="primary"
							autoFocus
						>
							Cancle
						</Button>
						<Button
							onClick={() => this.handleDelete()}
							color="primary"
						>
							Delete
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default ConfirmDelete;
