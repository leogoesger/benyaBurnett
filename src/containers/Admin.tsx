import * as React from "react";
import axios from "axios";
import { AdminLayout } from "../components/admin";
import { Snackbar } from "@material-ui/core";
import { Send, MoodBad } from "@material-ui/icons";
import { Colors } from "../styles";

interface IProps {
	history: {
		push: (path: string) => void;
	};
}

interface IState {
	email: string;
	successMsg: string;
	errorMsg: null;
	open: boolean;
	didPost: boolean;
}

var token = "";

class Admin extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			successMsg: null,
			errorMsg: null,
			open: false,
			didPost: false,
		};
	}

	async componentDidMount() {
		token = localStorage.getItem("bbToken");
		if (!token) return this.props.history.push("/");
		try {
			const res = await axios.get(
				`${process.env.SERVER_ADDRESS}/api/user/getme`,
				{
					headers: { bbToken: token },
				}
			);
			this.setState({
				email: res.data.email,
			});
		} catch (error) {
			localStorage.removeItem("bbToken");
			if (!token) this.props.history.push("/");
		}
	}

	handleClose = () =>
		this.setState({
			open: false,
			successMsg: null,
			errorMsg: null,
		});

	logOutHandler = () => {
		this.props.history.push("/");
		localStorage.removeItem("bbToken");
	};

	submitArticleHandler = async (data) => {
		try {
			const res = await axios.post(
				`${process.env.SERVER_ADDRESS}/api/articles/post`,
				data,
				{
					headers: { bbToken: token },
				}
			);
			if (res.data.success) {
				this.setState({ didPost: true });
			} else {
				this.setState({ didPost: false });
			}
			this.setState({ successMsg: res.data.message, open: true });
		} catch (e) {
			this.setState({ errorMsg: e.response.data.message, open: true });
		}
	};

	updateArticleHandler = async (data) => {
		try {
			const res = await axios.post(
				`${process.env.SERVER_ADDRESS}/api/articles/update`,
				data,
				{
					headers: { bbToken: token },
				}
			);
			this.setState({ successMsg: res.data.message, open: true });
		} catch (e) {
			this.setState({ errorMsg: e.response.data.message, open: true });
		}
	};

	removeArticleHandler = async (data) => {
		try {
			const res = await axios.delete(
				`${process.env.SERVER_ADDRESS}/api/articles/remove/${data}`,
				{
					headers: { bbToken: token },
				}
			);
			this.setState({ successMsg: res.data.message, open: true });
		} catch (e) {
			this.setState({ errorMsg: e.response.data.message, open: true });
		}
	};

	render() {
		return (
			<div>
				<AdminLayout
					logOutHandler={this.logOutHandler}
					submitArticleHandler={this.submitArticleHandler}
					didPost={this.state.didPost}
					removeArticleHandler={this.removeArticleHandler}
					email={this.state.email}
				/>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={this.state.open}
					onClose={this.handleClose}
					ContentProps={{
						"aria-describedby": "message-id",
					}}
					message={
						<div
							id="message-id"
							style={{ color: Colors.WHITE, display: "flex" }}
						>
							{this.state.errorMsg ? (
								<MoodBad style={{ marginTop: "3px" }} />
							) : (
								<Send style={{ marginTop: "3px" }} />
							)}
							<div
								style={{ marginTop: "4px", marginLeft: "20px" }}
							>
								{this.state.successMsg || this.state.errorMsg}
							</div>
						</div>
					}
				/>
			</div>
		);
	}
}

export default Admin;
