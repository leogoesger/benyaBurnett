import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Navbar } from "../containers";
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
            <Navbar />
            <div style={{ width: "950px" }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/abc" component={Home} />
            </div>
            <Footer />
        </div>
    </Router>
);

export default App;
