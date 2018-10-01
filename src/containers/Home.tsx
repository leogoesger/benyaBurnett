import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import { Layout } from "../components/home";
import { isBrowserNotSupported } from "../utils/helpers";

//const Home = () => <Layout />;

interface IProps {}

interface IState {
	dialogOpen: boolean;
}

class Home extends React.PureComponent<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: false,
		};
	}

	componentWillMount() {
		console.log("checking browser didmount");
		console.log(isBrowserNotSupported());
		isBrowserNotSupported() ? this.setState({ dialogOpen: true }) : null;
	}

	renderDialogMessage() {
		console.log("not supported");
		return (
			<div>
				{
					"Sorry, your browser may not be fully supported! We recommend Chrome v51+, Firefox v51+ or Edge v12+."
				}
			</div>
		);
	}

	handleClose() {
		this.setState({ dialogOpen: false });
	}

	render() {
		return (
			<React.Fragment>

				<Layout />
				<Dialog open={this.state.dialogOpen} onClose={this.handleClose}>
					{this.renderDialogMessage()}

					<div
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<Button onClick={() => this.handleClose()}>
							Continue
						</Button>
					</div>
				</Dialog>
			</React.Fragment>
		);
	}
}

export default Home;
