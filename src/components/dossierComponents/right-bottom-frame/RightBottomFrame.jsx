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

    return (

        <div className="right-bottom-section">
            <div className="other-line">
                <CriminalsBlock criminals={props.criminals} />
                <ConvictsJustifieds convicts={props.convicts}/>
                <CreditBlock array={props.firstCreditBureauEntities} exist={props.firstCreditBureauEntities.length > 0? true : false}/>
                <BlockEsfBlock array={props.blockEsf} exist={props.blockEsf.length > 0} />
            </div>
        </div>

    );
}

const BlockEsfBlock = (props) => {
    const {array, exist} = props
    const [open, setOpen] = useState(false)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Блок ЕСФ</a></TableCell>
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
                    <Box sx={{ margin: 0, marginLeft: '0' }}>
                    <TableHead sx={{backgroundColor: '#ffffff0a'}}>
                        <TableRow className="uitableHead">
                            <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>ИП</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Дата начала</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Дата окончания</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody style={{borderBottom: 'hidden'}}>
                    {exist ? array.map((row, index) => (
                        <BlockEsfRow row={row} />
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

const BlockEsfRow = (props) => {
    const {row} = props
    const [open, setOpen] = useState(false)

    let ipName = row.esfName

    return (
        <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{ipName || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.start_dt || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.end_dt || "---"}</a></TableCell>
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
                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>дата обновления</a></TableCell>
                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.update_dt || "---"}</a></TableCell>
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

const CreditBlock = (props) => {
    const {array, exist} = props
    const [open, setOpen] = useState(false)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Первое Кредитное Бюро(ПКБ)</a></TableCell>
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
                    <Box sx={{ margin: 0, marginLeft: '0' }}>
                    <TableHead sx={{backgroundColor: '#ffffff0a'}}>
                        <TableRow className="uitableHead">
                            <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Регион</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Наименование фин. институтов</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Сумма долга по займам</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Общая сумма займов</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Актуальность</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody style={{borderBottom: 'hidden'}}>
                    {exist ? array.map((row, index) => (
                        <CreditRow row={row} />
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

const CreditRow = (props) => {
    const {row} = props
    const [open, setOpen] = useState(false)
    // const relevanceDate = new Date(row.relevanceDate).getFullYear() + '-' + (new Date(row.relevanceDate).getMonth() + 1) + '-' + new Date(row.relevanceDate).getDate()
    let relevanceDate = new Date(row.relevanceDate)
    relevanceDate = ('0' + relevanceDate.getDate()).slice(-2) + '-'
             + ('0' + (relevanceDate.getMonth()+1)).slice(-2) + '-'
             + relevanceDate.getFullYear();

    return (
        <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.region || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.finInstitutionsName || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.amountOfDebt || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.totalSumOfCredits || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{relevanceDate || "---"}</a></TableCell>
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
                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Максимальное количество дней просрочки</a></TableCell>
                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.maxDelayDayNum1 || "---"}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Максимальное количество дней просрочки</a></TableCell>
                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.maxDelayDayNum2 || "---"}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Количество займов</a></TableCell>
                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.quantityFpdSpd || "---"}</a></TableCell>
                    </TableRow>
                    <TableRow style={{borderBottom: 'hidden'}}>
                        <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Общее количество займов</a></TableCell>
                        <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.totalCountOfCredits || "---"}</a></TableCell>
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

function CriminalsBlock(props) {
    const { criminals } = props;
    const [ open, setOpen ] = useState(false);

    return (
    <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">
                <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                    <TableCell sx={{padding: 1}}
                        style={{width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Преступления</a>
                    </TableCell>
                    <TableCell sx={{padding: 1}} style={{width: '10%'}} align='right'>
                        <IconButton aria-label="expand row" size="small" onClick={()=> setOpen(!open)}>
                            {open ?
                            <KeyboardArrowUpIcon style={{ fill: '#ffffff' }} /> :
                            <KeyboardArrowDownIcon style={{ fill: '#ffffff' }} />}
                        </IconButton>
                    </TableCell>
                </TableRow>
                <TableRow style={{}}>
                    <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 0, marginLeft: '0' }}>
                                <TableHead>
                                    <TableRow className="uitableHead" style={{borderBottom: 'hidden'}}>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '1%',fontSize: '14px', color: "#6D6D6D"}} align="left">
                                                <a>№</a>
                                        </TableCell>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '13%', fontSize: '14px', color: "#6D6D6D" }} align="left">
                                                Статья для учета
                                        </TableCell>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '13%', fontSize: '14px', color: "#6D6D6D" }} align="left">
                                                Дата рассмотрения в суде 1 инстанции
                                        </TableCell>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '5%',fontSize: '14px', color: "#6D6D6D" }} align="left">
                                                Суд 1 инстанции
                                        </TableCell>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">
                                                Решение по лицу
                                        </TableCell>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">
                                                Мера наказания по приговору
                                        </TableCell>
                                        <TableCell sx={{padding: 1}}
                                            style={{ width: '10%',fontSize: '14px', color: "#6D6D6D" }} align="left">
                                                Принудительное лечение
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{borderBottom: 'hidden'}}>
                                    {
                                    criminals != null && criminals.length > 0 ? criminals.map((crime, index) => {
                                    return (
                                    <>
                                        <TableRow className="uitableHead" style={{borderBottom: 'hidden'}}>
                                            <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF"}}
                                                align="left">{index+1}</TableCell>
                                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                                align="left">{crime.crime_name}</TableCell>
                                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                                align="left">{crime.court_dt}</TableCell>
                                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                                align="left">{crime.court_name}</TableCell>
                                            <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF" }}
                                                align="left">{crime.decision}</TableCell>
                                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                                align="left">{crime.sentence}</TableCell>
                                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                                align="left">{crime.treatment}</TableCell>
                                        </TableRow>
                                    </>
                                    )
                                    })
                                    :
                                    <TableCell className="zeroResult" colSpan={6} align='center'
                                        style={{ borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>
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

function ConvictsJustifieds(props) {
    const { convicts } = props;
    const [ open, setOpen ] = useState(false);

    return ( 
    <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">
                <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                    <TableCell sx={{padding: 1}}
                        style={{width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Convictions</a>
                    </TableCell>
                    <TableCell sx={{padding: 1}} style={{width: '10%'}} align='right'>
                        <IconButton aria-label="expand row" size="small" onClick={()=> setOpen(!open)}>
                            {open ?
                            <KeyboardArrowUpIcon style={{ fill: '#ffffff' }} /> :
                            <KeyboardArrowDownIcon style={{ fill: '#ffffff' }} />}
                        </IconButton>
                    </TableCell>
                </TableRow>
                <TableRow style={{width: '100%'}}>
                    <TableCell sx={{paddingLeft: 1, margin: 0, border: 0}} style={{width: '100%'}} align='right'>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 0, marginLeft: '0'}}> 
                                <TableContainer sx={{marginTop: 0}}>
                                    <Table aria-label="collapsible table" className="uitable" sx={{width: '100%'}}>
                                        {convicts!=null && convicts.length>0 
                                        ?
                                            convicts.map((convict, index) => {
                                                return (
                                                    <>
                                                    <ConvictionRow convict={convict} index={index}/>
                                                    </>
                                                )
                                            })
                                        :
                                            <>
                                            <TableCell className="zeroResult" colSpan={6} align='center'
                                                style={{ borderBottom: 'hidden'}}><a>Нет данных</a></TableCell>
                                            </>
                                        }
                                        
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </Table>
        </TableContainer>
    </>
    );
}

const ConvictionRow = (props) => {
    const {convict, index} = props
    const [open, setOpen] = useState(false)

    /*
        code_started_investiogation: null
        consider_date_first_instance: null
        court_of_first_instance: "суд города Сарань Карагандинской области"
        decision_on_person: "прекращено в порядке медиации ст.35 ч. 1 п. 12 УПК РК - ст. 68 ч.1 УК РК"
        investigative_authority: null
        is_rab: false
        measure_punishment: null
        qualification: "Кража"
        reg_date: "2017-04-13"
    */

    return (
        <>
        <TableRow className="uitablerow" sx={{height:'10px', width: '100%'}} style={{borderBottom: 'hidden'}} >
            <TableCell sx={{padding: 1}}
                style={{width: '50%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{convict.qualification}</a>
            </TableCell>
            <TableCell sx={{padding: 1}}
                style={{width: '40%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{convict.reg_date}</a>
            </TableCell>
            <TableCell sx={{padding: 1}} style={{width: '10%'}} align='right'>
                <IconButton aria-label="expand row" size="small" onClick={()=> setOpen(!open)}>
                    {open ?
                    <KeyboardArrowUpIcon style={{ fill: '#ffffff' }} /> :
                    <KeyboardArrowDownIcon style={{ fill: '#ffffff' }} />}
                </IconButton>
            </TableCell>
        </TableRow>
        <TableCell sx={{padding: 1}} style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 0, marginLeft: '0'}}>
                    <TableHead>
                        <TableRow className="uitableHead" style={{borderBottom: 'hidden'}}>
                            <TableCell sx={{padding: 1}}
                                style={{ width: '5%', fontSize: '14px', color: "#6D6D6D"}} align="left">
                                    <a>№</a>
                            </TableCell>
                            <TableCell sx={{padding: 1}}
                                style={{ width: '25%', fontSize: '14px', color: "#6D6D6D" }} align="left">
                                    Статья для учета
                            </TableCell>
                            <TableCell sx={{padding: 1}}
                                style={{ width: '20%', fontSize: '14px', color: "#6D6D6D" }} align="left">
                                    Дата рассмотрения в суде 1 инстанции
                            </TableCell>
                            <TableCell sx={{padding: 1}}
                                style={{ width: '20', fontSize: '14px', color: "#6D6D6D" }} align="left">
                                    Суд 1 инстанции
                            </TableCell>
                            <TableCell sx={{padding: 1}}
                                style={{ width: '25%',fontSize: '14px', color: "#6D6D6D" }} align="left">
                                    Решение по лицу
                            </TableCell>
                            <TableCell sx={{padding: 1}}
                                style={{ width: '25%',fontSize: '14px', color: "#6D6D6D" }} align="left">
                                    measure_punishment
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{borderBottom: 'hidden'}}>
                        <TableRow className="uitableHead" style={{borderBottom: 'hidden'}}>
                            <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF"}}
                                align="left">{index+1}</TableCell>
                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                align="left">{convict.qualification}</TableCell>
                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                align="left">{convict.reg_date}</TableCell>
                            <TableCell sx={{padding: 1}} style={{  fontSize: '14px', color: "#FFFFFF" }}
                                align="left">{convict.court_of_first_instance}</TableCell>
                            <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF" }}
                                align="left">{convict.decision_on_person}</TableCell>
                            <TableCell sx={{padding: 1}} style={{ fontSize: '14px', color: "#FFFFFF" }}
                                align="left">{convict.measure_punishment}</TableCell>
                        </TableRow>
                    </TableBody>
                    <div style={{height: '10px'}}></div>
                </Box>
            </Collapse>
        </TableCell>
        </>
    )
}

function withParams(Component) {
return props =>
<Component {...props} username={useParams()} />;
}

export default withParams(RightBottomFrame);