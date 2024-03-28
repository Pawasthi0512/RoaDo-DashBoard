import styled from '@emotion/styled'
import React from 'react'
import { ALERT_CARDS_DATA } from './Constant'
import AlertCard from './AlertCard'
import { Button } from '@mui/material'

const StyledDiv = styled('div')({
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0px'
})

const AlertCardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#FFFFFF'
})

const HeaderDiv = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10px',
})

function AlertPannel() {
  return (
    <StyledDiv>
        <HeaderDiv>
            <div style={{fontSize: '20px', fontWeight: '500'}}>High Priority alerts</div>
            <Button style={{textDecoration: 'underline'}}>View All</Button>
        </HeaderDiv>
        <AlertCardContainer>
            {ALERT_CARDS_DATA.map((data) => (
                <AlertCard data = {data} />
            ))}
        </AlertCardContainer>
    </StyledDiv>
  )
}

export default AlertPannel