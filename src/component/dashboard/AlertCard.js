import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'

const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: '150px',
    marginRight: '5px',
    borderRadius: '16px',
    backgroundColor: '#FFFFFF',
    padding: '10px',

})

const AlertCardFooter = styled('div')({
    display: 'flex',
    flexDirection: 'row-reverse'
})

function AlertCard({data}) {

    const AlertCardHeader = () => {
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{padding: '5px', marginRight: '10px', backgroundColor: '#E0EAFF', }}>
                    <div style={{height: '32px', width: '32px'}}>
                        {data.icon}
                    </div>
                </div>
                <div style={{height: '32px', width:'390px'}}>
                    <div style={{fontSize: '20px', fontWeight: '400px'}}>
                        {data.title}
                    </div>
                    <div>
                        {`Load No: ${data.loadNo}, Bill To: ${data.billTo}`}
                    </div>
                </div>
                <div style={{height: '14px', marginRight: 'px'}}>
                    {data.date}
                </div>
            </div>
        )
    }

    console.log(data);
  return (
    <StyledDiv>
        <AlertCardHeader>
            This is Alert card header
        </AlertCardHeader>
        <div>
            {data.alertText}
        </div>
        <AlertCardFooter>
            <Button style={{ backgroundColor: '#1A3875', margin: '5px'}}>Resolve</Button>
            <Button style={{ textDecoration: 'underline', margin: '5px'}}>Ignore</Button>
        </AlertCardFooter>
    </StyledDiv>
  )
}

export default AlertCard