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

    render() {
        return (
            <div>
                <AdminLayout
                    logOutHandler={this.logOutHandler}
                    didPost={this.state.didPost}
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
