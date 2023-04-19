import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainPage.scss'
import logo from '../../../background/logoFinpollWithBACK.png'
import itap from '../../../background/itapLogo.png'
import superset from '../../../background/supersetLogo.png'
import profiler from '../../../background/profilerLogo.png'

import Navbar from '../../components/nav-bar/Navbar';

const MainPage = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='container'>
                <div className='logodiv'></div>
                <img src={logo} className='logo'></img>
            </div>
            <div className='blockdiv'>
                <div className='block' onClick={() => {
                    navigate("/itap")
                }}>
                    <img src={itap} className='block-img'></img>
                    <a>ITap</a>
                    <p>Инструмент по поиску связей</p>
                </div>
                <div className='block' onClick={() => {
                    navigate("/superset")
                }}>
                    <img src={superset} className='block-img'></img>
                    <a>Superset</a>
                    <p>Инструмент по работе с данными</p>
                </div>
                <div className='block' onClick={() => {
                    navigate("/profiler")
                }}>
                    <img src={profiler} className='block-img'></img>
                    <a>Profiler</a>
                    <p>Инструмент для поиска людей</p>
                </div>
            </div>
        </>
    );
}

export default MainPage;