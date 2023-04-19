import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import SearchedTable from '../../components/searchedTable/SearchedTable';

import './tabContent_iin.scss'

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

const baseURL = 'http://localhost:9095/'

function TabConent_IIN(props) {
    const [iin, setIIN] = React.useState('');
    const [result, setResult] = React.useState(null);
    const [photo, setPhoto] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleSelectPerson = (photo) => {
        setPhoto(photo)
        console.log(photo)
    }

    const handleIIN = (event) => {
        setIIN(event.target.value)
    }
    const searchIIN = async () => {
        console.log(loading)
        const params = {iin: iin}
        setLoading(true)
        console.log(params)
        axios.get(baseURL+'iin', {params: params}).then(res => {
            console.log(res.data)
            setResult(res.data)
            setLoading(false)
        })
        setPhoto('')
    }
    return ( 
        <div className="tab__content tab_iin">
            <div className='displayFlexTwoColumns'>
                <div>
                    <FormControl sx={{
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px',
                        }} fullWidth> 
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>ИИН</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto' 
                            }}>

                            <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    borderRadius: "4px"
                                }} 
                                id="outlined-basic" 
                                inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                value={iin}
                                onChange={handleIIN}
                                variant="outlined" />
                            <Button sx={{
                                    height: '34px', 
                                    backgroundColor: "#33B6FF", 
                                    color: 'white', 
                                    width: 'fit-content', 
                                    marginLeft: 3 
                                }} variant="contained"
                                onClick={() => {
                                    searchIIN()}}>
                                <span className='buttonSearch'>Запрос</span>
                            </Button>
                        </div>
                    </FormControl>
                    <FormControl sx={{ 
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px' 
                        }} fullWidth>
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>Номер документа</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto'
                            }}>
                            <TextField sx={{
                                    height: '34px', 
                                    flex: 1, 
                                    // border: "1px solid #565656", 
                                    borderRadius: "4px",
                                }} id="outlined-basic"
                                inputProps={{ style: inputStyle, 'aria-label': 'Without label' }} 
                                variant="outlined" />
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
                    </FormControl>
                    <FormControl sx={{ 
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px' 
                        }} fullWidth>
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>Номер телефона</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto' 
                            }}>
                            <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    // border: "1px solid #565656", 
                                    borderRadius: "4px" 
                                }} 
                                id="outlined-basic" 
                                inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                variant="outlined" />
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
                    </FormControl>
                    <FormControl sx={{
                            marginLeft: 8, 
                            width: '70%', 
                            marginBottom: '20px' 
                        }} fullWidth>
                        <a className='fieldText' style={{
                                marginBottom: '5px', 
                                marginLeft: '10px'
                            }}>Электронная почта</a>
                        <div style={{ 
                                display: 'flex', 
                                marginLeft: '0 auto' 
                            }}>
                            <TextField sx={{ 
                                    height: '34px', 
                                    flex: 1, 
                                    // border: "1px solid #565656", 
                                    borderRadius: "4px" 
                                }} 
                                id="outlined-basic" 
                                inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                                variant="outlined" />
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

                        
                    </FormControl>
                </div>
                <div>
                    <img src={'data:image/jpeg;base64,' +  photo} alt=''></img>
                </div>
            </div>

            <div className='searchResultBlock'>
                <p>Результат</p>
                { loading ? (
                        <Box sx={{ width: '100%' }}>
                            <div style={{height: '50px'}}></div>
                            <LinearProgress />
                        </Box>
                    ) : ( 
                        
                        <SearchedTable result={result} selectPhoto={handleSelectPerson} loading={loading}/>
                )}
            </div>
        </div>
    );
}

export default TabConent_IIN;