import * as React from "react";
import { Button, TextField, FormHelperText } from "@material-ui/core";

import { Colors } from "../../styles";

interface IProps {
	handleSubmit: (d: IState) => void;
}

interface IState {
	email: string;
	password: string;
	[index: string]: any;
	validEmail: boolean;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export function validateValue(value: string, regex: any) {
	return regex.test(value);
}

class Form extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			validEmail: false,
		};
	}

	onClickHandler() {
		this.props.handleSubmit(this.state);
	}

	// onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
	// 	const name = e.target.name;
	// 	this.setState({
	// 		[name]: e.target.value,
	// 	});
	// }

	handleChange = (key) => (event) => {
		this.setState({ [key]: event.target.value }, () => {
			if (key === "email") {
				if (validateValue(this.state.email, emailRegex)) {
					this.setState({
						validEmail: true,
					});
				} else {
					this.setState({
						validEmail: false,
					});
				}
			}
		});
	};

	render() {
		return (
			<div>
				<TextField
					id="email"
					label="email"
					value={this.state.email}
					onChange={this.handleChange("email")}
					margin="normal"
					fullWidth
				/>
				{!this.state.validEmail &&
					this.state.email.length > 5 && (
						<FormHelperText
							id="emailErr"
							style={{ color: "red", fontSize: "0.75rem" }}
						>
							Invalid email
						</FormHelperText>
					)}
				<TextField
					id="password"
					label="password"
					type="password"
					onChange={this.handleChange("password")}
					margin="normal"
					fullWidth
				/>
				{this.state.password.length > 7 &&
					this.state.validEmail && (
						<Button
							variant="outlined"
							onClick={() => this.onClickHandler()}
							style={{
								float: "right",
								color: Colors.GREEN,
								marginTop: "20px",
							}}
						>
							Submit
						</Button>
					)}
			</div>
		);
	}
}

export default Form;
