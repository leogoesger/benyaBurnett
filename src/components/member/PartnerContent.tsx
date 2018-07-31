import * as React from "react";
import { Typography } from "@material-ui/core";
import { members } from "../../static/reference";

const PartnerContent = () => {
    return (
        <div>
            {members.partners.companies.map(company => {
                return (
                    <a href={company.companyUrl}>
                        <div
                            key={company.name}
                            style={{
                                display: "flex",
                                cursor: "pointer",
                                marginTop: "20px",
                                padding: "0 40px",
                            }}
                        >
                            <img
                                src={company.imgUrl}
                                alt={company.name}
                                width="220px"
                                height="80px"
                                style={{
                                    border: "1px solid #827413",
                                    padding: "4px",
                                }}
                            />
                            <div style={{ paddingLeft: "20px" }}>
                                <h1
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 400,
                                    }}
                                >
                                    {company.name}
                                </h1>
                                <Typography
                                    style={{
                                        fontSize: "14px",
                                        paddingTop: "6px",
                                    }}
                                >
                                    {company.description}
                                </Typography>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default PartnerContent;
