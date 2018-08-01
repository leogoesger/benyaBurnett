import * as React from "react";
import * as ServiceItems from "./serviceItems";
import { MainContent } from "../shared";

interface IProps {
    location: {
        pathname: string;
    };
}
const ServiceItem: React.SFC<IProps> = ({ location }) => {
    let pathname = location.pathname.split("/")[2].split("-")[0];
    pathname = pathname.substr(0, 1).toUpperCase() + pathname.substr(1);
    const Service = ServiceItems[pathname];
    return (
        <MainContent>
            <Service />
        </MainContent>
    );
};

export default ServiceItem;
