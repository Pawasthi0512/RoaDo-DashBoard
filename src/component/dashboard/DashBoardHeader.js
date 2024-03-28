import React from 'react'

import styled from '@emotion/styled';
import { DASHBOARD_ICONS } from './Constant';

const StyledHeader = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const StyledToolBar = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '6px 12px',
    height: '24px',
    width: '132px',
    borderRadius: '16px',
})

const DashBoardHeader = () => {
  return (
    <StyledHeader>
        <h3>DashBoard</h3>
        <StyledToolBar>
            {DASHBOARD_ICONS.searchIcon}
            <span>|</span>
            {DASHBOARD_ICONS.notificationIcon}
            <span>|</span>
            {DASHBOARD_ICONS.KebabMenuIcon}
        </StyledToolBar>
    </StyledHeader>
  )
}

export default DashBoardHeader;