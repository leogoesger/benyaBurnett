import * as React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <div className="nav-links">
            <Link to="/">
                <div className="nav-link">HOME</div>
            </Link>
            <Link to="/team">
                <div className="nav-link">TEAM</div>
            </Link>
            <Link to="/services">
                <div className="nav-link">SERVICES</div>
            </Link>
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
};

export default NavItems;
