import { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import { TableRow } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import {useState } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect } from "react";

function WorkersPage(props) {
    const places = ["Астана", "Алмата"]

    return ( 
        <div style={{width: '70%', margin: '0 auto', paddingTop: "5%"}}>
            <h1 style={{marginBottom: '10px'}}>Сотрудники</h1>
            <TableContainer>
                <Table className="table adminPanelTable uitable">
                    <TableHead>
                        {places.map((place) => (
                            <Row place={place} />
                        ))}
                    </TableHead>
                    <TableBody>
                    {/* {this.state.users.map((row, index) => (
                        <TableRow hover>
                        <TableCell><a>{index+1}</a></TableCell>
                        <TableCell style={{ width: '20%' }}><Link className="rowInfo" to={{
                            pathname:`/users/${row.username}`, 
                            state: {user: row}
                        }}>{row.username}</Link></TableCell>
                        <TableCell><a>{row.email}</a></TableCell>
                        {this.active(row)}
                        </TableRow>
                    ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
function Row(props) {
    const { place } = props;
    const [workers, setWorkers] = useState([])
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            if (place == 'Астана') {
                axios.get("http://192.168.30.24:9091/api/finpol/main/3users1").then(res => {
                    setWorkers(res.data)
                    console.log(res.data)
                })
            } else {
                axios.get("http://192.168.30.24:9091/api/finpol/main/3users2").then(res => {
                    setWorkers(res.data)
                    console.log(res.data)
                })
            }
        }
    }, [open])
    
    return (
      <>
        <TableRow hover style={{borderRadius: '3px', borderBottom: 'hidden'}} className="userDetailsRow">
            <TableCell style={{width: '95%', fontSize: '20px', fontWeight: '600'}}>{place}</TableCell>
            <TableCell  style={{width: '5%'}}>
                <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                >
                {open ? <KeyboardArrowUpIcon style={{ fill: '#ffffff' }}/> : <KeyboardArrowDownIcon style={{ fill: '#ffffff' }}/>}
                </IconButton>
            </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                {workers.map((worker) => (
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '100%' }} align="left"><a>{worker.email}</a></TableCell>
                      {/* <TableCell style={{ width: '80%' }} align="left"><a></a></TableCell> */}
                    </TableRow>                
                ))}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }
export default WorkersPage;