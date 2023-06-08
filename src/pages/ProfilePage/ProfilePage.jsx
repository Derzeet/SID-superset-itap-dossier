import React, { useState, useEffect } from 'react';

import './profilePage.scss'

import SideBar from '../../components/side-bar';
import { Select, MenuItem, TextField, ButtonGroup, Button } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOn from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function ProfilePage(props) {

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(true)

    useEffect(() => {

    }, [tab1, tab2])

    const [showPassword, setShowPassword] = useState(false)
    const [changePasswordError, setChangePasswordError] = useState(false)

    const [appNumber, setAppNumber] = useState(0)

    const handlePasswordChange = () => {
        let newPassword = document.querySelector('.newPassword input').value;
        let approvePassword = document.querySelector('.approvePassword input').value;
    
        if (newPassword === approvePassword) {
            setChangePasswordError(false)


            document.getElementById('tab1').click()
    
        } else {
            setChangePasswordError(true)

        }
    }

    return ( 
        <div className='profilePage'>
            <SideBar/>
            <div className='pageTabs'>
                    <div className="tab-wrap">
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" disabled style={{cursor: 'default'}}/>
                        <label htmlFor="tab0" style={{cursor:"default", background: "#0d0f1100"}} sx={{}}></label>

                        <input type="radio" id="tab1" name="tabGroup2" className="tab" defaultChecked
                            onClick={() => {
                                setTab1(true)
                                setTab2(false)
                            }}/>
                        <label htmlFor="tab1" 
                            style={{
                                backgroundColor: tab1?"#0D0F11":"#171B1F", 
                                color: tab1?"#FFFFFF":"#7B7B7B",
                                borderTop: "1px #565656 solid",
                                borderLeft: "1px #565656 solid",
                                borderRight: !tab1? (!tab2 ? "1px #565656 solid" : "none") : "1px #565656 solid", 
                            }}>ИНФОРМАЦИЯ</label>

                        <input type="radio" id="tab2" name="tabGroup2" className="tab"
                            onClick={() => {
                                setTab1(false)
                                setTab2(true)
                            }}/>
                        <label htmlFor="tab2" 
                            style={{
                                backgroundColor: tab2?"#0D0F11":"#171B1F", 
                                color: tab2?"#FFFFFF":"#7B7B7B",
                                borderTop: "1px #565656 solid",
                                borderRight: "1px #565656 solid"
                            }}>НАСТРОЙКИ</label>

                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        
                        <input type="radio" id="tab0" name="tabGroup2" className="tab" style={{cursor: 'default'}}></input>
                        <label htmlFor="tab0" style={{cursor:"default"}}></label>
                        
                        <div className="tab__content">
                        </div>

                        <div className="tab__content">
                            <div className='profileInfo'>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARBhENBw8PERANEA4PEQ4NDRAPEA8PFRcWFhUSExMYKCggGR0lGxYTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRk3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgQFAQMH/8QANRABAQABAgIGCAQGAwAAAAAAAAECAxEEITFBUWFxgQUSIiMykaGxM3LB0UJSU2KS8RM0Q//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+qAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADy1eIxx+K8+yc6D1Gdqcblfg2n1rxutlenLL5g1xkf8uX82X+VSx4nOfxfPag1RRw467+3jPGXZdllm+N38AdAAAAAAAAAAAAAAAAAAAAcysk3y6I6oekNT25jOiTe+II8TxVt20+U7euqwKAAAACelq3HLfC+XVUAGtoasyw3nnOyvRmcFntryfzcr+jTQAAAAAAAAAAAAAAAAAAc8WRq5+tqXK9d+jU17to5XurJAAUAAAAAAdxy2ylnVZWyxWzLy5IOgAAAAAAAAAAAAAAAAA8uJ/Ay8KymvqzfSs7ZWQAAoAAAAAANbQvucfyz7MlraM9zj+WfZB6AAAAAAAAAAAAAAAAAArcdqXHTnqXbe7bs5oekJ7ieM/VngAKAAAAAADR4HUt076/Pa8mc0PR89zfzX7RBaAAAAAAAAAAAAAAAAAB48Vjvw+Xhv8ALmy2zZvNr1s3iuH9Ta43fffpnQDwAUAAAAAAGpwmO3D4983+alw3D+vvbdpNuidLSxm2O06JyQdAAAAAAAAAAAAAAAAAAVuOw30N5/DZVlyzebXovIGMJ62lcdTa+V7YgoAAAAAno6frakxnn3QF/gsNtCf3c1hyTabTq5OoAAAAAAAAAAAAAAAAAAAAKfpGexje+xRXfSN9nGeNUgAFAABb9HT28vCKi16PvvbO2fZBoAAAAAAAAAAAAAAAAAAA5bJN8rtO2g6p63G89tKed/Y1uNk5aXPvvQo28971glnnblvnd0QUAAAAHccrLvjdr3OALmlxt6NWb986fkuy8uTGXNDjeW2rPOfrEF4Rwzlx3wss7kgAAAAAAAAAABDU1Jjjvnf3qlqcbb+HNu+86DQeWevjPis8JzrNz1cr8Vt80AXNTjv6U87+yrnqXK7521EUAAAAAAAAAAAAdxysu+Fs8FrT46/+k375yqoA1NPicL0XyvJ7MVLHOz4bZ4VBsDO0+Nynx8/pV3R1scp7HnL0wHoAAAAhq6kx07ll1fVNR9I5c5j5gq6upcs98/8AXciCgAAAAAAAAAAAAAAAAAAAA7jlZlvjdrHAGrw+r62nv19FnZXqzuAy99t2z6tFAAAZ/pD8afln3oAqgKAAAAAAAAAAAAAAAAAAAAAAPbgv+zPP7VqAgAA//9k=" alt="" srcset="" />
                                <div className="infoBlock">
                                    <div>
                                        <label htmlFor="pName">ФИО</label>
                                        <TextField sx={{ 
                                                flex: 1, 
                                                border: "1px solid #565656", 
                                                borderRadius: "4px",
                                                // height: '10px'
                                            }}  
                                            id="filled-read-only-input" 
                                            value={'Куанышбеков Мадияр Еркебуланулы'}
                                            variant="outlined" />
                                    </div>
                                    <div>
                                        <label htmlFor="pName">Почта</label>
                                        <TextField sx={{ 
                                                flex: 1, 
                                                border: "1px solid #565656", 
                                                borderRadius: "4px",
                                                // height: '10px'
                                            }}  
                                            id="filled-read-only-input" 
                                            value={'mkuanyshbekov@list.ru'}
                                            variant="outlined" />
                                    </div>
                                    <div>
                                        <label htmlFor="pName">Пароль</label>
                                        <TextField
                                            // label="With normal TextField"
                                            id="filled-read-only-input"
                                            value={'ffffff'}
                                            type={!showPassword ? 'password' : 'text'}
                                            variant="outlined"
                                            sx={{ 
                                                flex: 1, 
                                                border: "1px solid #565656", 
                                                borderRadius: "4px",
                                            }} 
                                            InputProps={{
                                                endAdornment: 
                                                    <InputAdornment position="end" sx={{cursor: 'pointer'}}
                                                        onClick={() => {setShowPassword(prev => !prev)}}>
                                                        {!showPassword ? <VisibilityOn sx={{fontSize: '0.9rem'}}/>
                                                        : <VisibilityOff sx={{fontSize: '0.9rem'}}/>}
                                                    </InputAdornment>,
                                            }}
                                        />
                                        <div className='changePassword' onClick={() => {
                                            document.getElementById('tab2').click()
                                        }}>Поменять пароль</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab__content">
                            <div className='profileSettings'>
                                <div className="" style={{
                                    width: '70%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '30px',
                                }}>
                                    <PasswordInput className={'newPassword'} labelTitle={'Введите новый пароль'}/>
                                    <PasswordInput className={'approvePassword'} labelTitle={'Подтвердите новый пароль'}/>
                                    <Button 
                                        variant="outlined" 
                                        sx={{width: '200px', alignSelf: 'flex-end'}}
                                        onClick={handlePasswordChange}
                                        >Сменить пароль</Button>
                                    {changePasswordError ? <div className="errorMessage">Пароли не совпадают</div> : ""}
                                </div>
                                
                            </div>
                        </div>
                        <div className="tab__content">
                        </div>
                        <div className="tab__content">
                        </div>
                    </div>
                </div>
        </div>
    );
}



const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false)

    return <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                height: '35px'
            }} className={props.className}>
                <label 
                    htmlFor="pName"
                    style={{
                        minWidth: '300px',
                        maxWidth: '30%',
                        fontSize: '1.2rem'
                    }}

                    >{props.labelTitle}</label>
                <TextField
                    id="filled-input"
                    type={!showPassword ? 'password' : 'text'}
                    variant="outlined"
                    sx={{ 
                        flex: 1, 
                        border: "1px solid #565656", 
                        borderRadius: "4px",
                    }} 
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end" sx={{cursor: 'pointer'}}
                                onClick={() => {setShowPassword(prev => !prev)}}>
                                {!showPassword ? <VisibilityOn sx={{fontSize: '0.9rem'}}/>
                                : <VisibilityOff sx={{fontSize: '0.9rem'}}/>}
                            </InputAdornment>,
                    }}
                />
            </div>
}

export default ProfilePage;