import React, { useState, useEffect } from 'react';
import axios from 'axios';


import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import SearchedTable from '../searchedTableUL/SearchedTableUL';
// const baseURL = 'http://192.168.30.24:9095/'
const baseURL = 'http://localhost:9095/'

const inputStyle = {
    height: "3px", 
    color: "#fff", 
    fontFamily: 'Montserrat', 
    fontStyle: "normal", 
    fontWeight: 500, 
    fontSize: "13px", 
    lineHeight: "16px",
    // width: '300px',
}

function TabConent_BIN(props) {
    const [bin, setBIN] = useState('')
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const searchBIN = async () => {
        console.log(loading)
        const params = {bin: bin}
        setLoading(true)
        console.log(params)
        axios.get(baseURL+'bin', {params: params}).then(res => {
            console.log(res.data)
            setResult(res.data)
            setLoading(false)
        })
    }
    return ( 
        <div className="tab__content">
 
            <FormControl sx={{
                    display: 'block', 
                    marginLeft: 8, 
                    width: '40%', 
                    marginBottom: '20px'  
                }} fullWidth> 
                <a className='fieldText' style={{marginBottom: '5px', marginLeft: '10px'}}>БИН</a>
                <div style={{ 
                        display: 'flex', 
                        marginLeft: '0 auto' 
                    }}>

                    <TextField sx={{ 
                            height: '34px', 
                            flex: 1, 
                            borderRadius: "4px",
                        }} 
                        value ={bin}
                        onChange={(e) => setBIN(e.target.value)}
                        id="outlined-basic" 
                        inputProps={{ style: inputStyle,'aria-label': 'Without label' }} 
                        variant="outlined" />
                    <Button sx={{
                            height: '34px', 
                            backgroundColor: "#33B6FF", 
                            color: 'white', 
                            width: 'fit-content', 
                            marginLeft: 3 
                        }} onClick={() => searchBIN()} variant="contained">
                        <span className='buttonSearch'>Запрос</span>
                    </Button>
                </div>
            </FormControl>
            <FormControl sx={{ 
                    display: 'block', 
                    marginLeft: 8, 
                    width: '40%', 
                    marginBottom: '20px' 
                }} fullWidth>
                <a className='fieldText' style={{
                        marginLeft: '10px'
                    }}>Номер телефона</a>
                <div style={{ 
                        display: 'flex', 
                        marginLeft: '0 auto'
                    }}>
                    <TextField sx={{
                            height: '34px', 
                            flex: 1, 
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
                    display: 'block', 
                    marginLeft: 8, 
                    width: '40%', 
                    marginBottom: '20px' 
                }} fullWidth>
                <a className='fieldText' style={{
                        marginLeft: '10px'
                    }}>Электронная почта</a>
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

            <div className='searchResultBlock'>
                <p>Результат</p>
                { loading? (
                        <Box sx={{ width: '100%' }}>
                            <div style={{height: '50px'}}></div>
                            <LinearProgress />
                        </Box>
                    ) : ( 
                        
                        <SearchedTable result={result}/>
                )}
            </div>
        </div>
    );
}

export default TabConent_BIN;