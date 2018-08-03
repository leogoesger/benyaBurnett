import * as React from "react";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import { MoodBad } from "@material-ui/icons";

import { Colors } from "../styles";
import { LoginLayout } from "../components/login";

interface IState {
    open: boolean;
    errorMsg: string;
}

interface IProps {
    history: {
        push: (path: string) => void;
    };
}

class Login extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            errorMsg: null,
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("bbToken");
        if (token) return this.props.history.push("/admin");
    }

    handleSubmit = async d => {
        const url = `${process.env.SERVER_ADDRESS}/api/user/login`;
        try {
            const res = await axios.post(url, d);
            if (res.data.success) {
                localStorage.setItem("bbToken", res.data.message.jwt);
                this.props.history.push("/");
            } else {
                this.setState({
                    open: true,
                    errorMsg: "Something is Wrong!",
                });
            }
        } catch (e) {
            this.setState({ open: true, errorMsg: "Something is Wrong!" });
        }
    };

    handleClose = () => {
        this.setState({ open: false, errorMsg: null });
    };

    render() {
        return (
            <div style={{ height: "100%" }}>
                <LoginLayout handleSubmit={this.handleSubmit} />
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
                            <MoodBad style={{ marginTop: "3px" }} />
                            <div
                                style={{ marginTop: "4px", marginLeft: "20px" }}
                            >
                                {this.state.errorMsg}
                            </div>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Login;
