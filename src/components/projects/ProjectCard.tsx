import * as React from "react";
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface IProps {
    name: string;
    projects: string[];
}
const Project: React.SFC<IProps> = ({ name, projects }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{name}</Typography>
            </ExpansionPanelSummary>
            <div style={{ padding: "0px 0px 20px 40px" }}>
                {projects.map(project => (
                    <Typography style={{ fontSize: "14px" }}>
                        {project}
                    </Typography>
                ))}
            </div>
        </ExpansionPanel>
    );
};

export default Project;
