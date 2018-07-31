import * as React from "react";
import { Layout } from "../components/navbar";

interface IProps {
    location: {
        pathname: string;
    };
}

class Navbar extends React.PureComponent<IProps, any> {
    render() {
        return <Layout pathname={this.props.location.pathname} />;
    }
}

export default Navbar;
