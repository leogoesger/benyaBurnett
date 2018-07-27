import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeLayout from "./home/HomeLayout";
import { Navbar } from "../containers";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={HomeLayout} />
        </div>
    </Router>
);

export default App;
