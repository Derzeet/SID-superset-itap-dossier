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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import GrayNavbar from './../../components/gray-navbar/gray-navbar';
import Navbar from '../../components/dossierComponents/nav-bar/Navbar';


import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import authService from "../../services/auth.service";
import SideBar from '../../components/side-bar';

const MainPage = (props) => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false)

    const logoutHandler = () => {
        authService.logout();
        // navigate('/login');
    }

    return (
        <>
            <div className='mainPageBlock'>
                <SideBar/>
                <div className='central-bar'>
                    <div className='blockdiv'>
                        <div className='block' onClick={() => {
                            navigate("/itap")
                        }}>
                            <img src={itap} className='block-img'></img>
                            <a></a>
                            <p>Инструмент для поиска взаимосвязей</p>
                        </div>
                        <div className='block' onClick={() => {
                            navigate("/superset")
                        }}>
                            <img src={superset} className='block-img'></img>
                            <a></a>
                            <p>Инструмент для аналитических отчетов</p>
                        </div>
                        <div className='block' onClick={() => {
                            navigate("/profiler")
                        }}>
                            <img src={profiler} className='block-img'></img>
                            <a></a>
                            <p>Инструмент для поиска объектов</p>
                        </div>
                    </div>
                    <div className='nav-back' style={{
                marginTop: '5px',
                background: 'radial-gradient(110.65% 7956.71% at 10.63% 20.65%, rgba(255, 255, 255, 0.201) 0%, rgba(255, 255, 255, 0) 100%)', 
                border: '0.2px solid #868686',
                backdropFilter: ' blur(27.5px)',
                }}>
                    <div className="NavbarItems3"></div>
                </div>
                    {/* <GrayNavbar/> */}
                    <div className='blockdiv2'>
                        <div className='block' onClick={() => {
                            navigate("/itap")
                        }}>
                            <img src={itap} className='block-img'></img>
                            <a></a>
                            <p>Новости</p>
                        </div>
                        <div className='block' onClick={() => {
                            navigate("/superset")
                        }}>
                            <img src={superset} className='block-img'></img>
                            <a></a>
                            <p>Об</p>
                        </div>
                    </div>
                </div>


            </div>
        </>

    );
}

export default MainPage;