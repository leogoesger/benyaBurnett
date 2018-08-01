import * as React from "react";

import { Colors } from "../../styles";

const People = ({ member }) => {
    return (
        <div style={{ display: "flex" }}>
            <img src={member.image} width="180px" height="220" />
            <div
                style={{
                    padding: "10px",
                    lineHeight: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <div>{member.company}</div>
                    <div style={{ fontWeight: 400 }}>{member.name}</div>
                    <div style={{ marginTop: "10px" }}>
                        <a href={member.website}>{member.website}</a>
                    </div>
                    <div style={{ marginTop: "10px" }}>{member.address}</div>
                    <div>{member.phone}</div>
                </div>
                <div>
                    <div
                        style={{
                            cursor: "pointer",
                            height: "20px",
                            color: "#e0e0e0",
                            backgroundColor: Colors.GREEN,
                            borderRadius: "2px",
                            textAlign: "center",
                            fontSize: "13px",
                            marginTop: "20px",
                        }}
                    >
                        Download CV
                    </div>
                    <div
                        style={{
                            cursor: "pointer",
                            height: "20px",
                            color: "#e0e0e0",
                            backgroundColor: Colors.OFFGREEN,
                            borderRadius: "2px",
                            textAlign: "center",
                            fontSize: "13px",
                            marginTop: "10px",
                        }}
                    >
                        Download Bio
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;

const btnStyle = {
    cursor: "pointer",
    height: "20px",
    color: "#e0e0e0",
    backgroundColor: Colors.OFFGREEN,
    borderRadius: "2px",
    textAlign: "center",
    paddingTop: "6px",
    fontSize: "13px",
};
