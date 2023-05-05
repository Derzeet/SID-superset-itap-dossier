import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './dosiePage.scss'
import './loader.scss'

import LeftTopFrame from '../../components/dossierComponents/ul-left-top-frame/UlLeftTopFrame';
import RightTopFrame from '../../components/dossierComponents/ul-right-top-frame/UlRightTopFrame';
import LeftBottomFrame from '../../components/dossierComponents/ul-left-bottom-frame/UlLeftBottomFrame';
import RightBottomFrame from '../../components/dossierComponents/ul-right-bottom-frame/UlRightBottomFrame';
import axios from 'axios';

const baseURL = 'http://localhost:9095/'
const UlDosiePage = (props) => {
    const { bin } = useParams();
    const [loading, isLoading] = useState(null)
    const [fullName, setFullName] = useState('')
    const [ulBin, setUlBin] = useState(0)
    const [nedvijimost, setNedvijimost] = useState([])

    const [founders, setFounders] = useState([{}, {}])
    const [taxes, setTaxes] = useState([])
    const [mshes, setMshes] = useState([])

    useEffect(() => {
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: bin}

            axios.get(baseURL+'cc', {params: params}).then(res => {
                setFullName(res.data.mvUls[0].full_name_rus)
                setUlBin(bin)
                console.log(res.data)
                setFounders(res.data.mvUlFounderFls)
                setNedvijimost(res.data.mvRnOlds)
                setTaxes(res.data.taxOutEntities)
                setMshes(res.data.mshes)

                isLoading(false)

            })
        }

        searchIIN()
    }, [bin])

    if (fullName != '') {
        return (  
            <>
                <div className='dosiePage'>
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame fullName={fullName} bin={ulBin}/>
                            <RightTopFrame founders={founders}/>
                            <LeftBottomFrame mshes={mshes} taxes={taxes} nedvijimost={nedvijimost}/>
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