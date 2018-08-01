import * as React from 'react';
import axios from 'axios';

class LogIn extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	onClickHandler(e: any) {
		e.preventDefault();
		const url = `${process.env.SERVER_ADDRESS}/api/user/login`;
		console.log(url);
		axios
			.post(url, this.state)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}

	onChangeHandler(e: any) {
		const name = e.target.name;
		this.setState({
			[name]: e.target.value,
		});
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<form>
					<label>
						Email:
						<input
							type="email"
							name="email"
							onChange={(e) => this.onChangeHandler(e)}
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							name="password"
							onChange={(e) => this.onChangeHandler(e)}
						/>
					</label>
					<input
						type="submit"
						value="Submit"
						onClick={(e) => this.onClickHandler(e)}
					/>
				</form>
			</div>
		);
	}
}
const style = {
	margin: 15,
};

export default LogIn;
