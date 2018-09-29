import * as React from "react";

import Title from "./Title";
import { ContactUs } from "../../../containers";

const Architectural = () => {
    return (
        <div className="main-content">
            <Title title={"Architectural and daylighting design"} />
            <div
                style={{
                    float: "right",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <img
                    src="https://benya.nyc3.digitaloceanspaces.com/service-architectural-1.jpg"
                    alt="expert"
                />
                <img
                    src="https://benya.nyc3.digitaloceanspaces.com/service-architectural-2.jpg"
                    alt="expert"
                    style={{ marginTop: "8px" }}
                />
            </div>
            <div className="main-content-paragraph">
                In 1995, James Benya became involved in the Portland AIA
                Architecture+Energy Program and became inspired by the prospects
                of daylighting to further reduce building energy use. Since
                then, Benya Lighting Design has become increasingly involved in
                the daylighting of its projects, and is now serving as the
                primary daylighting consultant on several significant projects
                including the new Sloan School of Business at MIT, the new Main
                Library at the University of Nevada at Reno, the Aqua Caliente
                Cultural Museum in Palm Springs, the Kavli Institute for
                Astrophysics at Stanford, and the Washington School for the
                Deaf. We work closely with the Portland Better Bricks
                Daylighting Lab, the Seattle Lighting Design Lab, and top
                daylighting gurus like Lisa Heschong to maximize the performance
                of the daylighting systems being designed for buildings.
            </div>
            <div className="main-content-paragraph">
                We use the latest tools to augment the architect's skills,
                including:
            </div>
            <ul className="main-content-ordered-list">
                <li>
                    Helping develop daylighting and fenestration concepts using
                    SkyCalc and other software to test each concept.
                </li>
                <li>
                    Helping analyze glazing systems for thermal, light
                    transmission and light color qualities using Optic 5.
                </li>
                <li>
                    Helping study interior spaces in detail using Lumen Designer
                    or Lumen Micro, ensuring optimum daylighting under all
                    conditions.
                </li>
                <li>
                    Designing electric lighting and lighting controls that
                    perfectly harvest every daylight lumen.
                </li>
            </ul>
            <div className="main-content-paragraph">
                In November 2003, James was quoted in the Wall Street Journal
                about the growing interest and need for daylighting. Among his
                comments, he noted that a building is not daylighted unless the
                electric lights are off during the day.
            </div>
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <ContactUs />
            </div>
        </div>
    );
};

export default Architectural;
