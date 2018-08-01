import * as React from "react";

import { Image, Logo, NavItems, Direction } from "./";
import { Colors } from "../../styles";

interface IProps {
    pathname: string;
}
const Layout: React.SFC<IProps> = ({ pathname }) => {
    return (
        <div style={styles.container}>
            <Logo />
            <NavItems />
            <Direction />
            <Image pathname={pathname} />
        </div>
    );
};

export default Layout;

const styles = {
    container: {
        backgroundColor: Colors.GREEN,
        height: "100%",
        minWidth: "250px",
        width: "20%",
    },
};
