import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';

import './dopInfoBlock.scss'

function DopInfoBlock(props) {
    return ( 
        <div className={"dopInfoBlock " + (props.show ? "showed" : "hidden")}>
            <div>
                <label htmlFor="bdateFrom">Дата рождения с</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='bdateFrom'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="bdayTo">Дата рождения по</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='bdayTo'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="gender">Пол</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='gender'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="nation">Нация</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='nation'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="country">Страна</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='country'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="city">Город</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='city'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="repCity">Область/город республиканского значения</label>
                <TextField sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='repCity'
                variant="outlined" />
            </div>
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
    );
}

export default DopInfoBlock;