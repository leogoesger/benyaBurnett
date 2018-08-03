import * as React from "react";
import axios from "axios";
import { AdminLayout } from "../components/admin";

interface IProps {
	history: {
		push: (path: string) => void;
	};
}

<<<<<<< HEAD
class Admin extends React.PureComponent<IProps, {}> {
    componentDidMount() {
        const token = localStorage.getItem("bbToken");
        if (!token) return this.props.history.push("/");

        axios
            .get(`${process.env.SERVER_ADDRESS}/api/user/getme`, {
                headers: { bbToken: token },
            })
            .catch(e => {
                localStorage.removeItem("bbToken");
                return this.props.history.push("/");
            });
    }
=======
interface IState {
	email: string;
}

class Admin extends React.PureComponent<IProps, IState> {
	state = {
		email: "",
	};
	async componentDidMount() {
		const token = localStorage.getItem("bbToken");
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
>>>>>>> BB-21,23: validate login form, post article

	logOutHandler = () => {
		this.props.history.push("/");
		localStorage.removeItem("bbToken");
	};

	render() {
		return (
			<AdminLayout
				logOutHandler={this.logOutHandler}
				email={this.state.email}
			/>
		);
	}
}

export default Admin;
