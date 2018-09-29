import * as React from "react";
import Title from "./Title";
import { ContactUs } from "../../../containers";

const Codes = () => {
    return (
        <div className="main-content">
            <Title title={"Product development and consulting"} />
            <div
                style={{
                    float: "right",
                    margin: "10px",
                    display: "flex",
                }}
            >
                <img
                    src="https://benya.nyc3.digitaloceanspaces.com/service-product-1.jpg"
                    alt="expert"
                />
                <img
                    src="https://benya.nyc3.digitaloceanspaces.com/service-product-2.jpg"
                    alt="expert"
                />
            </div>
            <h2 className="main-content-header">Product Concept and Design</h2>
            <div className="main-content-paragraph">
                James Benya has succeeded in foreseeing lighting trends and
                technologies and providing his clients with a unique and
                advanced perspective. Possessing the most complete and thorough
                knowledge base of lighting equipment and applications, Benya
                Lighting Design helps clients develop products and concepts for
                the future. We conceive new lighting products that are designed
                for the future lighting markets of North America and the
                world.We work primarily with energy efficient light sources in
                combining industrial design, photometric performance, style and
                broad market possibilities.
            </div>
            <h2 className="main-content-header">
                Product Assessment, Marketability, and Marketing Assistance
            </h2>
            <div className="main-content-paragraph">
                We can help a manufacturer size up the appeal and opportunity of
                a proposed new lighting product. Or we can help determine better
                ways to market existing ones. We know what Specifiers want and
                need - and we provide candid advice that manufacturers need to
                hear.
            </div>
            <h2 className="main-content-header">Due Diligence</h2>
            <div className="main-content-paragraph">
                Investors in lighting companies and products need counsel and
                opinions from time to time and Benya Lighting Design is among
                the very best choices for thoughtful advice. We can help quickly
                and sanely evaluate a product, a company, an invention - and we
                gladly sign and observe non disclosure documents to protect
                intellectual property and financial interest
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
