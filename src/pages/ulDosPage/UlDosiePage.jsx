import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import authService from "../../services/auth.service";

import './dosiePage.scss'
import './loader.scss'

import LeftTopFrame from '../../components/dossierComponents/ul-left-top-frame/UlLeftTopFrame';
import RightTopFrame from '../../components/dossierComponents/ul-right-top-frame/UlRightTopFrame';
import LeftBottomFrame from '../../components/dossierComponents/ul-left-bottom-frame/UlLeftBottomFrame';
import RightBottomFrame from '../../components/dossierComponents/ul-right-bottom-frame/UlRightBottomFrame';
import axios from 'axios';

// const baseURL = 'http://192.168.30.24:9095/'
const baseURL = 'http://localhost:9095/'
const UlDosiePage = (props) => {
    const { bin } = useParams();
    const [loading, isLoading] = useState(null)
    const [fullName, setFullName] = useState('')
    const [ulBin, setUlBin] = useState(0)
    const [nedvijimost, setNedvijimost] = useState([])
    const [address, setAddress] = useState({})
    const [pdl, setPdl] = useState([])

    //RISKS
    const [opg, setOpg] = useState([])
    const [BlockEsfBlock, setBlockESF] = useState([])
    const [nds, setNds] = useState([])
    const [bankrot, setBankrot] = useState([])
    const [omn, setOMN] = useState([])

    const [founders, setFounders] = useState([{}, {}])
    const [taxes, setTaxes] = useState([])
    const [mshes, setMshes] = useState([])
    const [pension, setPension] = useState([])

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const searchIIN = () => {
            isLoading(true)
            const params = {bin: bin}

            axios.get(baseURL+'cc', {params: params}).then(res => {
                setFullName(res.data.mvUls[0].full_name_rus)
                setAddress(res.data.regAddressUlEntities)
                setPdl(res.data.pdls)
                setOpg(res.data.opgEntities)
                setBlockESF(res.data.blockEsfs)
                setNds(res.data.ndsEntities)
                setBankrot(res.data.bankrots)
                setOMN(res.data.omns)
                setUlBin(bin)
                console.log(res.data)
                setFounders(res.data.mvUlFounderFls)
                setNedvijimost(res.data.mvRnOlds)
                setTaxes(res.data.taxOutEntities)
                setMshes(res.data.mshes)
                setPension((curr) => res.data.pensionYearAndEmpNum)
                // console.log(res.data.pensionYearAndEmpNum)
                isLoading(false)
                
            })
        }
        
        searchIIN()
        // console.log(pension)
    }, [bin])

    const logoutHandler = () => {
        authService.logout();
        // navigate('/login');
    }

    if (fullName != '') {
        return (  
            <>
                <div className='dosiePage'>
                    <div className="menu-open" 
                        style={{
                            width: menuOpen?"0":"40px", 
                            zIndex: 100
                        }} onClick={() => setMenuOpen(true)}>
                        <IconButton aria-label="expand row" size="small" onClick={() => setMenuOpen(true)}>
                            <KeyboardArrowRightIcon style={{ fill: '#ffffff' }}/>
                        </IconButton>
                    </div>
                    <div className='menu-bar'  
                        style={{
                            width: menuOpen?"200px":"0", 
                            padding: menuOpen?"20px 20px":"0", 
                            border: menuOpen?"1px solid #3a3a3a":"none"
                        }}>
                        <div className="menu-close" style={{display: !menuOpen?"none":"block"}}>
                            <IconButton aria-label="expand row" size="small" onClick={() => setMenuOpen(false)}>
                                <KeyboardArrowLeftIcon style={{ fill: '#ffffff' }}/>
                            </IconButton>
                        </div>
                        <div className='menu-body'>
                            
                            <div className="menu-name">
                                <span>Мадияр Куанышбеков</span>
                            </div>
                            <div className='menu-buttons'>
                                <div><Link to='/'>Главная страница</Link></div>
                                <div><Link to='/'>KPI и отчеты</Link></div>
                                <div><Link to='/'>Сотрудники</Link></div>
                                <div><Link to='/'>Все новости</Link></div>
                                <div><Link to='/'>Тестирование</Link></div>
                                <div><Link to='/'>Календарь</Link></div>
                                <div><Link to='/'>Информационные ресурсы</Link></div>
                                <div><Link to='/'>База знаний</Link></div>
                                <div><Link to='/'>Согласование</Link></div>
                                <div><Link to='/'>Мессенджер</Link></div>
                                <div><Link to='/'>Предложения</Link></div>
                                <div><Link to='/'>Заявления</Link></div>
                                <div><Link to='/'>Бюро пропусков</Link></div>
                                <div><Link to='/'>Взаимная оценка</Link></div>
                                <div><Link to='/'>Служба поддержки</Link></div>
                            </div>
                            <div className="menu-logout">
                                <Link to='/login' onClick={logoutHandler}>Выйти</Link>
                            </div>
                        </div>
                    </div>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame fullName={fullName} bin={ulBin} address = {address}/>
                            <RightTopFrame founders={founders} pdls={pdl}/>
                            <LeftBottomFrame mshes={mshes} taxes={taxes} nedvijimost={nedvijimost} pension={pension} bin={bin}/>
                            <RightBottomFrame opg={opg} esf={BlockEsfBlock} nds={nds} bankrot={bankrot} omn={omn}/>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (  
            <div className='dosiePage'>
                <div className='loadComponent'>
                    <div className="dim"></div>
                    <div className='load'>
                        <div className="tab11">
                        </div>
                        <div className="tab12">
                        </div>
                        <div className="tab31">
                        </div>
                        <div className="tab32">
                        </div>

                        <div className="loader">
                            <div className="inner one"></div>
                            <div className="inner two"></div>
                            <div className="inner three"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default UlDosiePage;