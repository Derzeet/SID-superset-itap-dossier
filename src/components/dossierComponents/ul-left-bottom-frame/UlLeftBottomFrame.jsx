import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './leftBottomFrame.scss'
import default_host from '../../../config/config';


import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
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
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

function UlLeftBottomFrame(props) {
    const soc = ''
    
    const [nedvijimost, setNedvijimost] = useState([])
    const [taxes, setTaxes] = useState([])
    const [mshes, setMshes] = useState([])
    const [pension, setPension] = useState([])
    const [autos, setAutos] = useState([])
    const [bin, setBin] = useState('')
    const [commodityProducers, setCommodityProducers] = useState([])
    const [taxCount, setTaxCount] = useState(0)
    const [professions, setProfessions] = useState({
      accountant: []
      // advocate: [],
      // auditors: [],
      // bailiff: []
    })


    useEffect(()=> {
        setNedvijimost(props.nedvijimost)
        // setTaxes(props.taxes)
        setMshes(props.mshes)
        setPension(props.pension)
        setBin(props.bin)
        setAutos(props.autos)
        setCommodityProducers(props.commodityProducers)
        setTaxCount(props.taxCount)
        // setAccountant(props.accountant)
        setProfessions({
          accountant: props.accountant
          // advocate: props.advocate,
          // auditors: props.auditor,
          // bailiff: props.bailiff
        })
    }, [soc])
    return ( 

        <div className="left-bottom-section">
            <div className="other-line">
              <NedvijimostBlock array={nedvijimost} exist={nedvijimost != null}/>
              <PensionBlock array={pension} bin={bin}/>
              <TaxesBlock taxCount={taxCount} bin= {bin} array={taxes} exist={taxes.length>0}/>
              {mshes && mshes.length > 0? <MshesBlock array={mshes} exist={mshes && mshes.length > 0 ? true : false}/> : ""}
              <TransportRow row={autos} />
              <CommodityProducersTable array={commodityProducers} />
              {professions && Object.keys(professions).length > 0? <ProfessionsBlock professions={professions}/> : ""}
            </div>   
        </div>

    );
}


