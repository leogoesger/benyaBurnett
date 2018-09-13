import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { updateMetaTitle } from "../utils/helpers";

import { Admin, Home, Navbar, LogIn, NewsItem } from "../containers";
import { MemberLayout } from "../components/member";
import { ServiceLayout, ServiceItem } from "../components/services";
import { NewsLayout } from "../components/news";
import { AwardLayout } from "../components/awards";
import { ProjectsLayout } from "../components/projects";
import { ContactLayout } from "../components/contact";
import { DoubleLeedLayout } from "../components/doubleLeed";
import { TeamLayout } from "../components/team";
import Footer from "./footer/Footer";
import Login from "../containers/LogIn";

const App = () => (
	<Router>
		<div
			style={{
				display: "flex",
				width: "96%",
				minWidth: "1200px",
				position: "relative",
				overflow: "auto",
				minHeight: "800px",
				margin: "0 auto",
			}}
		>
			<Route exact path="*" component={Navbar} />
			<div style={{ width: "100%", minWidth: "950px" }}>
				<Route
					exact
					path="/"
					component={updateMetaTitle("Home", Home)}
				/>
				<Route
					exact
					path="/team"
					component={updateMetaTitle("Team", TeamLayout)}
				/>
				<Route
					exact
					path="/team/:member"
					component={updateMetaTitle("Team", MemberLayout)}
				/>
				<Route
					exact
					path="/services"
					component={updateMetaTitle("Services", ServiceLayout)}
				/>
				<Route
					exact
					path="/services/:serviceItem"
					component={updateMetaTitle("Service", ServiceItem)}
				/>
				<Route
					exact
					path="/news"
					component={updateMetaTitle("News", NewsLayout)}
				/>
				<Route
					exact
					path="/news/:newsItem"
					component={updateMetaTitle("News", NewsItem)}
				/>
				<Route
					exact
					path="/login"
					component={updateMetaTitle("News", LogIn)}
				/>
				<Route
					exact
					path="/awards"
					component={updateMetaTitle("Awards", AwardLayout)}
				/>
				<Route
					exact
					path="/projects"
					component={updateMetaTitle("Projects", ProjectsLayout)}
				/>
				<Route
					exact
					path="/contact"
					component={updateMetaTitle("Contact", ContactLayout)}
				/>
				<Route
					exact
					path="/double-platinum-leed-well"
					component={updateMetaTitle("Feature", DoubleLeedLayout)}
				/>
				<Route
					exact
					path="/admin"
					component={updateMetaTitle("Admin", Admin)}
				/>
			</div>
			<Footer />
		</div>
	</Router>
);

export default App;
