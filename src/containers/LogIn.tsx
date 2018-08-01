import * as React from "react";
import axios from "axios";

import { LoginLayout } from "../components/login";

const handleSubmit = async d => {
    const url = `${process.env.SERVER_ADDRESS}/api/user/login`;
    try {
        const res = await axios.post(url, d);
    } catch (e) {
        throw e;
    }
};

const Login = () => <LoginLayout handleSubmit={handleSubmit} />;

export default Login;