const ProfessionsBlock = (props) => {
  const {accountant} = props.professions
  const [open, setOpen] = useState(false)

  let blockTitle = [
    accountant && accountant.length > 0 ? "Бухгалтер" : '',
    // advocate && advocate.length > 0 ? "Адвокат" : '',
    // auditors && auditors.length > 0 ? "Аудитор" : '',
    // bailiff && bailiff.length > 0 ? "Частный судебный исполнитель" : ''
  ]

  // blockTitle = blockTitle.filter(value => value != '').join(', ')

  // if (blockTitle === undefined)
    return (
      <>
        <TableContainer sx={{marginTop: 0}}>
          <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}}>
                  <a>
                    Бухгалтер
                  </a>
                </TableCell>
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
            <TableRow style={{width: '100%'}}>
              <TableCell sx={{padding: 1}} style={{width: '100%', paddingBottom: 0, paddingTop: 0}} colSpan={3}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{borderRadius: '3px', margin: 0, marginLeft: '0'}}>
                    <TableContainer>
                      <Table>
                        <TableHead sx={{backgroundColor: '#ffffff0a'}} >
                          <TableRow className="uitableHead">
                              <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Профессия</a></TableCell>
                              <TableCell sx={{padding: 1}} style={{ width: '40%', fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>ФИО</a></TableCell>
                              <TableCell sx={{padding: 1}} style={{ width: '20%', fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>ИИН</a></TableCell>
                              {/* <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)"}} align="right"><a> </a></TableCell> */}
                          </TableRow>
                        </TableHead>
                        <TableBody style={{borderBottom: 'hidden'}}>
                          {accountant.length  > 0
                          ?
                          <>
                          {accountant.map(row => (
                            <ProfessionsRow row={row} />
                          ))}
                          {/* {advocate.map(row => (
                            <ProfessionsRow row={row} />
                          ))}
                          {auditors.map(row => (
                            <ProfessionsRow row={row} />
                          ))}
                          {bailiff.map(row => (
                            <ProfessionsRow row={row} />
                          ))} */}
                          </>
                          : <TableCell className="zeroResult" align="center" colSpan={3} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </>
    )
  // else return null
}

const ProfessionsRow = (props) => {
  const {row} = props
  const [open, setOpen] = useState(false)

  const rus_headers = {
    bin: 'БИН Организации',
    lilicenseDate: 'Дата выдачи лицензии',
    licenseNumber: 'Номер лицензии',
    auditorNumber: 'Номер аудитора',
  }

  let profName = row.prof || row.status || "---"
  profName = profName.toUpperCase()

  return (
    <>
      <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
        <TableCell colSpan={1} sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{profName}</a></TableCell>
        <TableCell colSpan={1} sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.lname} {row.fname}</a></TableCell>
        <TableCell colSpan={1} sx={{padding: 1}} style={{fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.iin}</a></TableCell>
      </TableRow>
    </>
  )
}

const CommodityProducersTable = (props) => {
  const {array, exist} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableContainer sx={{marginTop: 0}}>
        <Table aria-label="collapsible table" className="uitable">

          <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}}><a>Отечественные товаропроизводители</a></TableCell>
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
          <TableRow>
            <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={4}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{borderRadius: '3px', margin: 0, marginLeft: '0' }}>
                  <TableHead sx={{backgroundColor: '#ffffff0a'}}>
                    <TableRow className="uitableHead">
                        <TableCell sx={{padding: 1}} style={{ width: '30%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Товар</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Статус</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Регион</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '10%', color: "#fff" }} align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{borderBottom: 'hidden'}}>
                  {array.filter((x) => x!= null).length > 0 ? array.map((row, index) => (
                      <CommodityProducersRow row={row} />
                  )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                  </TableBody>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  )
}

const CommodityProducersRow = (props) => {
  const {row} = props
  const [open, setOpen] = useState(false)

  // {
  //   "ownerIinBin": "690411300792",
  //   "equipmentType": null,
  //   "equipmentModel": "ЮМЗ-6Л",
  //   "vin": "627471",
  //   "govNumber": "7139ЖЗ",
  //   "regSeriesNum": "10665",
  //   "regDate": "1998-05-10T17:00:00.000+00:00"
  // }

  let regDate = new Date(row.regDate)
  regDate = ('0' + regDate.getDate()).slice(-2) + '/'
            + ('0' + (regDate.getMonth()+1)).slice(-2) + '/'
            + regDate.getFullYear();

  return (
    <>
      <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.sspName || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.status || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.region || "---"}</a></TableCell>
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
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Количество</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.count || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Производитель</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.producer || "---"}</a></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}


function TransportRow(props) {
  const {row} = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableContainer sx={{marginTop: 0}}>
      <Table aria-label="collapsible table" className="uitable">
          <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}}><a>Транспорт</a></TableCell>
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
                <Box sx={{borderRadius: '3px', margin: 0, marginLeft: '0' }}>
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
                                  row.length > 0 ? row.map((car, index) => {
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

const MshesBlock = (props) => {
  const {array, exist} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableContainer sx={{marginTop: 0}}>
        <Table aria-label="collapsible table" className="uitable">

          <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}}><a>Техника</a></TableCell>
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
          <TableRow>
            <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{borderRadius: '3px', margin: 0, marginLeft: '0' }}>
                  <TableHead sx={{backgroundColor: '#ffffff0a'}}>
                    <TableRow className="uitableHead">
                        <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Модель</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Гос. номер</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >ВИН</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                    </TableRow>
                  </TableHead> 
                  <TableBody style={{borderBottom: 'hidden'}}>
                  {exist ? array.map((row, index) => (
                      <MshesRow row={row} />
                  )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                  </TableBody>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  )
}

const MshesRow = (props) => {
  const {row} = props
  const [open, setOpen] = useState(false)

  // {
  //   "ownerIinBin": "690411300792",
  //   "equipmentType": null,
  //   "equipmentModel": "ЮМЗ-6Л",
  //   "vin": "627471",
  //   "govNumber": "7139ЖЗ",
  //   "regSeriesNum": "10665",
  //   "regDate": "1998-05-10T17:00:00.000+00:00"
  // }

  let regDate = new Date(row.regDate)
  regDate = ('0' + regDate.getDate()).slice(-2) + '/'
            + ('0' + (regDate.getMonth()+1)).slice(-2) + '/'
            + regDate.getFullYear();

  return (
    <>
      <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.equipmentModel || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.govNumber || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.vin || "---"}</a></TableCell>
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
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Тип техники</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.equipmentType || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Регистрационный серийный номер</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.regSeriesNum || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Дата регистрации</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{regDate|| "---"}</a></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const NedvijimostBlock = (props) => {
  const {array, exist} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableContainer sx={{marginTop: 0}}>
        <Table aria-label="collapsible table" className="uitable">

          <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}}><a>Недвижимости</a></TableCell>
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
          <TableRow>
            <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{borderRadius: '3px', margin: 0, marginLeft: '0' }}>
                  <TableHead sx={{backgroundColor: '#ffffff0a'}}>
                    <TableRow className="uitableHead">
                        <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Кадастровый номер №</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Адрес</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a >Площадь общая</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                    </TableRow>
                  </TableHead> 
                  <TableBody style={{borderBottom: 'hidden'}}>
                  {exist ? array.map((row, index) => (
                      <NedvijimostRow row={row} />
                  )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
                  </TableBody>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  )
}

