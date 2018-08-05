import * as React from "react";
import {
	Button,
	TextField,
	FormHelperText,
	Dialog,
	MenuItem,
	InputAdornment,
} from "@material-ui/core";
import { Colors } from "../../styles";
<<<<<<< HEAD
import { articleType } from "../../static/articleTypeMap";

interface IProps {
	submitArticleHandler: (d: IArticle) => void;
	clearPaperContent: () => void;
	didPost: boolean;
=======

interface IProps {
	submitArticleHandler: (d: IArticle) => void;
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
}

interface IArticle {
	title: string;
	text: string;
	type: string;
	imgUrl: string;
	url: string;
}

interface IState {
	title: string;
	text: string;
	type: string;
	imgUrl: string;
	url: string;
	[index: string]: string | boolean;
	open: boolean;
}

const defalutImgUrl =
	"https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8.jpg";

<<<<<<< HEAD
=======
const articleType = [
	{
		value: "reviews",
		label: "Reviwes",
	},
	{
		value: "online-lectures",
		label: "Online Lectures",
	},
	{
		value: "video-interviews",
		label: "Video Interviews",
	},
	{
		value: "published-articles",
		label: "Published Articles",
	},
	{
		value: "upcoming-events",
		label: "Upcoming Events",
	},
];

>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
class PostArticle extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: "",
			type: "",
			imgUrl: "",
			url: "",
<<<<<<< HEAD
			open: true,
		};
	}

	componentDidUpdate() {
		if (this.props.didPost) {
			this.props.clearPaperContent();
		}
	}

=======
			open: false,
		};
	}

>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = (field: "title" | "text" | "type" | "imgUrl" | "url") => (
		e
	) => {
		this.setState({ [field]: e.target.value });
	};

	onSubmit() {
<<<<<<< HEAD
=======
		this.setState({ open: false });
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
		const { title, text, type, imgUrl, url } = this.state;
		this.props.submitArticleHandler({
			title,
			text,
			type,
			imgUrl: imgUrl || defalutImgUrl,
			url,
		});
	}

	public render() {
		return (
<<<<<<< HEAD
			<div style={{ width: "600px", padding: "20px" }}>
				<h1
					style={{
						fontSize: "28px",
						color: Colors.GREEN,
						fontFamily: "Helvetica",
					}}
				>
					Post An Article
				</h1>
				<TextField
					id="title"
					label="Title"
					value={this.state.title}
					onChange={this.handleChange("title")}
					margin="normal"
					fullWidth
				/>
				<TextField
					id="text"
					label="Text"
					multiline
					rows="4"
					value={this.state.text}
					onChange={this.handleChange("text")}
					margin="normal"
					fullWidth
				/>
				<TextField
					select
					id="type"
					label="Type"
					value={this.state.type}
					onChange={this.handleChange("type")}
					InputProps={{
						startAdornment: <InputAdornment position="start" />,
					}}
					margin="normal"
					fullWidth
				>
					{articleType.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id="imgUrl"
					label="Link to Image"
					value={this.state.imgUrl}
					onChange={this.handleChange("imgUrl")}
					margin="normal"
					fullWidth
				/>
				<TextField
					id="url"
					label="Link to Article"
					value={this.state.url}
					onChange={this.handleChange("url")}
					margin="normal"
					fullWidth
				/>
				<div
					className="submit-btn"
					style={{
						...btnStyle,
						fontFamily: "Helvetica",
						borderRadius: "2px",
						backgroundColor: Colors.OFFGREEN,
						textAlign: "center",
						paddingTop: "10px",
						boxSizing: "border-box",
						cursor: "pointer",
					}}
					onClick={() => this.onSubmit()}
				>
					Submit
				</div>
=======
			<div>
				<Button
					variant="outlined"
					onClick={() => this.setState({ open: true })}
				>
					Post an article
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<div style={{ width: "400px", padding: "20px" }}>
						<h1
							style={{
								fontSize: "28px",
								color: Colors.GREEN,
								fontFamily: "Helvetica",
							}}
						>
							Post An Article
						</h1>
						<TextField
							id="title"
							label="Title"
							value={this.state.title}
							onChange={this.handleChange("title")}
							margin="normal"
							fullWidth
						/>
						<TextField
							id="text"
							label="Text"
							multiline
							rows="6"
							value={this.state.text}
							onChange={this.handleChange("text")}
							margin="normal"
							fullWidth
						/>
						<TextField
							select
							id="type"
							label="Type"
							value={this.state.type}
							onChange={this.handleChange("type")}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										{` `}
									</InputAdornment>
								),
							}}
							margin="normal"
							fullWidth
						>
							{articleType.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							id="imgUrl"
							label="Link to Image"
							value={this.state.imgUrl}
							onChange={this.handleChange("imgUrl")}
							margin="normal"
							fullWidth
						/>
						<TextField
							id="url"
							label="Link to Article"
							value={this.state.url}
							onChange={this.handleChange("url")}
							margin="normal"
							fullWidth
						/>
						<div
							className="submit-btn"
							style={{
								...btnStyle,
								fontFamily: "Helvetica",
								borderRadius: "2px",
								backgroundColor: Colors.OFFGREEN,
								textAlign: "center",
								paddingTop: "10px",
								boxSizing: "border-box",
								cursor: "pointer",
							}}
							onClick={() => this.onSubmit()}
						>
							Submit
						</div>
					</div>
				</Dialog>
>>>>>>> 1695f385f924606309b9272b0e3e4381a6f5587e
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

export default PostArticle;
