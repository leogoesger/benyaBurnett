import * as React from "react";
import { Colors } from "../../styles";

interface IProps {
	children: React.ReactNode;
}

const Content: React.SFC<IProps> = (props) => {
	return (
		<div
			style={{
				width: "100%",
				minWidth: "950px",
				display: "flex",
				overflow: "auto",
				height: "100%",
			}}
		>
			<div
				style={{
					width: "90%",
					backgroundColor: "rgb(239, 239, 239)",
					overflow: "auto",
				}}
			>
				{props.children}
			</div>
			<div style={{ width: "10%", backgroundColor: Colors.GREEN }} />
		</div>
	);
};

export default Content;
