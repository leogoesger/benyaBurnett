import * as React from "react";

import { Logo, NavItems, Direction } from "./";
import { Colors } from "../../styles";

const Layout = () => {
    return (
        <div style={styles.container}>
            <Logo />
            <NavItems />
            <Direction />
        </div>
    );
};

export default Layout;

const styles = {
    container: {
        backgroundColor: Colors.GREEN,
        height: "800px",
        width: "250px",
    },
};
