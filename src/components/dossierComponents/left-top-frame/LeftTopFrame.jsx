import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './leftTopFrame.scss'

function LeftTopFrame(props) {
    const [photo, setPhoto] = useState('')
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [patronymic, setpatronymic] = useState('')
    const [iin, setiin] = useState('')
    // const [first_name, setfirst_name] = useState('')
    // const [first_name, setfirst_name] = useState('')
    // const [first_name, setfirst_name] = useState('')
    useEffect(() => {
        // console.log("lol", props)
        setPhoto(props.photo)
        setfirst_name(props.data[0].first_name)
        setlast_name(props.data[0].last_name)
        setpatronymic(props.data[0].patronymic)
        setiin(props.data[0].iin)
    })
    // const [iin, setIIN] = useState("")
    //
    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //
    //         if (event.target.value !== iin) {
    //             setIIN(event.target.value)
    //             console.log(event.target.value)
    //             props.fetchIIN(event.target.value)
    //         }
    //     }
    // }

    return ( 
        <div className="left-top-section">
            <div className="first-line">
                <div className="avatar">
                    <img src={"data:image/png;base64, " + photo} alt="No Image" />
                </div>    
                <div className='person-main-info'>
                    <div>
                        <label htmlFor="pName">Имя</label>
                        <TextField sx={{ 
                            flex: 1, 
                            border: "1px solid #565656", 
                            borderRadius: "4px",
                            height: '10px'
                        }}  
 
                        id="filled-read-only-input" 
                        // inputProps={{'aria-label': 'Without label' }} 
                        value={first_name || '---'}
                        variant="outlined" />
                        {/* <input readOnly type="text" name="pName" value={first_name || "---"} className={props.data.fName ? "" : "disabledInput"} id="pName" placeholder='Салтанат' /> */}
                    </div>
                    <div>
                        <label htmlFor="pFam">Фамилия</label>
                        <TextField sx={{ 
                            flex: 1, 
                            borderRadius: "4px",
                            height: '10px'
                        }}  
 
                        id="filled-read-only-input" 
                        // inputProps={{'aria-label': 'Without label' }} 
                        value={last_name || '---'}
                        variant="outlined" />
                    </div>
                    <div>
                        <label htmlFor="pOtch">Отчество</label>
                        <TextField sx={{ 
                            flex: 1, 
                            borderRadius: "4px",
                            height: '10px'
                        }}  
 
                        id="filled-read-only-input" 
                        // inputProps={{'aria-label': 'Without label' }} 
                        value={patronymic || '---'}
                        variant="outlined" />
                    </div>
                    <div>
                        <label htmlFor="pIIN">ИИН</label>
                        <TextField sx={{ 
                            flex: 1, 
                            borderRadius: "4px",
                            height: '10px'
                        }}  
 
                        id="filled-read-only-input" 
                        // inputProps={{'aria-label': 'Without label' }} 
                        value={iin || '---'}
                        variant="outlined" />
                    </div>
                </div>
            </div> 
            <div className="other-line">
                <div>
                    <label htmlFor="born-city">Дата рождения</label>
                    <TextField sx={{ 
                        flex: 1, 
                        borderRadius: "4px",
                        height: '10px',
                    }}  

                    id="filled-read-only-input" 
                    // inputProps={{'aria-label': 'Without label' }} 
                    value={props.data[0].birth_date || "---"}
                    variant="outlined" />
                </div>
                <div>
                    <label htmlFor="nationality">Национальность</label>
                    <TextField sx={{ 
                        flex: 1, 
                        borderRadius: "4px",
                        height: '10px',
                    }}  

                    id="filled-read-only-input" 
                    // inputProps={{'aria-label': 'Without label' }} 
                    value={props.data[0].nationality_ru_name || "---"}
                    variant="outlined" />
                </div>
                <div>
                    <label htmlFor="citizenship">Гражданство</label>
                    <TextField sx={{ 
                        flex: 1, 
                        borderRadius: "4px",
                        height: '10px',
                    }}  

                    id="filled-read-only-input" 
                    // inputProps={{'aria-label': 'Without label' }} 
                    value={props.data[0].citizenship_ru_name || "---"}
                    variant="outlined" />
                </div>
                <div>
                    <label htmlFor="citizenship">Пол</label>
                    <TextField sx={{ 
                        flex: 1, 
                        borderRadius: "4px",
                        height: '10px',
                    }}  

                    id="filled-read-only-input" 
                    // inputProps={{'aria-label': 'Without label' }} 
                    value={props.data[0].gender==='1' ? 'МУЖЧИНА' : 'ЖЕНЩИНА'}
                    variant="outlined" />
                </div>
            </div>   
        </div>
    );
}

export default LeftTopFrame;