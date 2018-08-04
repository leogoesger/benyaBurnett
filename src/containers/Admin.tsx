import * as React from "react";
import axios from "axios";
import { AdminLayout } from "../components/admin";

interface IProps {
    history: {
        push: (path: string) => void;
    };
}

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

    logOutHandler = () => {
        this.props.history.push("/");
        localStorage.removeItem("bbToken");
    };

    render() {
        return <AdminLayout logOutHandler={this.logOutHandler} />;
    }
}

export default Admin;
