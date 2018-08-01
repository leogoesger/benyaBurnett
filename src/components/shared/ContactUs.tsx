import * as React from "react";
import { Button } from "@material-ui/core";

class ContactUs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <div>
                <Button variant="outlined">Contact Us</Button>
            </div>
        );
    }
}

export default ContactUs;
