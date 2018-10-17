import * as React from "react";
import Header from "../shared/ContentHeader";

const Title = () => {
    return (
        <Header>
            <div
                style={{
                    width: "1000px",
                    paddingBottom: "6px",
                    borderBottom: "6px solid #827717",
                }}
            >
                <span style={styles.logo}>BENYA BURNETT</span>
                <span style={styles.consult}>CONSULTANCY</span>
            </div>
        </Header>
    );
};

export default Title;

const styles = {
    logo: {
        fontWeight: 700,
        color: "#424242",
        fontFamily: "copperplate",
    },
    consult: {
        fontFamily: "copperplate",
        marginLeft: "15px",
        fontSize: "24px",
        color: "#827717",
    },
};
