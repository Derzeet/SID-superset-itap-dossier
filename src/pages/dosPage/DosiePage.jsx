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

    const [photos, setPhotos] = useState([])

    // risks
    const [criminals, setCriminals] = useState([])
    const [convicts, setConvicts] = useState([])
    const [schools, setSchools] = useState([])
    const [universities, setUniversities] = useState([])
    const [pensions, setPensions] = useState([])
    const [military, setMilitary] = useState([])
    const [militaryEntities, setMilitaryEntities] = useState([])
    const [nedvijimost, setNedvijimost] = useState([])
    const [contacts, setContacts] = useState([])
    const [firstCreditBureauEntities, setFirstCreditBureauEntities] = useState([])
    const [blockEsf, setBlockEsf] = useState([])
    const [equipment, setEquipment] = useState([])
    const [mzEntities, setMzEntities] = useState([])
    const [convictsTerminatedByRehabs, setConvictsTerminatedByRehabs] = useState([])

    const [accountantListEntities, setAccountantListEntities] = useState([])
    const [advocateListEntities, setAdvocateListEntities] = useState([])
    const [auditorsListEntities, setAuditorsListEntities] = useState([])
    const [bailiffListEntities, setBailiffListEntities] = useState([])
    const [ipgoEmailEntities, setIpgoEmailEntities] = useState([])
    const [detdom, setDetdom] = useState([])
    const [adms, setAdms] = useState([])
    const [ulLeaders, setUlLeaders] = useState([]) // Ul svedenia ob uchastiy
    const [flUlFounders, setFlUlFounders] = useState([])

    useEffect(() => {
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: iin}
            
            axios.get(baseURL+'profile', {params: params}).then(res => {
                console.log(res.data)

                console.log(res.data)

                setPhoto(res.data.photoDbf)
                setLeftTopFrameData(res.data.mvFls)
                setRelatives(res.data.fl_relatives)
                setBase(res.data.photoDbf[0].photo)
                setPhotos(res.data.photoDbf)
                // res.data.photoDDFmap()
                setAddresses(res.data.regAddressFls)
                setDocs(res.data.mvIinDocs)
                setTransport(res.data.mvAutoFls)
                setSchools(res.data.schools)
                setUniversities(res.data.universities)
                setCriminals(res.data.criminals)
                setConvicts(res.data.convictsJustifieds)
                setPensions(res.data.flPensionContrs)
                setNedvijimost(res.data.mvRnOlds)
                setContacts(res.data.contacts)
                setFirstCreditBureauEntities(res.data.firstCreditBureauEntities)
                setBlockEsf(res.data.blockEsfs)
                setEquipment(res.data.equipment)

                setMilitary(res.data.millitaryAccounts)
                setMilitaryEntities(res.data.militaryAccounting2Entities)
                setMzEntities(res.data.mzEntities)
                setConvictsTerminatedByRehabs(res.data.convictsTerminatedByRehabs)
                
                setAccountantListEntities(res.data.accountantListEntities)
                setAdvocateListEntities(res.data.advocateListEntities)
                setAuditorsListEntities(res.data.auditorsListEntities)
                setBailiffListEntities(res.data.bailiffListEntities)
                
                setIpgoEmailEntities(res.data.ipgoEmailEntities)
                setDetdom(res.data.orphans)
                setAdms(res.data.adms)

                setUlLeaders(res.data.ul_leaderList)
            setFlUlFounders(res.data.mvUlFounderFls)


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
                            <LeftTopFrame photo={base} photos={photos} data={leftTopFrameData}/>
                            <RightTopFrame relatives={relatives}/>
                            <LeftBottomFrame flUlFounders={flUlFounders} ulLeaders={ulLeaders} docs={docs} addresses={addresses} transport={transport} 
                                schools={schools} universities={universities} pensions={pensions} military={military} militaryEntities={militaryEntities}
                                nedvijimost={nedvijimost} contacts={contacts} equipment={equipment} accountantListEntities={accountantListEntities} advocateListEntities={advocateListEntities} auditorsListEntities={auditorsListEntities} bailiffListEntities={bailiffListEntities} ipgoEmailEntities={ipgoEmailEntities}/>
                            <RightBottomFrame convictsTerminatedByRehabs={convictsTerminatedByRehabs} criminals={criminals} convicts={convicts} firstCreditBureauEntities={firstCreditBureauEntities} blockEsf={blockEsf} mzEntities={mzEntities} detdom={detdom} adms={adms}/>
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

export default DosiePage;