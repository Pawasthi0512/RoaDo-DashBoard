import styled from '@emotion/styled'
import React from 'react'
import MoneyDetailsCard from './MoneyDetailsCard'
import { COPLETED_ACTIVITIES_DETAILS, MONEY_DETAILS, SCHEDULED_ACTIVITIES_DETAILS } from './Constant'
import ActivityDetailsTable from './ActivityDetailsTable'
import { Button } from '@mui/material'

const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '360px',
    backgroundColor: '#ffffff',
    padding: '15px',
})

const StyledTitle = styled('div')({
  marginTop: '10px',
  fontSize: '20px',
  fontWeight: '500',
})

const ActivitySection = () => {
  return (
    <StyledDiv>
      <StyledTitle>
          Todays Highlights (14)
      </StyledTitle>
      <p style={{marginTop: '5px'}}>
        19 Mar 2024
      </p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '5px 0px'}}>
        {
          MONEY_DETAILS.map((data) => (
            <MoneyDetailsCard  data={data}/>
          ))
        }
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '0px'}}>
        <StyledTitle>
          Completed Activities (14)
        </StyledTitle>
        <Button style={{textDecoration: 'underline'}}>View All</Button>
      </div>
      <ActivityDetailsTable data={COPLETED_ACTIVITIES_DETAILS}/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <StyledTitle>
          Scheduled Activities (14)
        </StyledTitle>
        <Button style={{textDecoration: 'underline'}}>View All</Button>
      </div>
      <ActivityDetailsTable data={SCHEDULED_ACTIVITIES_DETAILS}/>
    </StyledDiv>
  )
}

export default ActivitySection;