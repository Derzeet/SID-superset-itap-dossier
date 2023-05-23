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
import './WorkersPage.scss'

function WorkersPage(props) {
    const places = ["Астана", "Алмата"]

    return ( 
        <div style={{width: '70%', margin: '0 auto', paddingTop: "5%"}}>
            <h1 style={{marginBottom: '10px'}}>Сотрудники</h1>
            <input  type="text" className="searchUsers" placeholder="Поиск"></input>

            {places.map(item => (
                <MainRow place={item}/>
            ))}
        </div>
    );
}

function MainRow(props) {
    const {place} = props
    const [people, setPeople] = useState([])
    const ranks = ['Админ', 'ВИП-пользователь', 'Пользователь 1-го уровня', 'Пользователь 2-го уровня', 'Пользователь 3-го уровня']
    const [open, setOpen] = useState(false)
    return (
        <TableContainer>
            <Table className="uitable" style={{backgroundColor: '#222629', borderRadius: '2px', borderBottom: 'hidden', marginBottom: '10px'}}>
                <TableHead  style={{ borderBottom: 'hidden'}}>
                    <TableRow>
                        <TableCell style={{width: '95%'}}><a style={{fontSize: '17px', fontWeight: '400'}}>{place}</a></TableCell>
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
                </TableHead>
                <TableBody style={{ borderBottom: 'hidden'}}>
                    <TableCell style={{ borderBottom: 'hidden', paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse style={{ borderBottom: 'hidden'}} in={open} timeout="auto" unmountOnExit>
                            <Box  style={{ borderBottom: 'hidden'}} sx={{ margin: 1 }}>
                                {ranks.map(item=> (
                                    <SubRow sub={item}/>
                                ))}
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
function SubRow(props) {
    const {sub} = props 
    const [workers, setWorkers] = useState([])
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            if (sub == 'Админ') {
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
        <TableContainer>
             <Table className="uitable" style={{backgroundColor: '#222629', borderRadius: '2px', borderBottom: 'hidden', marginBottom: '10px'}}>
                <TableHead  style={{ borderBottom: 'hidden'}}>
                    <TableRow>
                        <TableCell style={{width: '95%'}}><a style={{fontSize: '17px', fontWeight: '400'}}>{sub}</a></TableCell>
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
                </TableHead>
                <TableBody style={{ borderBottom: 'hidden'}}>
                    <TableCell style={{ borderBottom: 'hidden', paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse style={{ borderBottom: 'hidden'}} in={open} timeout="auto" unmountOnExit>
                            <Box  style={{ borderBottom: 'hidden'}} sx={{ margin: 1 }}>
                                
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    )
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