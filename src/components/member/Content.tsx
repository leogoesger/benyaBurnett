import * as React from "react";

interface IMember {
    title: string;
    bio1: string;
    bio2?: string;
    bioUrl: string;
    CVUrl: string;
}

interface IPartners {
    title: string;
    companies: [ICompany];
}

interface ICompany {
    name: string;
    imgUrl: string;
    description: string;
    companyUrl: string;
}

interface IProps {
    member: IMember | IPartners;
}

const Content: React.SFC<IProps> = ({ member }) => {
    return <div>member</div>;
};

export default Content;
