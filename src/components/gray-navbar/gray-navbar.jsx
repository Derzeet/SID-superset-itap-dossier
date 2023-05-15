import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './navbar.scss'
import { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Route, Routes, useNavigate } from 'react-router-dom';
// import './NavBar.css'
import authService from '../../services/auth.service';



const GrayNavbar = (props) => {
    const userSession = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()    

    const logoutHandler = () => {
        authService.logout();
        // navigate('/login');
    }

    // useEffect(() => {
    //     const a = !userSession ? navigate('/login') : ""
    // })

    const toAdmin = () => {
        navigate('/admin')
    }
    const toLogin = () => {
        navigate('/login')
    }
    return ( 
        <>
            <div className="nav-back" style={{
                marginTop: '5px',
                background: 'radial-gradient(110.65% 7956.71% at 10.63% 20.65%, rgba(255, 255, 255, 0.201) 0%, rgba(255, 255, 255, 0) 100%)', 
                border: '0.2px solid #868686',
                backdropFilter: ' blur(27.5px)',
                }}>
            <nav className="NavbarItems2">
                <h1 className="logoNav"><Link style={{}} to='/'>SID</Link></h1>
                <div>
                    {userSession &&
                    userSession.roles.includes("ADMIN")
                    ?  (
                        <>
                        <div className="admin"><a style={{ fontWeight: 500}} onClick={() => toAdmin()}>Админ панель</a></div>
                        <div className="admin"><Link style={{ fontWeight: 500}} to="/registration">Регистрация</Link></div>
                        </>
                    ) : ("")}

                    <ul className="nav-menu">
                    {userSession ? 
                        <>
                            {/* <style>
                                
                            </style> */}
                            {/* <li>
                                <a className={"nav-email"}>
                                    <span>{userSession.email}</span>
                                </a>
                            </li> */}
                            <li><Link style={{ fontWeight: 600}} className={"nav-links"} to={"/login"} onClick={logoutHandler}>Выйти</Link></li>
                        </> 
                        :
                        <>
                            {/* <li><a className={"nav-links"} href={"http://localhost:3000/registration"}>SIGN UP</a></li> */}
                            {/* <li><a className={"nav-links"} href={"http://localhost:3000/login"}>LOG IN</a></li> */}
                        </>
                    }
                </ul>
                </div>
                
            </nav>
        </div>
        </>
     );
}

export default GrayNavbar;