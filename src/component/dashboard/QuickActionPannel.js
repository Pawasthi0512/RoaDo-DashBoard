import styled from '@emotion/styled'
import React from 'react'
import { QUICK_ACTION_PANNEL_ICONS } from './Constant';

const StyledDiv = styled('div')({
    marginTop: '10px',
});

const StyledQuickActions = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '15px',
    height: '75px',
})

function QuickActionPannel() {
  return (
    <StyledDiv>
        <div style={{fontSize: '20px', fontWeight: '500'}}>Quick Actions</div>
        <StyledQuickActions>
            {QUICK_ACTION_PANNEL_ICONS.map((data) => (
                <>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{margin: '5px 0px'}}>
                            {data.icon}
                        </div>
                        <div>
                            {data.lable}
                        </div>
                    </div>
                    <div style={{lineHeight: '70px', fontSize: '35px', color: '#4b4c4d'}}>|</div>
                </>
            ))}
        </StyledQuickActions>
    </StyledDiv>
  )
}

export default QuickActionPannel