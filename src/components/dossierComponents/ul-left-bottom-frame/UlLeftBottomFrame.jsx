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

function UlLeftBottomFrame(props) {
    const soc = ''
    
    const [nedvijimost, setNedvijimost] = useState([])
    const [taxes, setTaxes] = useState([])
    const [mshes, setMshes] = useState([])

    useEffect(()=> {
        setNedvijimost(props.nedvijimost)
        setTaxes(props.taxes)
        setMshes(props.mshes)

    }, [soc])
    return ( 

        <div className="left-bottom-section">
            <div className="other-line">
              <NedvijimostBlock array={nedvijimost} exist={nedvijimost.length>0}/>
              <TaxesBlock array={taxes} exist={taxes.length>0}/>
              {mshes && mshes.length > 0? <MshesBlock array={mshes} exist={mshes && mshes.length > 0 ? true : false}/> : ""}

            </div>   
        </div>

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
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Техника</a></TableCell>
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
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Недвижимости</a></TableCell>
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

const TaxesBlock = (props) => {
  const {array, exist} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableContainer sx={{marginTop: 0}}>
        <Table aria-label="collapsible table" className="uitable">

          <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
              <TableCell sx={{padding: 1}} style={{borderBottom: 'hidden', width: '90%', fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>Налоги</a></TableCell>
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
                        <TableCell sx={{padding: 1}} style={{ width: '15%',fontSize: '12px', color: "rgb(199, 199, 199)"}} align="left"><a>ogdName</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '50%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>Название налога</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '30%', fontSize: '12px', color: "rgb(199, 199, 199)" }} align="left"><a>paymentAmount</a></TableCell>
                        <TableCell sx={{padding: 1}} style={{ width: '5%', color: "#fff" }} align="left"></TableCell>
                    </TableRow>
                  </TableHead> 
                  <TableBody style={{borderBottom: 'hidden'}}>
                  {exist ? array.map((row, index) => (
                      <TaxesRow row={row} />
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

const TaxesRow = (props) => {
  const {row} = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow className="uitablerow" sx={{height:'10px',}} style={{borderBottom: 'hidden'}}>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF"}}><a>{row.ogdName || "---"}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.kbkName}</a></TableCell>
        <TableCell sx={{padding: 1}} style={{ fontSize: '12px', fontWeight: 500, color: "#FFFFFF" }} align="left"><a>{row.paymentAmount}</a></TableCell>
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
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>budgetClassificationCode</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.budgetClassificationCode || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>dateOfBudgetEnrollment</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.dateOfBudgetEnrollment || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>transactionType</a></TableCell>
                    <TableCell style={{ width: '70%', fontSize: '12px', color: "#FFFFFF" }} align="left"><a>{row.transactionType || "---"}</a></TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: 'hidden'}}>
                    <TableCell style={{ width: '30%', fontSize: '12px', color: "#6D6D6D" }}  align="left"><a>dateOfAccountDebit</a></TableCell>
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

function withParams(Component) {
    return props => <Component {...props} username={useParams()} />;
}

export default withParams(UlLeftBottomFrame);