import * as React from "react";

const ImageWrap = ({ img, width, height }) => {
	return (
		<div
			className="animated fadeIn slow delay-2s"
			style={{
				display: "flex",
				justifyContent: "center",
				marginTop: "15px",
			}}
		>
			<img src={img} alt="alt" width={width} height={height} />
		</div>
	);
};

export default ImageWrap;
