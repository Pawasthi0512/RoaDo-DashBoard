import React from 'react'
 import { Table, TableBody, TableCell, TableRow } from '@mui/material'
import styled from '@emotion/styled'

const StyledTable = styled(Table)({
    border: '1px solid black',
})

function ActivityDetailsTable({data}) {
  return (
    <StyledTable>
        <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell style={{fontSize: '12px', color: '#909091',  padding: '15px'}}>{row.details}</TableCell>
          </TableRow>
        ))}
        </TableBody>
    </StyledTable>
  )
}

export default ActivityDetailsTable;