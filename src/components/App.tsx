import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeLayout from "./home/HomeLayout";
import { Navbar } from "../containers";
import Footer from "./footer/Footer";

const App = () => (
    <Router>
        <div
            style={{
                display: "flex",
                width: "1200px",
                justifyContent: "space-between",
                position: "relative",
            }}
        >
            <Route exact path="*" component={Navbar} />
            <div style={{ width: "950px" }}>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/abc" component={HomeLayout} />
            </div>
            <Footer />
        </div>
    </Router>
);

export default App;
