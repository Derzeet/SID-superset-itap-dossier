import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './leftTopFrame.scss'

function UlLeftTopFrame(props) {
    const [fullName, setFullName] = useState('');
    const [bin, setBin] = useState('');

    useEffect(() => {
        setFullName(props.fullName)
        setBin(props.bin)
    })

    return ( 
        <div className="left-top-section">
            <div className="first-line">
                <div className='person-main-info'>
                    <div>
                        <label htmlFor="pName">Наименование</label>
                        <TextField sx={{ 
                            flex: 1, 
                            border: "1px solid #565656", 
                            borderRadius: "4px",
                            height: '10px'
                        }}  
 
                        id="filled-read-only-input" 
                        value={fullName || '---'}
                        variant="outlined" />
                    </div>
                    <div>
                        <label htmlFor="pName">БИН</label>
                        <TextField sx={{ 
                            flex: 1, 
                            border: "1px solid #565656", 
                            borderRadius: "4px",
                            height: '10px'
                        }}  
 
                        id="filled-read-only-input" 
                        value={bin || '---'}
                        variant="outlined" />
                    </div>
                </div>
            </div> 
            <div className="other-line">
                
            </div>   
        </div>
    );
}

export default UlLeftTopFrame;