import * as React from "react";
interface IProps extends React.Props<any> {}

const RenderArticle = (IProps) => {
	return (
		<a href={`//${IProps.article.url}`} target="_blank">
			<div
				style={{
					display: "flex",
					marginLeft: "50px",
					marginTop: "50px",
				}}
			>
				<img
					style={{ float: "left" }}
					src="http://via.placeholder.com/100x100"
					width="100"
					height="100"
					alt="Place Holder"
				/>

				<div style={{ margin: "10px" }}>
					<h1 style={{ fontWeight: "bold" }}>
						{IProps.article.title}
					</h1>
					<p style={{ marginTop: "5px" }}>
						Date: {IProps.article.date.split("T")[0]}
					</p>
					<p style={{ marginTop: "5px" }}>{IProps.article.text}</p>
				</div>
			</div>
		</a>
	);
};

export default RenderArticle;
