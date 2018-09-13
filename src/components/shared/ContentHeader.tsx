import * as React from "react";
import { Divider } from "@material-ui/core";

interface IProps {
	children: React.ReactNode;
}

const ContentHeader: React.SFC<IProps> = (props) => {
	return (
		<div style={{ width: "100%", position: "relative", height: "100px" }}>
			<div
				style={{
					position: "absolute",
					top: "5px",
					left: "5px",
					paddingLeft: "30px",
					paddingTop: "26px",
					fontSize: "36px",
					fontWeight: 400,
					fontFamily: "Arial Black, Gadget, sans-serif",
				}}
			>
				{props.children}
			</div>
			<Divider
				style={{ width: "100%", top: "100px", position: "absolute" }}
			/>
		</div>
	);
};

export default ContentHeader;
