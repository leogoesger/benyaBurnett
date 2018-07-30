import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeLayout from "./home/HomeLayout";
import { Navbar } from "../containers";

const App = () => (
    <Router>
        <div
            style={{
                display: "flex",
                width: "1200px",
                justifyContent: "space-between",
            }}
        >
            <Route exact path="*" component={Navbar} />
            <div>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/abc" component={HomeLayout} />
            </div>
        </div>
    </Router>
);

export default App;
