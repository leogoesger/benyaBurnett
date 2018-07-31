import * as React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <div className="nav-links">
            <Link to="home">
                <div className="nav-link">Home</div>
            </Link>
            <Link to="team">
                <div className="nav-link">Team</div>
            </Link>
            <Link to="services">
                <div className="nav-link">Services</div>
            </Link>
            <Link to="projects">
                <div className="nav-link">Projects</div>
            </Link>
            <Link to="news">
                <div className="nav-link">News</div>
            </Link>
            <Link to="awards">
                <div className="nav-link">Awards</div>
            </Link>
            <Link to="contact">
                <div className="nav-link">Contact</div>
            </Link>
        </div>
    );
};

export default NavItems;
