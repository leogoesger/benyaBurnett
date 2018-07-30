import * as React from "react";
import { Button } from "@material-ui/core";

const Direction = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "120px",
                justifyContent: "space-between",
                margin: "40px",
            }}
        >
            <div
                style={{
                    color: "#bdbdbd",
                    fontWeight: 100,
                    fontSize: "13px",
                    marginLeft: "12px",
                }}
            >
                Visit our other websites:
            </div>
            <Button
                href="http://www.benyalighting.com/"
                target="_blank"
                style={{
                    ...btnStyle,
                    backgroundColor: "#A28F1A",
                }}
            >
                benyalighting.com
            </Button>
            <Button
                href="http://www.deborahburnett.com/"
                target="_blank"
                style={{
                    ...btnStyle,
                    backgroundColor: "#8D8656",
                }}
            >
                deborahburnett.com
            </Button>
        </div>
    );
};

export default Direction;

const btnStyle = {
    width: "160px",
    fontSize: "12px",
    color: "#e0e0e0",
    fontWeight: 100,
};
