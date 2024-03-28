import styled from '@emotion/styled'
import React from 'react'

const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '155px',
    height: '85px',
    marginRight: '5px',
    padding: '10px 5px',
    border: '1px solid #000000',
    borderRadius: '5px'
})

function MoneyDetailsCard({data}) {
  return (
    <StyledDiv>
        <div>{data.title}</div>
        <div style={{color: `${data.title === 'Expences' ? 'red' : 'green'}`, fontSize: '18px', fontWeight: '400' }}>${data.amount} CAD</div>
        <div>{data.deatils}</div>
    </StyledDiv>
  )
}

export default MoneyDetailsCard