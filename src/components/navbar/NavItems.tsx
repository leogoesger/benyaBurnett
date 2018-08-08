import * as React from "react";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { ServicesNav } from "./";

interface IProps {
    pathname: string;
}

interface IState {
    isExpanded: boolean;
    pathname: string;
}

class NavItems extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            pathname: "",
        };
    }

    handleServiceClick = () => {
        this.setState({ isExpanded: !this.state.isExpanded });
    };

    render() {
        return (
            <div className="nav-links">
                <Link to="/">
                    <div className="nav-link">HOME</div>
                </Link>
                <Link to="/team">
                    <div className="nav-link">TEAM</div>
                </Link>

                <div
                    className="nav-link"
                    style={{
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <Link
                        to="/services"
                        style={{ cursor: "pointer", color: "#e0e0e0" }}
                    >
                        <div onClick={this.handleServiceClick}>SERVICES</div>
                    </Link>
                    {this.state.isExpanded ? (
                        <ExpandLess
                            style={{
                                margin: "-5px 0px 0px 100px",
                                cursor: "pointer",
                            }}
                            onClick={this.handleServiceClick}
                        />
                    ) : (
                        <ExpandMore
                            style={{
                                margin: "-5px 0px 0px 100px",
                                cursor: "pointer",
                            }}
                            onClick={this.handleServiceClick}
                        />
                    )}
                </div>

                <ServicesNav isExpanded={this.state.isExpanded} />
                <Link to="/projects">
                    <div className="nav-link">PROJECTS</div>
                </Link>
                <Link to="/news">
                    <div className="nav-link">NEWS</div>
                </Link>
                <Link to="/awards">
                    <div className="nav-link">AWARDS</div>
                </Link>
                <Link to="/contact">
                    <div className="nav-link">CONTACT</div>
                </Link>
            </div>
        );
    }
}

export default NavItems;
