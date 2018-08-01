import * as React from "react";
import { Button, TextField } from "@material-ui/core";

import { Colors } from "../../styles";

interface IProps {
    handleSubmit: (d: IState) => void;
}

interface IState {
    email: string;
    password: string;
    [index: string]: string;
}
class Form extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onClickHandler() {
        this.props.handleSubmit(this.state);
    }

    onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        });
    }

    handleChange = key => event => {
        this.setState({ [key]: event.target.value });
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
                <TextField
                    id="password"
                    label="password"
                    type="password"
                    onChange={this.handleChange("password")}
                    margin="normal"
                    fullWidth
                />
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
            </div>
        );
    }
}

export default Form;
