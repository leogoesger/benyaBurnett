import * as React from "react";
import { Button } from "@material-ui/core";

import Title from "./Title";
import { ContactUs } from "../../../containers";

const Codes = () => {
    return (
        <div className="main-content">
            <Title title={"Codes Standards and Guidelines development"} />
            <div className="main-content-paragraph">
                We serve in the development of standards, codes and ordinances
                for the lighting industry and broader use in national standards
                and for city, state and national governments. Our unparalleled
                experience and expertise ensure rapid development, competent
                consultation, expert public review and follow up support and
                education. Experience includes
            </div>
            <h2 className="main-content-subheader">
                CALIFORNIA TITLE 24 Building Energy Efficiency Standards
            </h2>
            <ul className="main-content-ordered-list">
                <li>
                    Principal Engineer, 2008 Lighting Standards (part of
                    Architectural Energy Team)
                </li>
                <li>
                    Principal Engineer, 2005 Lighting Standards (part of
                    Architectural Energy Team)
                </li>
                <li>
                    Principal Engineer, 1992 Standards (part of Eley and
                    Associates Team)
                </li>
                <li>
                    Member, California Energy Commission Advanced Lighting
                    Professional Advisory Group (ALPAC)
                </li>
                <li> Pro bono Advisor and Consultant, 1987-2005</li>
                <li> Title 24-90.1 Liaison 1992-1997</li>
            </ul>
            <h2 className="main-content-subheader">
                ASHRAE/IESNA/ANSI Standard 90.1
            </h2>
            <ul className="main-content-ordered-list">
                <li>Member SSPC 90.1, 1992-1997</li>
                <li>Member SSPC 90.1 Lighting Subcommittee, 1992-1997</li>
                <li>Advisory Member IESNA Energy Management Committee</li>
            </ul>

            <h2 className="main-content-subheader">
                NECA/IESNA/ANSI National Electrical Installation Standards
            </h2>
            <ul className="main-content-ordered-list">
                <li>
                    Developer, IESNA 500-1998, Recommended Practice for
                    Installing Indoor Commercial Lighting Systems (ANSI)
                </li>
                <li>
                    Developer, IESNA 501-2000, Recommended Practice for
                    Installing Exterior Lighting Systems (ANSI)
                </li>
                <li>
                    Developer, IESNA 502-1999, Recommended Practice for
                    Installing Industrial Lighting Systems (ANSI)
                </li>
            </ul>

            <h2 className="main-content-subheader">
                International Dark Sky Association Model Lighting Ordinance
                (MLO)
            </h2>
            <ul className="main-content-ordered-list">
                <li>Chair, Model Lighting Ordinance Task Force 2001-2004</li>
            </ul>

            <h2 className="main-content-subheader">
                Advanced Lighting Guidelines
            </h2>
            <ul className="main-content-ordered-list">
                <li>Author, Advanced Lighting Guidelines 2003</li>
                <li>Author, Advanced Lighting Guidelines 2001</li>
                <li>Author, Advanced Lighting Guidelines 1993</li>
                <li>Author, Advanced Lighting Guidelines 1990</li>
            </ul>

            <h2 className="main-content-header">
                ENERGY CODE DEVELOPMENT INFORMATION AND DOWNLOADS
            </h2>

            <div className="main-content-paragraph">
                We continue to support the development of energy codes as a
                principal means of sustainable design and reduction in
                greenhouse gases. Recently, a number of proposed changes in IECC
                and ASHRAE/IESNA Energy Codes have been proposed, and we have
                filed comments recommending the suspension of proposed lighting
                energy code changes and in some cases the reversal of changes
                made in the past few years as being unrealistically aggressive.
                Bad codes result in their being ignored whenever possible and
                serve only to penalize responsible design professionals.
            </div>
            <div className="main-content-paragraph">
                At the request of IECC, we have made the following documents
                available with respect to the 2005 code development cycle (click
                to download PDF file):
            </div>
            <ul>
                <li>White paper, Energy Codes and Retail Lighting in 2005</li>
                <li>Addendum, Revised Tables Energy Code Issues</li>
            </ul>
            <div className="main-content-paragraph">
                The purpose of these documents was to demonstrate how the
                various energy codes vary with respect to retail lighting. We
                believe that Title 24 2005 is the best of the current codes - of
                course, since we helped develop it. But seriously, we did a lot
                of work testing the code against real stores between 2001 and
                2004 and remain convinced that Title 24 does a better and more
                equitable job of allocating retail lighting power. Moreover, we
                think that both 2003 IECC and 2001 and 2004 90.1 contain a
                fundamental misunderstanding of the additional display lighting
                allowance developed by the original 90.1-1999 team that makes
                the later codes unnecessarily more complex and in fact probably
                fail to control lighting energy use any better than 90.1-1999.
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

const btnStyle = {
    width: "160px",
    fontSize: "12px",
    color: "#e0e0e0",
    fontWeight: 700,
};

export default Codes;
