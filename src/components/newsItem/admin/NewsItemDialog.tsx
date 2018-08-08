import * as React from "react";
import { Button, Dialog, TextField, Tooltip } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { Colors } from "../../../styles";

interface IState {
    title: string;
    text: string;
    url: string;
    imgUrl: string;
    open: boolean;
    [index: string]: string | boolean;
}

interface IProps {
    articleData?: {
        title: string;
        text: string;
        url: string;
        imgUrl: string;
        _id: string;
    };
    isEditForum?: boolean;
    type: string;
    onSubmit: (d: any) => void;
}

class NewsItemDialog extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            url: "",
            imgUrl: "",
            open: false,
        };
    }

    componentDidMount() {
        if (this.props.articleData) {
            const { title, text, url, imgUrl } = this.props.articleData;
            this.setState({ title, text, url, imgUrl });
        }
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleChange = (field: "title" | "text" | "url" | "imgUrl") => e => {
        this.setState({ [field]: e.target.value });
    };

    isOkToSubmit() {
        const { title, text, url, imgUrl } = this.state;
        return Boolean(title && text && url && imgUrl);
    }

    onSubmit() {
        this.setState({ open: false });
        const { title, text, url, imgUrl } = this.state,
            { type } = this.props;

        const submitData = { title, text, url, imgUrl, type };

        this.props.onSubmit(submitData);
    }

    public render() {
        return (
            <React.Fragment>
                {this.props.isEditForum ? (
                    <Tooltip title="Edit">
                        <Edit
                            style={{
                                color: Colors.GREEN,
                                cursor: "pointer",
                            }}
                            onClick={() => this.setState({ open: true })}
                        />
                    </Tooltip>
                ) : (
                    <Button
                        variant="outlined"
                        onClick={() => this.setState({ open: true })}
                    >
                        Add News
                    </Button>
                )}

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
                            id="title"
                            label="title"
                            value={this.state.title}
                            onChange={this.handleChange("title")}
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            id="text"
                            label="text"
                            value={this.state.text}
                            onChange={this.handleChange("text")}
                            margin="normal"
                            multiline
                            rows={6}
                            fullWidth
                        />

                        <TextField
                            id="url"
                            label="url"
                            value={this.state.url}
                            onChange={this.handleChange("url")}
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            id="imgUrl"
                            label="imgUrl"
                            value={this.state.imgUrl}
                            onChange={this.handleChange("imgUrl")}
                            margin="normal"
                            fullWidth
                        />

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
            </React.Fragment>
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

export default NewsItemDialog;
