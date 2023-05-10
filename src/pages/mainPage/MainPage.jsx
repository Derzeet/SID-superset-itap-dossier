import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import './mainPage.scss'
import logo from './../../background/logoFinpollWithBACK.png'
import itap from './../../background/itapLogo.png'
import superset from './../../background/supersetLogo.png'
import profiler from './../../background/profilerLogo.png'
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import Navbar from '../../components/dossierComponents/nav-bar/Navbar';

const MainPage = (props) => {
    const navigate = useNavigate();
    return (
        <div className='mainPageBlock'>
            <div className='blockdiv'>
                <div className='block' onClick={() => {
                    navigate("/itap")
                }}>
                    <img src={itap} className='block-img'></img>
                    <a></a>
                    <p>Инструмент по поиску связей</p>
                </div>
                <div className='block' onClick={() => {
                    navigate("/superset")
                }}>
                    <img src={superset} className='block-img'></img>
                    <a></a>
                    <p>Инструмент для аналитических расчетов</p>
                </div>
                <div className='block' onClick={() => {
                    navigate("/profiler")
                }}>
                    <img src={profiler} className='block-img'></img>
                    <a></a>
                    <p>Инструмент для поиска объектов</p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;