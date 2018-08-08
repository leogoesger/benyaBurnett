import * as React from "react";

interface IProps {
    email: string;
}

const Content: React.SFC<IProps> = ({ email }) => {
    return <div>{`Your Email: {email}`}</div>;
};

export default Content;
