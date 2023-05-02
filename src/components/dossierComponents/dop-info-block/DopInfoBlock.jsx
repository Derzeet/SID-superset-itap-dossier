import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';

import './dopInfoBlock.scss'

function DopInfoBlock(props) {
    const {dateFrom, setDateFrom, dateTo, setDateTo, gender, setGender, nation, setNation, country, setCountry, city, setCity, region, setRegion, vin, setVin} = props
    return ( 
        <div className={"dopInfoBlock " + (props.show ? "showed" : "hidden")}>
            <div>
                <label htmlFor="bdateFrom">Дата рождения с</label>
                <TextField value={dateFrom} onChange={(e) => setDateFrom(e.target.value) } sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='bdateFrom'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="bdayTo">Дата рождения по</label>
                <TextField value={dateTo} onChange={(e) => setDateTo(e.target.value)} sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='bdayTo'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="gender">Пол</label>
                <TextField value={gender} onChange={(e) => setGender(e.target.value)} sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='gender'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="nation">Нация</label>
                <TextField  value={nation} onChange={(e) => setNation(e.target.value)} sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='nation'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="country">Страна</label>
                <TextField  value={country} onChange={(e) => setCountry(e.target.value)} sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='country'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="city">Город</label>
                <TextField  value={city} onChange={(e) => setCity(e.target.value)} sx={{ 
                    flex: 1, 
                    borderRadius: "4px",
                    height: '16px'
                }}  
                id='city'
                variant="outlined" />
            </div>
            <div>
                <label htmlFor="repCity">Область/город республиканского значения</label>
                <TextField  value={region} onChange={(e) => setRegion(e.target.value)} sx={{ 
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
                <TextField   value={vin} onChange={(e) => setVin(e.target.value)} sx={{ 
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