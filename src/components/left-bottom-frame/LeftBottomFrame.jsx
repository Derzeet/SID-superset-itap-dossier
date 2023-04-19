import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './leftBottomFrame.scss'

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function LeftBottomFrame(props) {
    const soc = ''
    const [docs, setDocs] = useState([])
    const [addresses, setAddresses] = useState([])
    const [transport, setTransport] = useState([])

    
    useEffect(()=> {
        props.docs.sort((a, b) => {
            if (a.doc_type_ru_name > b.doc_type_ru_name) {
                return -1;
            } else if (a.doc_type_ru_name < b.doc_type_ru_name) {
                return 1;
            } else {
                return 0;
            }
        })
        const filteredTSPRT = props.transport.filter(x => x != null) 
        setDocs(props.docs)
        setAddresses(props.addresses)
        setTransport(filteredTSPRT)
    }, [soc])
    return ( 

        <div className="left-bottom-section">
            <div className="other-line">
                <div>
                    {/* <label htmlFor="born-city" style={{fontSize: '16px', fontWeight: '500', color: "#FFFFFF"}}>Адресы прописки</label> */}
                    <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                        <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>АДРЕСЫ ПРОПИСКИ</a></TableCell>
                    </TableRow>
                    <TableContainer sx={{backgroundColor: '#ffffff0a', borderRadius: '3px',  marginTop: '10px'}}>
                        <Table aria-label="collapsible table" className="uitable">
                            <TableHead sx={{backgroundColor: '#ffffff0a'}}>
                            <TableRow className="uitableHead">
                                <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>№</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '20%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Страна</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '20%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Город</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Улица</a></TableCell>
                                <TableCell sx={{padding: 1}} style={{ width: '10%', color: "#fff" }} align="left"></TableCell>
                            </TableRow>
                            </TableHead> 
                            <TableBody style={{borderBottom: 'hidden'}}>
                            {addresses.length>0 ? addresses.map((row, index) => (
                                <AddressRow row={row} index={index} />
                            )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div>
                    <TableContainer>
                        <Table aria-label="collapsible table" className="uitable">
                            <TableBody >
                            { docs.length>0 ? docs.map((row, index) => (
                                <Row row={row} index={index} />
                            )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TransportRow row={transport} exist={transport.length > 0 ? true : false}/>
                </div>
                {/* TRANSPORT */}
                <div style={{width: '100%'}}>
                </div>
            </div>   
        </div>

    );
}

function TransportRow(props) {
    const { row, exist} = props;
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableContainer sx={{marginTop: 0}}>
        <Table aria-label="collapsible table" className="uitable">
            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>ТРАНСПОРТ</a></TableCell>
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
                                        <TableCell sx={{padding: 1}} style={{ width: '1%',fontSize: '14px', color: "#6D6D6D"}} align="left"><a>№</a></TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '13%', fontSize: '14px', color: "#6D6D6D" }} align="left">Модель</TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '13%', fontSize: '14px', color: "#6D6D6D" }} align="left">Серийный номер</TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '14px', color: "#6D6D6D" }} align="left">Номер</TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">Дата с</TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">До</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody style={{borderBottom: 'hidden'}}>
                                    { 
                                        exist ? row.map((car, index) => {
                                            return (
                                                <>
                                                <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                                    <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF"}} align="left">{index+1}</TableCell>
                                                    <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{car.brand_model}</TableCell>
                                                    <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{car.series_reg_number}</TableCell>
                                                    <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{car.reg_number}</TableCell>
                                                    <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF" }} align="left">{car.date_certificate}</TableCell>
                                                    <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }} align="left">{car.end_date}</TableCell>
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
    );
  }
function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
          <TableCell sx={{padding: 1}} style={{width: '70%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.doc_type_ru_name}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{width: '30%'}} align='right'>
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
                {
                    row.message == null 
                    ?
                    <Table size="small" aria-label="purchases">
                            {
                                row.doc_type_ru_name != "Транспорт"
                                ?
                                <TableBody style={{padding: 0, borderBottom: 'hidden'}}>
                                    <TableRow style={{borderBottom: 'hidden', width: "100%"}}>
                                        <TableCell sx={{p: 0}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Орган выдачи</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{row.issue_organization_ru_name}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden', width: "100%"}}>
                                        <TableCell sx={{p: 0}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Дата выдачи</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{row.issue_date}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden', width: "100%"}}>
                                        <TableCell sx={{p: 0}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Срок до</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{row.expiry_date}</a></TableCell>
                                    </TableRow>
                                    <TableRow style={{borderBottom: 'hidden', width: "100%"}}>
                                        <TableCell sx={{p: 0}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Номер документа</a></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{row.doc_number}</a></TableCell>
                                    </TableRow>
                                    <TableRow  style={{borderBottom: 'hidden', width: "100%"}}>
                                        <TableCell sx={{p: 0}} style={{fontSize: '3px'}}  align="left"></TableCell>
                                        <TableCell style={{ width: '70%', fontSize: '12px'}} align="left"></TableCell>
                                    </TableRow>
                                </TableBody>
                                :
                                <>
                                <TableHead>
                                <TableRow className="uitableHead"  style={{borderBottom: 'hidden'}}>
                                    <TableCell sx={{padding: 1}} style={{ width: '5%',fontSize: '12px', color: "#6D6D6D"}} align="left"><a>№</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">Модель</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '25%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a className="bumber">Серийный номер</a></TableCell>
                                    <TableCell sx={{padding: 1}} style={{ width: '25%', color: "#6D6D6D" }} align="left">Номер</TableCell>
                                </TableRow>
                                </TableHead> 
                                <TableBody style={{borderBottom: 'hidden'}}>
                                { 
                                    row.dop_infa.car_num > 0 ? row.dop_infa.cars.map(car => {
                                        return (
                                        <>
                                            <TableCell sx={{padding: 1}} style={{ width: '5%', fontSize: '12px', color: "#FFFFFF"}} align="left"><a>{car.num}</a></TableCell>
                                            <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a className="bumber">{car.model}</a></TableCell>
                                            <TableCell sx={{padding: 1}} style={{ width: '25%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a className="bumber">{car.serial_num}</a></TableCell>
                                            <TableCell sx={{padding: 1}} style={{ width: '25%', fontSize: '12px', color: "#FFFFFF" }} align="left">{car.number}</TableCell>
                                        </>
                                        )
                                    }) 
                                    : 
                                    <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>
                                }
                                </TableBody>
                                </>
                            }

                    </Table>
                    :
                    <p style={{
                        color: "#FFFFFF"
                    }}>{row.message}</p>
                }
                
                
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  function AddressRow(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
          <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{props.index + 1}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.country}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }}><a>{row.district}</a></TableCell>
          <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }}><a>{row.street}</a></TableCell>
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
              <Box sx={{ margin: 1, marginLeft: '2.6%' }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Район</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.region}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Дом</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.building}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Квартира</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.apartment_number}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                      <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Дата регистрации</a></TableCell>
                      <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.reg_date}</a></TableCell>
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

function withParams(Component) {
    return props => <Component {...props} username={useParams()} />;
}

export default withParams(LeftBottomFrame);