import React, { useState, useEffect } from 'react';
import './rightBottomFrame.scss'
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Link, useParams} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

function RightBottomFrame(props) {
    const [criminals, setCriminals] = useState([])

    useEffect(() => {
        setCriminals(props.criminals)
    })

    return ( 

        <div className="right-bottom-section">
            <div className="other-line">
                <div>
                    <label htmlFor="born-city" style={{fontSize: '16px', fontWeight: '500', color: "#FFFFFF"}}>Родственники</label>
                    <TableContainer sx={{marginTop: '10px'}}>
                        <Table aria-label="collapsible table" className="uitable">
                            <TableHead>
                                <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                    <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '12px', color: "#6D6D6D"}} align="left"><a>№</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">Статья для учета</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '20%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">Дата рассмотрения в суде 1 инстанции</a></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{borderBottom: 'hidden'}}>
                                { criminals.length>0 ? criminals.map((row, index) => (
                                    <Row row={row} index={index} />
                                )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <CriminalsBlock criminals={props.criminals}/>
            </div>
        </div>

    );
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{props.index + 1}</a></TableCell>
                <TableCell sx={{padding: 1}} style={{ width: '60%', paddingLeft: '18px', fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.crime_name}</a></TableCell>
                <TableCell sx={{padding: 1}} style={{ paddingLeft: '18px', fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }}><a>{row.court_dt || '---'}</a></TableCell>
                <TableCell sx={{padding: 1}}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon style={{ fill: '#ffffff' }}/> : <KeyboardArrowDownIcon style={{ fill: '#ffffff' }}/>}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow style={{borderBottom: 'hidden'}}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, marginLeft: '3.5%' }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow style={{borderBottom: 'hidden'}}>
                                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Суд 1 инстанцииРешение по лицуupdate_dttreatmentsentenceadd_info</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.court_name || "---"}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden'}}>
                                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Решение по лицу</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.decision || "---"}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden'}}>
                                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>update_dt</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.update_dt || "---"}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden'}}>
                                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>treatment</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.treatment || "---"}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden'}}>
                                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>sentence</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.sentence || "---"}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden'}}>
                                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>add_info</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.treatment || "---"}</a></TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

function CriminalsBlock(props) {
    const { criminals } = props;
    const [ open, setOpen ] = useState(false);

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
        <Table aria-label="collapsible table" className="uitable">
            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Преступления</a></TableCell>
                <TableCell sx={{padding: 1}} style={{width: '10%'}} align='right'>
                    <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                    >
                    {open ? <KeyboardArrowUpIcon style={{ fill: '#ffffff' }}/> : <KeyboardArrowDownIcon style={{ fill: '#ffffff' }}/>}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow style={{}}>
                <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    
                    <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 0, marginLeft: '0' }}>
                        <TableHead>
                            <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                <TableCell sx={{padding: 1}} style={{ width: '13%', fontSize: '14px', color: "#6D6D6D" }} align="left">Статья для учета</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '13%', fontSize: '14px', color: "#6D6D6D" }} align="left">Дата рассмотрения в суде 1 инстанции</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '14px', color: "#6D6D6D" }} align="left">Суд 1 инстанции</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">Решение по лицу</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">update_dt</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">treatment</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">sentence</TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">add_info</TableCell>
                            </TableRow>
                        </TableHead> 
                        <TableBody style={{borderBottom: 'hidden'}}>
                            { 
                            criminals != null && criminals.length > 0 ? criminals.map((crime, index) => {
                                return (
                                    <>
                                    <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.crime_name}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.court_dt}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.court_name}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.decision}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.update_dt}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.treatment}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.sentence}</TableCell>
                                        <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{crime.add_info}</TableCell>
                                    </TableRow>
                                    </>
                                    )
                                }) 
                                : 
                                <TableCell  className="zeroResult" colSpan={6} align='center' style={{ borderBottom: 'hidden'}}><a >Нет данных</a></TableCell>
                            }
                        </TableBody>
                
                        <div style={{height: '10px'}}></div>
                        
                    </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Table>
        </TableContainer>
        </>
    )
}
function withParams(Component) {
    return props => <Component {...props} username={useParams()} />;
}

export default withParams(RightBottomFrame);