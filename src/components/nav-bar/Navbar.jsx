import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = (props) => {
    return ( 
        <>
            <div className="nav-bar">
                {/* <div className="nav-logo">
                    <Link to={"/"}>Dosie</Link>
                </div> */}
                <div className="nav-items">
                    <div className="nav-name">Мадияр Куанышбеков</div>
                    {/* <div className="nav-logout">
                        <Link to={"/login"}>Выйти</Link>
                    </div> */}
                </div>
            </div>
        </>
     );
}

export default Navbar;