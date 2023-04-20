import React, { useState, useEffect } from 'react';

import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './tabContent_ul.scss'

import SearchedTable from '../searchedTableUL/SearchedTableUL';

const baseURL = 'http://localhost:9095/'
const selectStyle = {
    width: '200px',
    height: '35px',
    alignSelf: "flex-end",

    backgroundColor: '#0D0F11',
    color: '#fff',

    outline: "none",
    // border: '1px solid #565656',
    borderRadius: '2px',
    
    display: "flex",
    flexDirection: "row",
}


const inputStyle = {
    width: "100%",
    height: "3px", 
    color: "#fff", 
    fontFamily: 'Montserrat', 
    fontStyle: "normal", 
    fontWeight: 500, 
    fontSize: "14px", 
    lineHeight: "16px",
    // width: '300px',
}

function TabContent_UL(props) {
    const [ulName, setULName] = useState("")
    const [ulNameType, setULNameType] = useState("begin")

    return ( 
        <div className="tab__content tab_ul">
            <div className="searchForm">
                <div>
                    <Select value={ulNameType} onChange={event => {
                        console.log(event)
                    }} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                        <MenuItem value={"begin"} onClick={(event) => {
                            setULNameType(event.target.dataset.value)
                        }}>Начинается с</MenuItem>
                        <MenuItem value={"have"} onClick={(event) => {
                            setULNameType(event.target.dataset.value)
                        }}>Содержит</MenuItem>
                        <MenuItem value={"ends"} onClick={(event) => {
                            setULNameType(event.target.dataset.value)
                        }}>Заканчивается на</MenuItem>
                    </Select>
                    <div style={{width: "100%"}}>
                        <label htmlFor="ulName">Наименование организации</label>
                        <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    borderRadius: "4px"
                                }} 
                                id="outlined-basic ulName" 
                                inputProps={{ style: inputStyle, 'aria-label': 'Without label' }} 
                                value={ulName}
                                onChange={(e) => setULName(e.target.value)}
                                variant="outlined" />
                    </div>
                </div>
                <div className="displayFlexTwoColumn">
                    <div>
                        <label htmlFor="regNum">Регистрационный номер №</label>
                        <TextField sx={{ 
                            flex: 1, 
                            borderRadius: "4px",
                            height: '16px'
                        }}  
                        id='regNum'
                        variant="outlined" />
                    </div>
                    <div>
                        <label htmlFor="transport">VIN/Кузов/Шасси (Транспорт)</label>
                        <TextField sx={{ 
                            flex: 1, 
                            borderRadius: "4px",
                            height: '16px'
                        }}  
                        id='transport'
                        variant="outlined" />
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button sx={{
                            height: '34px', 
                            backgroundColor: "#33B6FF", 
                            color: 'white', 
                            width: 'fit-content', 
                            marginLeft: 3 
                        }} variant="contained">
                        <span className='buttonSearch'>Запрос</span>
                    </Button>
                </div>
            </div>
            <div className='searchResultBlock'>
                <p>Результат</p>
                <SearchedTable/>
            </div>
        </div>
    );
}

export default TabContent_UL;