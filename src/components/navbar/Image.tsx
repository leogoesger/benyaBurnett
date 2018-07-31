import * as React from "react";

interface IProps {
    pathname: string;
}

const Image: React.SFC<IProps> = ({ pathname }) => {
    switch (pathname) {
        case "/team":
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src="https://images.unsplash.com/photo-1532996078953-a13fa6d622cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75223132ed4fa1fc4d855f6c39140015&auto=format&fit=crop&w=700&q=80"
                        alt="alt"
                        width="200px"
                        height="230px"
                    />
                </div>
            );
        case "/team/james":
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src="https://images.unsplash.com/photo-1532996078953-a13fa6d622cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75223132ed4fa1fc4d855f6c39140015&auto=format&fit=crop&w=700&q=80"
                        alt="alt"
                        width="200px"
                        height="230px"
                    />
                </div>
            );
        case "/team/deborah":
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src="https://images.unsplash.com/photo-1532996078953-a13fa6d622cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75223132ed4fa1fc4d855f6c39140015&auto=format&fit=crop&w=700&q=80"
                        alt="alt"
                        width="200px"
                        height="230px"
                    />
                </div>
            );
        default:
            return null;
    }
};

export default Image;
