import * as React from "react";
import { ActionBtns, Title, MemberContent, PartnerContent } from "./";
import { members } from "../../static/reference";
import { MainContent } from "../shared";

interface IProps {
    match: any;
}

const Layout: React.SFC<IProps> = ({ match }) => {
    const memberParam = match.params.member;
    return (
        <MainContent>
            <Title title={members[memberParam].title} />
            {memberParam !== "partners" && (
                <ActionBtns memberParam={memberParam} />
            )}
            {memberParam !== "partners" && (
                <MemberContent memberParam={memberParam} />
            )}
            {memberParam === "partners" && <PartnerContent />}
        </MainContent>
    );
};

export default Layout;
