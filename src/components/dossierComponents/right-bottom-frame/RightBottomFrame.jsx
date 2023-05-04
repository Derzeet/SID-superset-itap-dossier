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
                <CriminalsBlock array={props.criminals} />
                <ConvictsBlock array={props.convicts}/>
                {props.firstCreditBureauEntities && props.firstCreditBureauEntities.length > 0? <CreditBlock array={props.firstCreditBureauEntities} exist={props.firstCreditBureauEntities.length > 0? true : false}/> : ""}
                {props.blockEsf && props.blockEsf.length > 0? <BlockEsfBlock array={props.blockEsf} exist={props.blockEsf.length > 0} /> : ""}
                {props.mzEntities && props.mzEntities.length > 0? <MzBlock array={props.mzEntities} /> : ""}
                {props.convictsTerminatedByRehabs && props.convictsTerminatedByRehabs.length > 0? <ConvictTerminatedBlock array={props.convictsTerminatedByRehabs}/> : ""}
            </div>
        </div>

    );
}

const ConvictTerminatedBlock = (props) => {
    const {array} = props
    const exist = array.length > 0? true : false
    const [open, setOpen] = useState(true)

/*
{
                  "erdr_number": "13151203101188",
                  "iin": "820707302506",
                  "qualification_desc": "Изнасилование",
                  "qualification_code": "1200001",
                  "qualificatiob_code_by_11": "2",
                  "qualification_by_11": "средней тяжести",
                  "code_last_solution": "4030",
                  "last_solution": "прекращено по ст.35 ч.1 п.3 УПК РК",
                  "last_solution_date": "2017-04-17",
                  "last_name": "БАЙМУРЗИН",
                  "first_name": "БЕРИК",
                  "patronomyc": "СИСЕНГАЛИЕВИЧ",
                  "birth_date": "1982-07-07",
                  "investigative_authority_code": "19151203",
                  "investigative_authority": "ГОП №2 Астанинского района УП г.Актобе",
                  "is_find_iin": "false",
                  "is_rab": false,
                  "id": 217
                }
*/

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '16px', fontWeight: '500', color: "#FFFFFF"}}><a>Минздрав</a></TableCell>
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
                            <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Статья для учета</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Последнее решение</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Дата последнего решение</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody style={{borderBottom: 'hidden'}}>
                    {exist ? array.map((row, index) => (
                        <ConvictTerminatedRow row={row} />
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

const ConvictTerminatedRow = (props) => {
    const {row} = props
    const [open, setOpen] = useState(false)

    return (
        <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.qualification_desc || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.last_solution || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.last_solution_date || "---"}</a></TableCell>
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
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Тяжесть преступления</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.qualification_by_11 || "---"}</a></TableCell>
                        </TableRow>
                        <TableRow style={{borderBottom: 'hidden'}}>
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Следственный орган</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.investigative_authority || "---"}</a></TableCell>
                        </TableRow>
                        <TableRow style={{borderBottom: 'hidden'}}>
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>ЕРДР номер</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.erdr_number || "---"}</a></TableCell>
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

const MzBlock = (props) => {
    const {array} = props
    const exist = array.length > 0? true : false
    const [open, setOpen] = useState(true)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '16px', fontWeight: '500', color: "#FFFFFF"}}><a>Минздрав</a></TableCell>
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
                            <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Статья для учета</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Наименование болезни</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody style={{borderBottom: 'hidden'}}>
                    {exist ? array.map((row, index) => (
                        <MzRow row={row} />
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

const MzRow = (props) => {
    const {row} = props
    const [open, setOpen] = useState(false)

    return (
        <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.diseaseCode || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.reg || "---"}</a></TableCell>
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
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Статья для учета</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.statusMz || "---"}</a></TableCell>
                        </TableRow>
                        <TableRow style={{borderBottom: 'hidden'}}>
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Медицинская организация</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.medicalOrg || "---"}</a></TableCell>
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

const CriminalsBlock = (props) => {
    const {array} = props
    const exist = array.length > 0? true : false
    const [open, setOpen] = useState(true)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '16px', fontWeight: '500', color: "#FFFFFF"}}><a>Преступления</a></TableCell>
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
                            <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Статья для учета</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Суд 1 инстанции</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Дата рассмотрения в суде 1 инстанции</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody style={{borderBottom: 'hidden'}}>
                    {exist ? array.map((row, index) => (
                        <CriminalRow row={row} />
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

const CriminalRow = (props) => {
    const {row} = props
    const [open, setOpen] = useState(false)

    return (
        <>
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.crime_name || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.court_name || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.court_dt || "---"}</a></TableCell>
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
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Решение по лицу</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.decision || "---"}</a></TableCell>
                        </TableRow>
                        <TableRow style={{borderBottom: 'hidden'}}>
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Мера наказания по приговору</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.sentence || "---"}</a></TableCell>
                        </TableRow>
                        <TableRow style={{borderBottom: 'hidden'}}>
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>Принудительное лечение</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.treatment || "---"}</a></TableCell>
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

const ConvictsBlock = (props) => {
    const {array} = props
    const exist = array.length > 0? true : false
    const [open, setOpen] = useState(true)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '16px', fontWeight: 500, color: "#FFFFFF"}}><a>Приговоры</a></TableCell>
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
                            <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>Статья для учета</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Суд 1 инстанции</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '10%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Дата рассмотрения в суде 1 инстанции</a></TableCell>
                            <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody style={{borderBottom: 'hidden'}}>
                    {exist ? array.map((row, index) => (
                        <ConvictRow row={row} />
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

const ConvictRow = (props) => {
    const {row} = props
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
        <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.qualification || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.court_of_first_instance || "---"}</a></TableCell>
            <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.reg_date || "---"}</a></TableCell>
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
                            <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }} align="left"><a>Решение по лицу</a></TableCell>
                            <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.decision_on_person || "---"}</a></TableCell>
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

const BlockEsfBlock = (props) => {
    const {array, exist} = props
    const [open, setOpen] = useState(true)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '16px', fontWeight: 500, color: "#FFFFFF"}}><a>Блок ЕСФ</a></TableCell>
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
    const [open, setOpen] = useState(true)

    return (
        <>
        <TableContainer sx={{marginTop: 0}}>
            <Table aria-label="collapsible table" className="uitable">

            <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
                <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '16px', fontWeight: 500, color: "#FFFFFF"}}><a>Первое Кредитное Бюро(ПКБ)</a></TableCell>
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

function withParams(Component) {
    return props =>
        <Component {...props} username={useParams()} />;
}

export default withParams(RightBottomFrame);