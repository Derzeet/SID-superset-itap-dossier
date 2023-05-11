import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './side-bar/side-bar.scss'
import { Link } from 'react-router-dom';
import authService from '../services/auth.service';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from 'axios';
const baseURL = 'http://localhost:9095/'
const SideBar = (props) => {
    const userSession = JSON.parse(localStorage.getItem("user"))

    const [menuOpen, setMenuOpen] = useState(false)
    const logoutHandler = () => {
        authService.logout();
        // navigate('/login');
    }
    const searchPage = () => {
        let d = document.querySelector(".searchtabs")
        if (menuOpen && d != null) {
            d.style.width = "50%"
        } else {
            if (d != null) {
                d.style.width = "90%"
            }
        }
        
    }
        return (  
            <>
                    <div className="menu-open" 
                    style={{
                        width: menuOpen?"0":"40px", 
                        zIndex: 100,
                        height: 'min-content', 
                        display: menuOpen? "none": "unset"
                    }} onClick={() => {
                        setMenuOpen(true) 
                        searchPage()
                        }}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setMenuOpen(true)}>
                        <MenuIcon style={{ fill: '#ffffff' }}/>
                    </IconButton>
                </div>
                <div className='menu-bar'  
                    style={{
                        width: menuOpen?"200px":"0", 
                        padding: menuOpen?"0px 20px":"0", 
                        border: menuOpen?"1px solid #3a3a3a":"none",
                        marginRight: menuOpen?"20px":"0",
                    }}>
                    <div className="menu-close" style={{display: !menuOpen?"none":"block"}}>
                        <IconButton aria-label="expand row" size="small" onClick={() => setMenuOpen(false)}>
                            <KeyboardArrowLeftIcon style={{ fill: '#ffffff' }}/>
                        </IconButton>
                    </div>
                    <div className='menu-body'>
                        
                        <div className="menu-name">
                            <span>{userSession.email}</span>
                        </div>
                        <div className='menu-buttons'>
                            <div><Link className="menu-text" to='/'>Главная страница</Link></div>
                            <div><Link className="menu-text" to='/'>KPI и отчеты</Link></div>
                            <div><Link className="menu-text" to='/'>Сотрудники</Link></div>
                            <div><Link className="menu-text" to='/'>Все новости</Link></div>
                            <div><Link className="menu-text" to='/'>Тестирование</Link></div>
                            <div><Link className="menu-text" to='/'>Календарь</Link></div>
                            <div><Link className="menu-text" to='/'>Информационные ресурсы</Link></div>
                            <div><Link className="menu-text" to='/'>База знаний</Link></div>
                            <div><Link className="menu-text" to='/'>Согласование</Link></div>
                            <div><Link className="menu-text" to='/'>Мессенджер</Link></div>
                            <div><Link className="menu-text" to='/'>Предложения</Link></div>
                            <div><Link className="menu-text" to='/'>Заявления</Link></div>
                            <div><Link className="menu-text" to='/'>Бюро пропусков</Link></div>
                            <div><Link className="menu-text" to='/'>Взаимная оценка</Link></div>
                            <div><Link className="menu-text" to='/'>Служба поддержки</Link></div>
                        </div>
                        <div className="menu-logout">
                            <Link to='/login' onClick={logoutHandler}>Выйти</Link>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default SideBar;