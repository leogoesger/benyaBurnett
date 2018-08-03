import * as React from "react";
import MaskedInput from "react-text-mask";
import {
    Button,
    Dialog,
    FormControl,
    TextField,
    Input,
    InputLabel,
    FormHelperText,
} from "@material-ui/core";

import { Colors } from "../../styles";
import { validateEmail, validateMessage } from "../../utils/helpers";

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

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={[
                "(",
                /[1-9]/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
            ]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

class ContactUs extends React.PureComponent<IProps, IState> {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            phone: "(   )    -    ",
            open: false,
        };
    }
=======
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
>>>>>>> BB-21,23: validate login form, post article

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = (field: "name" | "email" | "message" | "phone") => (e) => {
		this.setState({ [field]: e.target.value });
	};

<<<<<<< HEAD
    isOkToSubmit() {
        const { name, email, message, phone } = this.state;
        const allFields = Boolean(name && email && message && phone);
        return Boolean(
            allFields && validateEmail(email) && validateMessage(message)
        );
    }

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

                        <FormControl fullWidth style={{ marginTop: "16px" }}>
                            <InputLabel htmlFor="formatted-email">
                                Email
                            </InputLabel>
                            <Input
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                                id="formatted-email"
                            />
                            {!validateEmail(this.state.email) &&
                                this.state.email && (
                                    <FormHelperText
                                        style={{ color: "#ef5350" }}
                                    >
                                        Please Enter Valid Email Address.
                                    </FormHelperText>
                                )}
                        </FormControl>

                        <FormControl fullWidth style={{ marginTop: "16px" }}>
                            <InputLabel htmlFor="formatted-phone">
                                Phone number
                            </InputLabel>
                            <Input
                                value={this.state.phone}
                                onChange={this.handleChange("phone")}
                                id="formatted-phone"
                                inputComponent={TextMaskCustom}
                            />
                        </FormControl>

                        <FormControl fullWidth style={{ marginTop: "16px" }}>
                            <InputLabel htmlFor="formatted-message">
                                Your Message
                            </InputLabel>
                            <Input
                                value={this.state.message}
                                onChange={this.handleChange("message")}
                                id="formatted-message"
                                multiline
                                rows="6"
                            />
                            {!validateMessage(this.state.message) &&
                                this.state.message && (
                                    <FormHelperText
                                        style={{ color: "#ef5350" }}
                                    >
                                        Minimum length for the message is 60
                                        characters.
                                    </FormHelperText>
                                )}
                        </FormControl>

                        <div
                            className="submit-btn"
                            style={{
                                ...btnStyle,
                                fontFamily: "Helvetica",
                                borderRadius: "2px",
                                backgroundColor: this.isOkToSubmit()
                                    ? Colors.OFFGREEN
                                    : "#bdbdbd",
                                textAlign: "center",
                                paddingTop: "10px",
                                boxSizing: "border-box",
                                cursor: this.isOkToSubmit()
                                    ? "pointer"
                                    : "not-allowed",
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
=======
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
>>>>>>> BB-21,23: validate login form, post article
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
