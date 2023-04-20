import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './dosiePage.scss'
import './loader.scss'

import Navbar from '../../components/dossierComponents/nav-bar/Navbar';
import LeftTopFrame from '../../components/dossierComponents/left-top-frame/LeftTopFrame';
import RightTopFrame from '../../components/dossierComponents/rigth-top-frame/RightTopFrame';
import LeftBottomFrame from '../../components/dossierComponents/left-bottom-frame/LeftBottomFrame';
import RightBottomFrame from '../../components/dossierComponents/right-bottom-frame/RightBottomFrame';
import SearchBar from '../../components/dossierComponents/search-bar/SearchBar';
import axios from 'axios';
const baseURL = 'http://localhost:9095/'
const DosiePage = (props) => {
    const [leftTopFrameData, setLeftTopFrameData] = useState({});
    const [docs, setDocs] = useState([])
    const [transport, setTransport] = useState([])
    const [relatives, setRelatives] = useState([])
    const [addresses, setAddresses] = useState([])
    const [photo, setPhoto] = useState([])
    const [base, setBase] = useState('')
    const { iin } = useParams();
    const [loading, isLoading] = useState(null)

    useEffect(() => {
        console.log(iin)
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: iin}
            axios.get(baseURL+'profile', {params: params}).then(res => {
                console.log(res.data)
                setPhoto(res.data.photoDbf)
                setLeftTopFrameData(res.data.mvFls)
                setRelatives(res.data.fl_relatives)
                setBase(res.data.photoDbf[0].photo)
                setAddresses(res.data.regAddressFls)
                setDocs(res.data.mvIinDocs)
                setTransport(res.data.mvAutoFls)
                isLoading(false)
            })
        }
        searchIIN()
    }, [iin])

    if (base != '') {
        return (  
            <>
                <div className='dosiePage'>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame photo={base} data={leftTopFrameData}/>
                            <RightTopFrame relatives={relatives}/>
                            <LeftBottomFrame docs={docs} addresses={addresses} transport={transport}/>
                            <RightBottomFrame/>
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
                
                {/* <div className='dosiePage'>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame photo={base} data={leftTopFrameData}/>
                            <RightTopFrame relatives={relatives}/>
                            <LeftBottomFrame docs={docs} addresses={addresses} transport={transport}/>
                            <RightBottomFrame/>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }

}

export default DosiePage;