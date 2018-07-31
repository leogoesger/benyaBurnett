import * as React from "react";
import { ActionBtns, Title, Content } from "./";
import { members } from "../../static/reference";
import { MainContent } from "../shared";

interface IProps {
    match: any;
}

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

interface IState {
    member: IMember | IPartners;
}

class Layout extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            member: null,
        };
    }

    componentDidMount() {
        const memberParam = this.props.match.params.member;
        this.setState({ member: members[memberParam] });
    }

    render() {
        if (!this.state.member) return null;
        const { member } = this.state;
        const { params } = this.props.match;

        return (
            <MainContent>
                <Title title={member.title} />
                <Content member={member} />
                {params !== "parterns" && <ActionBtns member={member} />}
            </MainContent>
        );
    }
}

export default Layout;
