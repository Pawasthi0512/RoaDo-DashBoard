import React from "react";

import styled from "@emotion/styled";
import DashBoardHeader from "./DashBoardHeader";
import DetailsCard from "./DetailsCard";
import { CARD_DEATILS } from "./Constant";
import QuickActionPannel from "./QuickActionPannel";
import AlertPannel from "./AlertPannel";

const StyledDashBoard = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f2f2',
    width: '100%',
    padding: '10px 20px'
})

const StyledCardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px 0px',
})

function Dashboard(){

    return(
        <StyledDashBoard>
            <DashBoardHeader />
            <StyledCardContainer>
                {CARD_DEATILS.map((card) => <DetailsCard card={card} />)}
            </StyledCardContainer>
            <QuickActionPannel />
            <AlertPannel />
        </StyledDashBoard>
    )
}

export default Dashboard;