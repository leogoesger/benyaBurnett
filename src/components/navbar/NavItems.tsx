import * as React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <div>
            <div className="nav-links">
                <Link to="about">About</Link>
            </div>
            <div className="nav-links">
                <Link to="team">Team</Link>
            </div>
            <div className="nav-links">
                <Link to="services">Services</Link>
            </div>
            <div className="nav-links">
                <Link to="projects">Projects</Link>
            </div>
            <div className="nav-links">
                <Link to="news">News</Link>
            </div>
            <div className="nav-links">
                <Link to="awards">Awards</Link>
            </div>
            <div className="nav-links">
                <Link to="contact">Contact</Link>
            </div>
        </div>
    );
};

export default NavItems;
