import * as React from "react";
import Title from "./Title";
import { ContactUs } from "../../../containers";

const Codes = () => {
    return (
        <div className="main-content">
            <Title
                title={
                    "Streetlighting and DARK SKY compliant Design and Consultation"
                }
            />
            <div className="main-content-paragraph">
                <a
                    href={`https://sacramento.cbslocal.com/2019/01/16/davis-lighting-safety/`}
                    target="_blank"
                >
                    <div
                        style={{
                            display: "flex",
                            margin: "20px 0px 20px 0px",
                        }}
                    >
                        <img
                            src={
                                "https://benya.nyc3.digitaloceanspaces.com/news.jpg"
                            }
                            width="200px"
                            height="200px"
                            alt="Place Holder"
                        />

                        <div style={{ margin: "10px 20px", width: "450px" }}>
                            <h1 style={{ fontWeight: "bold" }}>
                                {
                                    "Davis Looking For Street Lighting Solutions To Increase Safety"
                                }
                                <span
                                    style={{
                                        fontWeight: 200,
                                        fontSize: "12px",
                                        paddingLeft: "10px",
                                    }}
                                >
                                    Posted on: {"2018-10-26"}
                                </span>
                            </h1>
                            <p
                                style={{
                                    marginTop: "5px",
                                    lineHeight: "20px",
                                }}
                            >
                                {
                                    "James Benya is a lighting designer and member of the Dark Sky Asociation who has worked with the city to improve outdoor lighting."
                                }
                            </p>
                        </div>
                    </div>
                </a>
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

export default Codes;
