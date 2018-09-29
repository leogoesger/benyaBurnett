import * as React from "react";
import { Typography } from "@material-ui/core";
import { MainContent, ContentHeader } from "../shared";
import { projects } from "../../static/reference";
import { sortProjects } from "../../utils/helpers";
import { ProjectCard } from "./";

const Layout = () => {
    const sortedProjects = sortProjects(projects);
    return (
        <MainContent>
            <ContentHeader>Projects</ContentHeader>
            <div style={{ padding: "40px", marginBottom: "40px" }}>
                <Typography>
                    The following projects include work at Benya Burnett
                    Consultancy, Benya Lighting Design, Pacific Lightworks,
                    Luminae Souter Lighting Design, and Smith Hinchman & Grylls.
                </Typography>
                <div style={{ margin: "20px auto", width: "96%" }}>
                    {sortedProjects.map(project => (
                        <ProjectCard
                            name={project.name}
                            projects={project.projects}
                        />
                    ))}
                </div>
            </div>
        </MainContent>
    );
};

export default Layout;
