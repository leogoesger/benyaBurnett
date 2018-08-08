import * as React from "react";
import { Link } from "react-router-dom";
import { services } from "../../static/reference";
import { ExpansionPanel } from "@material-ui/core";

const getText = (text: string) => {
    if (text.length > 34) {
        return text.slice(0, 34) + "...";
    }
    return text;
};

const ServicesNav = ({ isExpanded }) => {
    return (
        <ExpansionPanel
            expanded={isExpanded}
            style={{
                backgroundColor: "rgb(89, 77, 17, 1)",
                fontSize: "12px",
                margin: "0px",
            }}
        >
            <div style={{ padding: "10px" }}>
                {services.map(service => (
                    <div key={service.to} style={{ lineHeight: "20px" }}>
                        <Link
                            to={service.to}
                            style={{ color: "#bdbdbd" }}
                            className="service-nav"
                        >
                            - {getText(service.displayName)}
                        </Link>
                    </div>
                ))}
            </div>
        </ExpansionPanel>
    );
};

export default ServicesNav;
