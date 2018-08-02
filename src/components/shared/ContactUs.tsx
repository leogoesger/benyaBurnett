import * as React from "react";
import { Button, Dialog, TextField } from "@material-ui/core";
import { Colors } from "../../styles";

interface IState {
    name: string;
    open: boolean;
    email: string;
    message: string;
    phone: string;
    [index: string]: string | boolean;
}

interface IInfo {
    email: string;
    phone: string;
    msg: string;
    name: string;
}
interface IProps {
    onSubmit: (d: IInfo) => void;
}

class ContactUs extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            phone: "",
            open: false,
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (field: "name" | "email" | "message" | "phone") => e => {
        this.setState({ [field]: e.target.value });
    };

    onSubmit() {
        this.setState({ open: false });
        const { name, email, message, phone } = this.state;
        this.props.onSubmit({ name, email, phone, msg: message });
    }

    public render() {
        return (
            <div>
                <Button
                    variant="outlined"
                    onClick={() => this.setState({ open: true })}
                >
                    Contact Us
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
                            Contact Us
                        </h1>
                        <TextField
                            id="name"
                            label="name"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="email"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="phone"
                            label="phone"
                            value={this.state.phone}
                            onChange={this.handleChange("phone")}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="message"
                            label="message"
                            multiline
                            rows="6"
                            value={this.state.message}
                            onChange={this.handleChange("message")}
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

export default ContactUs;