const NedvijimostRow = (props) => {
  const {row} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.cadastral_number || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.address_rus}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.area_total}</a></TableCell>
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
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Вид документа</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.type_of_property_rus || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Номер документа</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.register_emergence_rights_rus || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Дата документа</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{null && row.date_end || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Правообладатель</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.owner_full_name || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Этажность</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.floor || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Дата регистрации</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.register_reg_date || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Дата прекращения</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.register_end_date || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Количество составляющих</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{null && row.date_end || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Сумма сделки (стоимость)</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{null && row.date_end || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>Жилая площадь</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.area_usefull || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>ИИН/БИН продавца</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{null && row.owner_iin_bin || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D"}}  align="left"><a>ФИО/Наименование продавца</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{null && row.date_end || "---"}</a></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
const taxes = [
  {
      "paymentDocumentNumber": "92834601",
      "bin": "100240021921",
      "budgetClassificationCode": "105115",
      "dateOfBudgetEnrollment": "29.07.2021",
      "kbkName": "Налог на добавленную стоимость на товары, импортированные с территории государств-членов ЕАЭС",
      "ogdCode": "620301",
      "ogdName": "УГД по Сарыаркинскому району",
      "paymentAmount": "8507835",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "29.07.2021"
  },
  {
      "paymentDocumentNumber": "83714344",
      "bin": "100240021921",
      "budgetClassificationCode": "901101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления в пенсионный фонд 901101",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "25500",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714351",
      "bin": "100240021921",
      "budgetClassificationCode": "904101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления отчислений и взносов на обязательное социальное медицинское страхование",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "20396",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714348",
      "bin": "100240021921",
      "budgetClassificationCode": "904101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления отчислений и взносов на обязательное социальное медицинское страхование",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "5100",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714345",
      "bin": "100240021921",
      "budgetClassificationCode": "901101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления в пенсионный фонд 901101",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "101980",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714352",
      "bin": "100240021921",
      "budgetClassificationCode": "901101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления в пенсионный фонд 901101",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "23258",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714350",
      "bin": "100240021921",
      "budgetClassificationCode": "904101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления отчислений и взносов на обязательное социальное медицинское страхование",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "20396",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714349",
      "bin": "100240021921",
      "budgetClassificationCode": "904101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления отчислений и взносов на обязательное социальное медицинское страхование",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "5100",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714346",
      "bin": "100240021921",
      "budgetClassificationCode": "902101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления социальных отчислений",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "20194",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  },
  {
      "paymentDocumentNumber": "83714347",
      "bin": "100240021921",
      "budgetClassificationCode": "902101",
      "dateOfBudgetEnrollment": "26.07.2021",
      "kbkName": "Поступления социальных отчислений",
      "ogdCode": "620701",
      "ogdName": "УГД по Байконурскому району",
      "paymentAmount": "8034",
      "paymentType": "Налог",
      "transactionType": "Платеж",
      "dateOfAccountDebit": "26.07.2021"
  }
]
const TaxesBlock = (props) => {
  const {bin, taxCount} = props
  const [open, setOpen] = useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [curr, setCurr] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    const searchIIN = () => {
      if (open) {

        setLoading(true)
        const params = {bin, page}
        setCurr(taxes)
        setLoading(false)
        // axios.get(default_host+'taxpage', {params: params}).then(res => {
        //   setCurr(res.data)
        //   console.log(res.data)
        //   setLoading(false)
        // })
      }
    }
      
      searchIIN()

  }, [page, open])
  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - 15) : 0;
  
    const handleChangePage = (event, newPage) => {
        console.log(newPage)
        // getData()
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
  

  return (
    <>
    <TableContainer>
        <Table colSpan={2}  sx={{ borderRadius: '3px'}} aria-label="collapsible table" className="uitable">
          <TableHead>
              <TableRow className="uitableHead" style={{borderBottom: 'hidden'}}>
                  <TableCell colSpan={1} sx={{padding:1}} style={{ width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}} align="left">Налоги</TableCell>
                  <TableCell colSpan={1} sx={{padding: 1}} style={{ color: "#fff" }} align="right">
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
                  <TableCell colSpan={2} sx={{padding: 0}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <TableContainer>
                        <Table sx={{m: 0}}>
                          <TableBody style={{borderBottom: 'hidden'}}>
                              <TableRow>
                                <TableContainer>
                                  <Table sx={{m: 0}}>
                                    <TableHead>
                                    <TableRow className="uitableHead">
                                        <TableCell sx={{padding: 1}} style={{ width: '30%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Наименование</a></TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Название налога</a></TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '20%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Сумма платежа</a></TableCell>
                                        <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      { !isLoading ? curr.map((row) => (
                                          <TaxesRow row={row} />
                                      )) : [1,2,3,4,5,6,7,8,9,10].map(key => (
                                        <TableRow sx={{borderBottom: 'hidden'}}>
                                          <TableCell align="center" colSpan={4} style={{fontSize: '12px', color: "rgb(199, 199, 199)"}}>Подождите...</TableCell>
                                        </TableRow> 
                                      ))}
                                    </TableBody>
                                    <TableFooter >
                                      <TableRow >
                                          <TablePagination style={{borderBottom: 'hidden'}}
                                              colSpan={4}
                                              count={taxCount}
                                              rowsPerPage={10}
                                              page={page}
                                              onPageChange={handleChangePage}
                                              ActionsComponent={TablePaginationActions}
                                              rowsPerPageOptions={10}
                                              />
                                      </TableRow>
                                    </TableFooter>
                                  </Table>
                                </TableContainer>
                              </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Collapse>
                  </TableCell>
                </TableRow>

          </TableHead>
        </Table>
      </TableContainer>
    </>
  )
}

const TaxesRow = (props) => {
  const {row} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow className="uitablerow" sx={{height:'10px',}}>
        <TableCell sx={{padding: 1}} style={{verticalAlign: 'top', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.ogdName || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{verticalAlign: 'top', fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.kbkName}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{verticalAlign: 'top', fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.paymentAmount}</a></TableCell>
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
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Номер документа №</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.paymentDocumentNumber || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Классификация бюджета</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.budgetClassificationCode || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Дата зачисления в бюджет</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.dateOfBudgetEnrollment || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Тип транзакции</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.transactionType || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Дата списания средств</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.dateOfAccountDebit || "---"}</a></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const PensionBlock = (props) => {
  const {array, bin} = props
  const [open, setOpen] = useState(false)
  return (
    <>
      <TableContainer sx={{marginTop: 0}}>
        <Table sx={{ borderRadius: '3px'}} aria-label="collapsible table" className="uitable">

          <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '13px', fontWeight: 500, color: "#FFFFFF"}}>Пенсионные отчисления</TableCell>
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
          <TableRow>
            <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{borderRadius: '3px', margin: 0, marginLeft: '0' }}>
                  {array.length> 0 ? array.map((row, index) => (
                       <PensionYear year={row.date_part} number={row.iin_count} bin={bin}/>
                  )): <TableCell  className="zeroResult" align="center" colSpan={4} style={{borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>}
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
const year_2013_1 = 
[
    {
        "zeroten": "530000",
        "IIN": "551124400116",
        "fio": "ЗАМОРСКАЯ ГАЛИНА ВАСИЛЬЕВНА",
        "zerotwelve": "149280"
    },
    {
        "zeroten": "48000",
        "zerotwelve": "24600",
        "IIN": "780101400785",
        "fio": "ЛАРИОНОВА ЮЛИЯ АЛЕКСЕЕВНА"
    }
]
const year_2014_1 = [
  {
      "IIN": "760602350175",
      "fio": "ЛАРИОНОВ ВЛАДИМИР ВЛАДИМИРОВИЧ",
      "zerotwelve": "8100",
      "zeroten": "18000"
  },
  {
      "zerotwelve": "8100",
      "IIN": "780101400785",
      "zeroten": "18000",
      "fio": "ЛАРИОНОВА ЮЛИЯ АЛЕКСЕЕВНА"
  }
]
const PensionYear = (props) => {
  const {year, number, bin} = props
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [curr, setCurr] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const searchIIN = () => {
      if (open) {

        setLoading(true)
        const params = {bin, year, page}
        if (year=='2013') {
          setCurr(year_2013_1)
          setLoading(false)
        } else if (year == "2014") {
          setCurr(year_2014_1)
          setLoading(false)
        }
        // axios.get(default_host+'pensionsbyyear', {params: params}).then(res => {
        //   setCurr(res.data)
        //   console.log(res.data)
        //   setLoading(false)
        // })
      }
    }
      
      searchIIN()

  }, [page, open])
  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - 15) : 0;
  
    const handleChangePage = (event, newPage) => {
        console.log(newPage)
        // getData()
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
  return (
    <>
      <TableContainer>
        <Table colSpan={2} style={{borderBottom: 'hidden'}} sx={{backgroundColor: '#ffffff0a', borderRadius: '3px'}} aria-label="collapsible table" className="uitable">
          <TableHead>
              <TableRow className="uitableHead">
                  <TableCell colSpan={1} sx={{padding: 2}} style={{ fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">Год: {year} - {number}(Сотрудники)</TableCell>
                  <TableCell colSpan={1} sx={{padding: 1}} style={{ color: "#fff" }} align="right">
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
                  <TableCell colSpan={2} sx={{padding: 0}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <TableContainer>
                        <Table sx={{m: 0}}>
                          <TableBody style={{borderBottom: 'hidden'}}>
                              <TableRow>
                                <TableContainer>
                                  <Table sx={{m: 0}}>
                                    <TableHead>
                                      <TableRow className="uitableHead">
                                        <TableCell style={{ width: '25%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">ИИН</TableCell>
                                        <TableCell style={{ width: '45%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">ФИО</TableCell>
                                        <TableCell style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">КНП 010</TableCell>
                                        <TableCell style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="right">КНП 012</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {console.log(curr)}
                                      { !isLoading ? curr.map((row) => (
                                        
                                        <TableRow sx={{borderBottom: 'hidden'}}>
                                          <TableCell style={{fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">{row.IIN}</TableCell>
                                          <TableCell style={{fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">{row.fio}</TableCell>
                                          <TableCell style={{fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left">{row.zeroten}</TableCell>
                                          <TableCell style={{fontSize: '12px', color: "rgb(199, 199, 199)"}} align="right">{row.zerotwelve}</TableCell>
                                        </TableRow> 
                                      )) : [1,2,3,4,5,6,7,8,9,10].map(key => (
                                        <TableRow sx={{borderBottom: 'hidden'}}>
                                          <TableCell align="center" colSpan={4} style={{fontSize: '12px', color: "rgb(199, 199, 199)"}}>Подождите...</TableCell>
                                        </TableRow> 
                                      ))}
                                    </TableBody>
                                    <TableFooter >
                                      <TableRow >
                                          <TablePagination style={{borderBottom: 'hidden'}}
                                              colSpan={4}
                                              count={number}
                                              rowsPerPage={10}
                                              page={page}
                                              onPageChange={handleChangePage}
                                              ActionsComponent={TablePaginationActions}
                                              rowsPerPageOptions={10}
                                              />
                                      </TableRow>
                                    </TableFooter>
                                  </Table>
                                </TableContainer>
                              </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Collapse>
                  </TableCell>
                </TableRow>

          </TableHead>
        </Table>
      </TableContainer>
    </>
  )
}


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      {/* <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton> */}
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      {/* <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton> */}
    </Box>
  );
}


function withParams(Component) {
    return props => <Component {...props} username={useParams()} />;
}

export default withParams(UlLeftBottomFrame);