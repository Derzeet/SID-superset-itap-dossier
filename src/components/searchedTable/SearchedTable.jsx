import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const tdStyle = {
    color: "#fff",
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '18px'
}

const thStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",
    color: "#6D6D6D",

    border: 0,
}

function SearchedTable(props) {
  const resultDisplay = () => {
    if (props.result == null || props.result.length == 0) {
        return (
          <TableRow
            sx={{ 'td, th': { border: 0}}}
          >
            <TableCell className="zeroResult" colSpan={4} align='center' style={{ borderBottom: 'hidden'}}><a>Нет результатов</a></TableCell>
          </TableRow>
          
        )
    } else {
      return props.result.map((row, index) => (
        <TableRow hover
          key={index}
          sx={{ 'td, th': { border: 0 } }}
          onClick={() => props.selectPhoto(row.photo)}
        >
          <TableCell sx={tdStyle} component="td" scope="row">
            {index+1}
          </TableCell>
          <TableCell sx={tdStyle} align="left">{row.first_name} {row.last_name} {row.patronymic}</TableCell>
          <TableCell sx={tdStyle} align="left">{row.iin}</TableCell>
          <TableCell sx={tdStyle} align="left"><Link style={{textDecoration: 'none', color: 'white'}} className='goLink'  target='_blank' rel='noopener noreferrer' to={'/profiler/person/'+ row.iin}>Перейти..</Link></TableCell>
        </TableRow>
      ))
    }
  }
    return (
        <TableContainer component={Paper} sx={{border: 0, boxShadow: 'none', borderRadius: 0, backgroundColor: "#6D6D6D"}}>
          <Table sx={{minWidth: 650, background: "#0D0F11"}} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell sx={thStyle} style={{width: '5%', fontSize: '12px', fontWeight: 500, color: "#6D6D6D" }}>№</TableCell>
                <TableCell sx={thStyle} style={{width: '60%', fontSize: '12px', fontWeight: 500, color: "#6D6D6D"  }}align="left"><span style={{}}>ФИО</span></TableCell>
                <TableCell sx={thStyle} style={{width: '15%', fontSize: '12px', fontWeight: 500, color: "#6D6D6D" }} align="left"><span>ИИН</span></TableCell>
                <TableCell sx={thStyle} style={{width: '20%', fontSize: '12px', fontWeight: 500, color: "#6D6D6D" }} align="left"><span>Действие</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{}}>
              {resultDisplay()}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default SearchedTable;