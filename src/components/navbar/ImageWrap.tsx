import * as React from "react";

const ImageWrap = ({ img, width, height }) => {
    return (
        <div
            className="animated fadeIn slow delay-2s"
            style={{ display: "flex", justifyContent: "center" }}
        >
            <img src={img} alt="alt" width={width} height={height} />
        </div>
    );
};

export default ImageWrap;
