import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Navbar } from "../containers";
import { MemberLayout } from "../components/member";
import Team from "../components/team/Layout";
import Footer from "./footer/Footer";

const App = () => (
    <Router>
        <div
            style={{
                display: "flex",
                width: "1200px",
                justifyContent: "space-between",
                position: "relative",
                overflow: "scroll",
            }}
        >
            <Route exact path="*" component={Navbar} />
            <div style={{ width: "950px" }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/team/:member" component={MemberLayout} />
            </div>
            <Footer />
        </div>
    </Router>
);

export default App;
