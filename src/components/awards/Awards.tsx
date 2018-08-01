import * as React from "react";
import { Typography } from "@material-ui/core";

const Awards = () => {
    return (
        <div>
            <div>
                <Typography variant="title" style={{ fontSize: "16px" }}>
                    The Edison Award
                </Typography>
                <ul style={{ listStyleType: "square" }}>
                    <div style={{ paddingLeft: "40px" }}>
                        <li>
                            2011 Edison Award for Environmental Design,
                            UNIVERSITY OF ARIZONA, SIXTH STREET HOUSING
                        </li>
                        <li>
                            2008 The EDISON AWARD, SACRAMENTO MEMORIAL
                            AUDITORIUM
                        </li>
                        <li>
                            2008 Edison Award for Environmental Design,
                            SACRAMENTO MEMORIAL AUDITORIUM
                        </li>
                        <li>
                            2002 Edison Award for Environmental Design, LEWIS
                            AND CLARK LAW LIBRARY
                        </li>
                        <li>1996 Award of Merit, IL FORNAIO PORTLAND</li>
                        <li>1992 Award of Merit, ESPRIT DE CORP</li>
                        <li>1989 Award of Excellence, RUSS BUILDING</li>
                        <li>1989 Award of Excellence, BANK OF THE WEST</li>
                        <li>1989 Award of Merit, BROWN AND BAIN</li>
                        <li>1984 The EDISON AWARD, FRANCO FERINI</li>
                    </div>
                </ul>
            </div>
            <div>
                <Typography variant="title" style={{ fontSize: "16px" }}>
                    Other Awards
                </Typography>
                <ul style={{ listStyleType: "square" }}>
                    <div style={{ paddingLeft: "40px" }}>
                        <li>
                            2011 Beyond Green Advanced Building Citation,
                            PORTLAND COMMUNITY COLLEGE
                        </li>
                        <li>
                            2011 AIA Award for Community Design, HAVEN FOR HOPE
                        </li>
                        <li>2009 AIA COTE Top Ten, THE CHARTWELL SCHOOL</li>
                        <li>
                            2006 AIA COTE Top Ten, THE SIDWELL FRIENDS SCHOOL
                        </li>
                        <li>2004 IALD Presidential Special Service Citation</li>
                        <li>
                            2003 Better Bricks Professional Services First
                            Runner Up
                        </li>
                        <li>
                            2003 IALD International Lighting Design Awards
                            Special Citation, SYMANTEC
                        </li>
                        <li>1998 AIA Award, Architecture+Energy Program</li>
                        <li>
                            1995 US Department of Transportation and Endowment
                            for the Arts
                        </li>
                    </div>
                </ul>
            </div>
            <div>
                <Typography variant="title" style={{ fontSize: "16px" }}>
                    Design for Transportation Award of Merit
                </Typography>
                <ul style={{ listStyleType: "square" }}>
                    <div style={{ paddingLeft: "40px" }}>
                        <li>1994 IESNA Presidential Citation</li>
                        <li>
                            1990 IESNA South Pacific Coast Vice President’s
                            Award
                        </li>
                        <li>
                            1990 Halo/ASID First Place Commercial, BANK OF THE
                            WEST
                        </li>
                        <li>1980 Michigan Governor’s Award</li>
                        <li>
                            1976 Electrical Consultant Energy Efficiency Design
                            Award
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Awards;
