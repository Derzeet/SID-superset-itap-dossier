import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import SearchedTable from '../../components/searchedTable/SearchedTable';
import './tabContent_fio.scss'

import DopInfoBlock from '../dop-info-block/DopInfoBlock';
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
    height: "3px", 
    color: "#fff", 
    fontFamily: 'Montserrat', 
    fontStyle: "normal", 
    fontWeight: 500, 
    fontSize: "14px", 
    lineHeight: "16px",
    // width: '300px',
}

function TabContent_FIO(props) {
    const [showDopInfo, setShowDopInfo] = useState(false)
    const [loading, setLoading] = useState(false)

    const [fnameType, setFnameType] = useState('begin')
    const [lnameType, setLnameType] = useState('begin')
    const [fathNameType, setFathNameType] = useState('begin')

    const [fname, setFname] = useState('')
    const [fathName, setFathName] = useState('')
    const [lname, setLname] = useState('')

    const [result, setResult] = React.useState(null);
    const [photo, setPhoto] = React.useState('')

    const handleSelectPerson = (photo) => {
        setPhoto(photo)
    }

    const searchFIO = async () => {
        setLoading(true)
        let resFname = ''
        let resLname = ''
        let resFathName = ''
        if (fnameType == 'begin') {
            resFname = fname.toUpperCase() + '$'
        } else if (fnameType == 'have') {
            resFname = '$' + fname.toUpperCase() + '$'
        } else {
            resFname = '$' + fname.toUpperCase()
        }
        if (lnameType == 'begin') {
            resLname = lname.toUpperCase() + '$'
        } else if (lnameType == 'have') {
            resLname = '$' + lname.toUpperCase() + '$'
        } else {
            resLname = '$' + lname.toUpperCase()
        }
        if (fathNameType == 'begin') {
            resFathName = fathName.toUpperCase() + '$'
        } else if (fathNameType == 'have') {
            resFathName = '$' + fathName.toUpperCase() + '$'
        } else {
            resFathName = '$' + fathName.toUpperCase()
        }
        const params = {i: resFname, o: resFathName, f: resLname}
        console.log(params)
        axios.get(baseURL+'fio', {params: params}).then(res => {
            console.log(res.data)
            setResult(res.data)
            setLoading(false)
        })
        setPhoto('')
    }
    
    return ( 
        <div className="tab__content tab_fio">
            <div className="displayFlexTwoColumns">
                <div className="searchForm">
                    <div>
                        <Select value={fnameType} onChange={event => {
                            console.log(event)
                        }} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                            <MenuItem value={"begin"} onClick={(event) => {
                                setFnameType(event.target.dataset.value)
                            }}>Начинается с</MenuItem>
                            <MenuItem value={"have"} onClick={(event) => {
                                setFnameType(event.target.dataset.value)
                            }}>Содержит</MenuItem>
                            <MenuItem value={"ends"} onClick={(event) => {
                                setFnameType(event.target.dataset.value)
                            }}>Заканчивается на</MenuItem>
                        </Select>
                        <div>
                            <label htmlFor="fname">Имя</label>
                            {/* <input type="text" name="fname" id="fname" /> */}
                            <TextField sx={{ 
                                        height: '34px', 
                                        flex: 1, 
                                        borderRadius: "4px"
                                    }} 
                                    id="outlined-basic" 
                                    inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <Select value={lnameType} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                            <MenuItem value={"begin"} onClick={(event) => {
                                setLnameType(event.target.dataset.value)
                            }}>Начинается с</MenuItem>
                            <MenuItem value={"have"} onClick={(event) => {
                                setLnameType(event.target.dataset.value)
                            }}>Содержит</MenuItem>
                            <MenuItem value={"ends"} onClick={(event) => {
                                setLnameType(event.target.dataset.value)
                            }}>Заканчивается на</MenuItem>
                        </Select>
                        <div>
                            <label htmlFor="lName">Фамилия</label>
                            {/* <input type="text" name="lName" id="lName" /> */}
                            <TextField sx={{ 
                                        height: '34px', 
                                        flex: 1, 
                                        borderRadius: "4px"
                                    }} 
                                    id="outlined-basic" 
                                    inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    variant="outlined" />
                        </div>
                    </div>
                    <div>
                    <Select value={fathNameType} inputProps={{ 'aria-label': 'Without label' }} style={selectStyle}>
                        <MenuItem value={"begin"} onClick={(event) => {
                            setFathNameType(event.target.dataset.value)
                        }}>Начинается с</MenuItem>
                        <MenuItem value={"have"} onClick={(event) => {
                            setFathNameType(event.target.dataset.value)
                        }}>Содержит</MenuItem>
                        <MenuItem value={"ends"} onClick={(event) => {
                            setFathNameType(event.target.dataset.value)
                        }}>Заканчивается на</MenuItem>
                    </Select>
                        <div>
                            <label htmlFor="fathName">Отчество</label>
                            {/* <input type="text" name="fathName" id="fathName" /> */}
                            <TextField sx={{ 
                                        height: '34px', 
                                        flex: 1, 
                                        borderRadius: "4px"
                                    }} 
                                    id="outlined-basic" 
                                    inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                    value={fathName}
                                    onChange={(e) => setFathName(e.target.value)}
                                    variant="outlined" />
                        </div>
                    </div>
                </div>
                <div>
                    <img></img>
                </div>
            </div>
            

            <div className='dopInfa'>

                <div onClick={() => setShowDopInfo((prev) => !prev)}>
                    <div>Дополнительные данные</div>
                    <div>{showDopInfo ? "HideIcon" : "ShowIcon"}</div>
                </div>
                <DopInfoBlock show={showDopInfo}/>
            </div>

            <div style={{display: "flex", justifyContent: "flex-start", paddingLeft: "70%"}}>
                <Button sx={{
                        height: '34px', 
                        backgroundColor: "#33B6FF", 
                        color: 'white', 
                        width: 'fit-content', 
                        marginLeft: 3 
                    }} variant="contained" onClick={searchFIO}>
                    <span className='buttonSearch'>Запрос</span>
                </Button>
            </div>

            <div className='searchResultBlock'>
                <p>Результат</p>
                { loading? (
                        <Box sx={{ width: '100%' }}>
                            <div style={{height: '50px'}}></div>
                            <LinearProgress />
                        </Box>
                    ) : ( 
                        
                        <SearchedTable result={result} selectPhoto={handleSelectPerson}/>
                )}
            </div>
        </div>
    );
}

export default TabContent_FIO;