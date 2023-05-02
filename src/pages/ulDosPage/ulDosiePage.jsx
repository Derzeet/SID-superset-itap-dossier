import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './dosiePage.scss'
import './loader.scss'

import Navbar from '../../components/dossierComponents/nav-bar/Navbar';
import LeftTopFrame from '../../components/dossierComponents/ul-left-top-frame/UlLeftTopFrame';
import RightTopFrame from '../../components/dossierComponents/ul-rigth-top-frame/UlRightTopFrame';
import LeftBottomFrame from '../../components/dossierComponents/ul-left-bottom-frame/UlLeftBottomFrame';
import RightBottomFrame from '../../components/dossierComponents/ul-right-bottom-frame/UlRightBottomFrame';
import SearchBar from '../../components/dossierComponents/search-bar/SearchBar';
import axios from 'axios';
const baseURL = 'http://192.168.30.24:9095/'
const UlDosiePage = (props) => {
    const { bin } = useParams();

    useEffect(() => {
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: bin}

            axios.get(baseURL+'cc', {params: params}).then(res => {
                console.log(res.data)

                isLoading(false)
            })
        }

        searchIIN()
    }, [bin])

    if (base != '') {
        return (  
            <>
                <div className='dosiePage'>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame />
                            <RightTopFrame />
                            <LeftBottomFrame />
                            <RightBottomFrame />
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