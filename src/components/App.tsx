import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Navbar, LogIn, NewsItem } from "../containers";
import { MemberLayout } from "../components/member";
import { ServiceLayout, ServiceItem } from "../components/services";
import { NewsLayout } from "../components/news";
import { AwardLayout } from "../components/awards";
import { ProjectsLayout } from "../components/projects";
import { ContactLayout } from "../components/contact";
import { DoubleLeedLayout } from "../components/doubleLeed";

import Team from "../components/team/Layout";
import Footer from "./footer/Footer";

const App = () => (
    <Router>
        <div
            style={{
                display: "flex",
                width: "96%",
                minWidth: "1200px",
                position: "relative",
                overflow: "scroll",
                minHeight: "800px",
                margin: "0 auto",
            }}
        >
            <Route exact path="*" component={Navbar} />
            <div style={{ width: "100%", minWidth: "950px" }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/team/:member" component={MemberLayout} />
                <Route exact path="/services" component={ServiceLayout} />
                <Route
                    exact
                    path="/services/:serviceItem"
                    component={ServiceItem}
                />
                <Route exact path="/news" component={NewsLayout} />
                <Route exact path="/news/:newsItem" component={NewsItem} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/awards" component={AwardLayout} />
                <Route exact path="/projects" component={ProjectsLayout} />
                <Route exact path="/contact" component={ContactLayout} />
                <Route
                    exact
                    path="/double-platinum-leed-well"
                    component={DoubleLeedLayout}
                />
            </div>
            <Footer />
        </div>
    </Router>
);

export default App;
