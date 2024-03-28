import styled from '@emotion/styled'
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react'

const StyledCard = styled('div')({
    height: '300px',
    width: '22.5%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '10px',
})

const StyledTitle = styled('div')({
    color: '#000000',
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 400
})

const ChartContainer = styled('div')({
    width: '100%',
    height: 'auto',
    marginRight: '-80px'
  });

const StyledDataContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px 0px',
    width: '180px',
    borderRadius: '5px',
})

function DetailsCard({card}) {
  return (
    <StyledCard>
        <StyledTitle>
            {card.title}
        </StyledTitle>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ChartContainer>
                <PieChart
                    series={[
                        {
                        data: card.data,
                        innerRadius: 45,
                        outerRadius: 60,
                        },
                    ]}
                    width={250}
                    height={125}
                />
            </ChartContainer>
            {card.data.map((data) => (
                <StyledDataContainer style={{
                    background: `linear-gradient(to right, ${data.color} 0%, ${data.color} 50%, ${data.color} 100%)`
                }}>
                    <div style={{padding: '5px'}}>
                        {data.lable}
                    </div>
                    <div style={{padding: '5px'}}>
                        {data.value}
                    </div>
                </StyledDataContainer>
            ))}
        </div>
        
    </StyledCard>
  )
}

export default DetailsCard