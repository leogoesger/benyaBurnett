import axios from "axios";
import * as React from "react";
import { Snackbar } from "@material-ui/core";
import { ContactUsBtn } from "../components/shared";
import { Send, MoodBad } from "@material-ui/icons";

import { Colors } from "../styles";

const url = `${process.env.SERVER_ADDRESS}/api/contact`;

interface IState {
    successMsg: string;
    errorMsg: null;
    open: boolean;
}

class ContactUs extends React.PureComponent<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            successMsg: null,
            errorMsg: null,
            open: false,
        };
    }
    handleClose = () =>
        this.setState({
            open: false,
            successMsg: null,
            errorMsg: null,
        });

    submitHandler = async data => {
        try {
            const res: any = await axios.post(url, data);
            this.setState({ successMsg: res.data.message, open: true });
        } catch (e) {
            this.setState({ errorMsg: e.response.data.message, open: true });
        }
    };

    render() {
        return (
            <div>
                <ContactUsBtn onSubmit={this.submitHandler} />
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

export default ContactUs;
