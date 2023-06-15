import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import default_host from '../../config/config';

import './dosiePage.scss'
import './loader.scss'

import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Navbar from '../../components/dossierComponents/nav-bar/Navbar';
import LeftTopFrame from '../../components/dossierComponents/left-top-frame/LeftTopFrame';
import RightTopFrame from '../../components/dossierComponents/rigth-top-frame/RightTopFrame';
import LeftBottomFrame from '../../components/dossierComponents/left-bottom-frame/LeftBottomFrame';
import RightBottomFrame from '../../components/dossierComponents/right-bottom-frame/RightBottomFrame';
import SearchBar from '../../components/dossierComponents/search-bar/SearchBar';
import axios from 'axios';
import SideBar from '../../components/side-bar';
const baseURL = 'http://192.168.30.24:9095/'
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
    const [wantedList, setWantedList] = useState([])

    const [commodityProducers, setCommodityProducers] = useState([])

    const [pdl, setPdl] = useState([])

    const [menuOpen, setMenuOpen] = useState(false)
    const getData = (res) => {
        setPhoto(res.photoDbf)
        setLeftTopFrameData(res.mvFls)
        setRelatives(res.fl_relatives)
        if (res.photoDbf && res.photoDbf[0].photo) setBase(res.photoDbf[0].photo)
        setPhotos(res.photoDbf)
        // res.data.photoDDFmap()
        setAddresses(res.regAddressFls)
        setDocs(res.mvIinDocs)
        setTransport(res.mvAutoFls)
        setSchools(res.schools)
        setUniversities(res.universities)
        setCriminals(res.criminals)
        setConvicts(res.convictsJustifieds)
        setPensions(res.flPensionContrs)
        setNedvijimost(res.mvRnOlds)
        setContacts(res.contacts)
        setFirstCreditBureauEntities(res.firstCreditBureauEntities)
        setBlockEsf(res.blockEsfs)
        setEquipment(res.equipment)

        setMilitary(res.millitaryAccounts)
        setMilitaryEntities(res.militaryAccounting2Entities)
        setMzEntities(res.mzEntities)
        setConvictsTerminatedByRehabs(res.convictsTerminatedByRehabs)
        
        setAccountantListEntities(res.accountantListEntities)
        setAdvocateListEntities(res.advocateListEntities)
        setAuditorsListEntities(res.auditorsListEntities)
        setBailiffListEntities(res.bailiffListEntities)
        setWantedList(res.wantedListEntities)

        setIpgoEmailEntities(res.ipgoEmailEntities)
        setDetdom(res.orphans)
        setAdms(res.adms)

        setUlLeaders(res.ul_leaderList)
        setFlUlFounders(res.mvUlFounderFls)
        setCommodityProducers(res.commodityProducers)

        setPdl(res.pdls)


        isLoading(false)
    }
    useEffect(() => {
        const searchIIN = () => {
            isLoading(true)
            const params = {iin: iin}
            if (iin == '891114402574') {
                const res = iin891114402574
                getData(res)
            } else if (iin == "810504300980") {
                const res = iin810504300980
                getData(res)
            } else if (iin == '200715600533') {
                const res = iin200715600533
                getData(res)
            } else if (iin == "831005300954") {
                const res = iin831005300954 
                getData(res)
            }
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
                                nedvijimost={nedvijimost} contacts={contacts} equipment={equipment} accountantListEntities={accountantListEntities} advocateListEntities={advocateListEntities} auditorsListEntities={auditorsListEntities} bailiffListEntities={bailiffListEntities} ipgoEmailEntities={ipgoEmailEntities} commodityProducers={commodityProducers}/>
                            <RightBottomFrame wantedList={wantedList} pdl={pdl} convictsTerminatedByRehabs={convictsTerminatedByRehabs} criminals={criminals} convicts={convicts} firstCreditBureauEntities={firstCreditBureauEntities} blockEsf={blockEsf} mzEntities={mzEntities} detdom={detdom} adms={adms}/>
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


const iin891114402574 = {
    "mvFls": [
        {
            "iin": "891114402574",
            "gender": "2",
            "birth_date": "1989-11-14",
            "last_name": "АБЕНОВА",
            "first_name": "СЫМБАТ",
            "patronymic": "САНСЫЗБАЕВНА",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "birth_region_id": "316",
            "birth_region_name": null,
            "birth_district_id": "16",
            "birth_district_name": null,
            "region": "ТАЛГАРСКИЙ РАЙОН",
            "district": "АЛМАТИНСКАЯ"
        }
    ],
    "photoDbf": [
        {
            "iin": "891114402574",
            "document_type_id": "2",
            "photo": "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",
            "date": "2019-01-22 11:43:12"
        }
    ],
    "mvAutoFls": [],
    "omns": [
        null
    ],
    "orphanss": [],
    "equipment": [],
    "dormants": [],
    "adms": [],
    "fl_relatives": [
        {
            "id": 71750686,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": null,
            "parent_fio": "АБЕКНОВ САНСЫЗБАЙ ",
            "parent_birth_date": "1949/04/29:12:00:00 AM",
            "relative_type": "Ребенок",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 80539908,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": null,
            "parent_fio": "ЖУСИПБЕКОВА ШАРАПАТ ",
            "parent_birth_date": "1957/03/08:12:00:00 AM",
            "relative_type": "Ребенок",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 112490432,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": "100802551325",
            "parent_fio": "ӘДІЛХАН АЙБЕК СӘУЛЕТҰЛЫ",
            "parent_birth_date": "2010/08/02:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 112962784,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": "130904603592",
            "parent_fio": "ӘДІЛХАН АЙЫМ СӘУЛЕТҚЫЗЫ",
            "parent_birth_date": "2013/09/04:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 117312615,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": "190908500968",
            "parent_fio": "ӘДІЛХАН ҚУАНЫШ СӘУЛЕТҰЛЫ",
            "parent_birth_date": "2019/09/08:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 118307766,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": "120406504324",
            "parent_fio": "ӘДІЛХАН КЕРІМ СӘУЛЕТҰЛЫ",
            "parent_birth_date": "2012/04/06:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 167512057,
            "iin": "891114402574",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "birth_date": "1989/11/14:12:00:00 AM",
            "parent_iin": "831005300954",
            "parent_fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "parent_birth_date": "1983/10/05:12:00:00 AM",
            "relative_type": "Супруга",
            "marriage_reg_date": "2010-03-19",
            "marriage_divorce_date": null
        }
    ],
    "regAddressFls": [
        {
            "id": null,
            "fl_id": null,
            "iin": "891114402574",
            "registration_type": "Зарегистрирован",
            "country": "КАЗАХСТАН",
            "region": "ТАЛГАРСКИЙ РАЙОН",
            "district": "АЛМАТИНСКАЯ",
            "city": "Алатауский, Амангельды",
            "street": "УЛИЦА Орталық",
            "building": "22",
            "korpus": null,
            "apartment_number": null,
            "reg_date": "2012/05/10:12:00:00 AM",
            "reg_end_date": null,
            "reg_reason": "Зарегистрирован",
            "is_active": null
        }
    ],
    "criminals": [],
    "pdls": [],
    "wantedListEntities": [],
    "commodityProducers": [],
    "mvIinDocs": [
        {
            "id": "cc211c43-0b68-4913-853a-4b6291e8d482",
            "gender": "2",
            "birth_date": "1989-11-14",
            "iin": "891114402574",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "doc_number": "037620363",
            "doc_type_id": "2",
            "doc_type_ru_name": "УДОСТОВЕРЕНИЕ РК",
            "issue_date": "2015-02-25",
            "expiry_date": "2025-02-24",
            "document_invalidity_id": "0",
            "document_invalidity_ru_name": "ДОКУМЕНТ ДЕЙСТВИТЕЛЕН",
            "document_invalidity_date": null,
            "issue_organization_id": "2",
            "issue_organization_ru_name": "МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РК"
        }
    ],
    "universities": [
        {
            "id": 82318,
            "lastname": "АБЕНОВА",
            "name": "СЫМБАТ",
            "patronymic": "САНСЫЗБАЕВНА",
            "iin": "891114402574",
            "start_date": "2009-08-01",
            "five": null,
            "spec_name_2": null,
            "course": "2 курс",
            "duration": "3",
            "spec_name": "5В010200-Педагогика и методика начального обучения",
            "study_name": "ТОО \"Центрально-Азиатский Инновационный Университет\"",
            "study_type": "университет",
            "study_code": "210240037049",
            "end_date": "2012-06-01",
            "fourteen": null,
            "fiveteen": "трудоустроен по специальности",
            "sixteen": "2"
        },
        {
            "id": 82319,
            "lastname": "АБЕНОВА",
            "name": "СЫМБАТ",
            "patronymic": "САНСЫЗБАЕВНА",
            "iin": "891114402574",
            "start_date": "2019-01-08",
            "five": null,
            "spec_name_2": null,
            "course": "2 курс",
            "duration": "2",
            "spec_name": "5В012000-Профессиональное обучение",
            "study_name": "ТОО \"Центрально-Азиатский Инновационный Университет\"",
            "study_type": "университет",
            "study_code": "210240037049",
            "end_date": "2020-06-26",
            "fourteen": null,
            "fiveteen": "не трудоустроен",
            "sixteen": "2"
        }
    ],
    "schools": [],
    "contacts": [
        {
            "iin": "891114402574",
            "phone": "7082522027",
            "fio": "ЧОЙЫМБАЕВ БАУРЖАН КГУ СПЕЦ.ГИМНАЗИЯ 8 ИМ ГАГАРИНА",
            "email": null,
            "nickname": null,
            "source": null,
            "leader_fio": null,
            "id": 3493486
        },
        {
            "iin": "891114402574",
            "phone": "7082522027",
            "fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "email": null,
            "nickname": null,
            "source": "kazpost",
            "leader_fio": null,
            "id": 6842397
        }
    ],
    "millitaryAccounts": [],
    "militaryAccounting2Entities": [],
    "convictsTerminatedByRehabs": [],
    "convictsJustifieds": [],
    "bankrots": [],
    "flPensionContrs": [
        {
            "years": [
                "2009.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "2000"
                },
                {
                    "amount": "720",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ТОО Ломбард Улы Орда",
                    "AMOUNT": 2000,
                    "pay_date": 2009
                },
                {
                    "AMOUNT": 720,
                    "P_NAME": "ТОО Ломбард Улы Орда",
                    "KNP": "012",
                    "pay_date": 2009
                }
            ],
            "year": null,
            "companyBin": "582100290051",
            "amountOfEmp": null
        },
        {
            "years": [
                "2017.0",
                "2018.0",
                "2019.0",
                "2020.0",
                "2021.0",
                "2022.0",
                "2023.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "390520"
                },
                {
                    "amount": "178759",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "AMOUNT": 31500,
                    "pay_date": 2017
                },
                {
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "AMOUNT": 15389,
                    "KNP": "012",
                    "pay_date": 2017
                },
                {
                    "KNP": "010",
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "AMOUNT": 57481,
                    "pay_date": 2018
                },
                {
                    "AMOUNT": 22349,
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "KNP": "012",
                    "pay_date": 2018
                },
                {
                    "KNP": "010",
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "AMOUNT": 52940,
                    "pay_date": 2019
                },
                {
                    "AMOUNT": 19443,
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "KNP": "012",
                    "pay_date": 2019
                },
                {
                    "KNP": "010",
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "AMOUNT": 14924,
                    "pay_date": 2020
                },
                {
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "AMOUNT": 7378,
                    "KNP": "012",
                    "pay_date": 2020
                },
                {
                    "KNP": "010",
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "pay_date": 2021,
                    "AMOUNT": 112638
                },
                {
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "KNP": "012",
                    "pay_date": 2021,
                    "AMOUNT": 57056
                },
                {
                    "KNP": "010",
                    "AMOUNT": 39720,
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "pay_date": 2022
                },
                {
                    "P_NAME": "\"Алматы облысыныѕ білім басќармасы\" мемлекеттік мекемесініѕ ",
                    "KNP": "012",
                    "AMOUNT": 24904,
                    "pay_date": 2022
                },
                {
                    "KNP": "010",
                    "AMOUNT": null,
                    "P_NAME": null,
                    "pay_date": 2022
                },
                {
                    "P_NAME": "КГУ \"Специализированный лицей №8 имени Ю.Гагарина\" государст",
                    "KNP": "010",
                    "AMOUNT": 81317,
                    "pay_date": 2023
                },
                {
                    "P_NAME": "КГУ \"Специализированный лицей №8 имени Ю.Гагарина\" государст",
                    "AMOUNT": 32240,
                    "KNP": "012",
                    "pay_date": 2023
                }
            ],
            "year": null,
            "companyBin": "700840000024",
            "amountOfEmp": null
        },
        {
            "years": [
                "2019.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "4861"
                },
                {
                    "amount": "2976",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "AMOUNT": 4861,
                    "P_NAME": "Государственное учреждение \"Аппарат Акима  Талгарского район",
                    "pay_date": 2019
                },
                {
                    "AMOUNT": 2976,
                    "P_NAME": "Государственное учреждение \"Аппарат Акима  Талгарского район",
                    "KNP": "012",
                    "pay_date": 2019
                }
            ],
            "year": null,
            "companyBin": "941240001161",
            "amountOfEmp": null
        },
        {
            "years": [
                "2020.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "6568"
                },
                {
                    "amount": "2069",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ТОО АлматыСтройПроект",
                    "AMOUNT": 6568,
                    "pay_date": 2020
                },
                {
                    "AMOUNT": 2069,
                    "P_NAME": "ТОО АлматыСтройПроект",
                    "KNP": "012",
                    "pay_date": 2020
                }
            ],
            "year": null,
            "companyBin": "100240021921",
            "amountOfEmp": null
        }
    ],
    "mshes": [],
    "blockEsfs": [],
    "mvUlFounderFls": [],
    "ndsEntities": [],
    "ipgoEmailEntities": [],
    "accountantListEntities": [],
    "advocateListEntities": [],
    "auditorsListEntities": [],
    "bailiffListEntities": [],
    "mzEntities": [],
    "mvRnOlds": null,
    "ul_leaderList": [],
    "orphans": [],
    "tipEntity": [],
    "firstCreditBureauEntities": [],
    "person_with_risk": false
}

const iin810504300980 = {
    "mvFls": [
        {
            "iin": "810504300980",
            "gender": "1",
            "birth_date": "1981-05-04",
            "last_name": "ҚЫДЫРБЕК-ҰЛЫ",
            "first_name": "ДӘРМЕНИЯР",
            "patronymic": "АЛҒАТБЕКҰЛЫ",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "birth_region_id": "77",
            "birth_region_name": null,
            "birth_district_id": "4",
            "birth_district_name": null,
            "region": "ЕСИЛЬСКИЙ РАЙОН",
            "district": "НУР-СУЛТАН"
        }
    ],
    "photoDbf": [
        {
            "iin": "810504300980",
            "document_type_id": "1",
            "photo": "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",
            "date": "2019-01-22 08:56:03"
        },
        {
            "iin": "810504300980",
            "document_type_id": "2",
            "photo": "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",
            "date": "2019-01-23 02:21:53"
        }
    ],
    "mvAutoFls": [
        {
            "iin": "810504300980",
            "brand_model": "MERCEDES BENZ 320E",
            "date_certificate": "2003-03-06",
            "series_reg_number": "AD00034963",
            "reg_number": "A294TSM",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "WDB2100551A060401",
            "engine_volume": "",
            "weight": "1400",
            "max_weight": "1800",
            "owner_category": "2",
            "end_date": "2004-02-05",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "MERCEDES BENZ 320",
            "date_certificate": "2004-11-06",
            "series_reg_number": "AD00054516",
            "reg_number": "A050SFM",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "WDB1400321A422626",
            "engine_volume": "3200",
            "weight": "1980",
            "max_weight": "2570",
            "owner_category": "2",
            "end_date": "2005-03-17",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "MERCEDES BENZ 320",
            "date_certificate": "2005-04-02",
            "series_reg_number": "AA00102569",
            "reg_number": "A550BLN",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "4JGJAB54E9WA007271",
            "engine_volume": "3200",
            "weight": "1620",
            "max_weight": "2020",
            "owner_category": "2",
            "end_date": "2005-09-10",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "MERCEDES BENZ 320",
            "date_certificate": "2005-04-02",
            "series_reg_number": "AA00102569",
            "reg_number": "A550BLN",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "4JGJAB54E9WA007271",
            "engine_volume": "3200",
            "weight": "1620",
            "max_weight": "2020",
            "owner_category": "2",
            "end_date": "2005-09-10",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "TOYOTA HIACE",
            "date_certificate": "2008-10-07",
            "series_reg_number": "ZS00011551",
            "reg_number": "Z987NKM",
            "category_control_tc": "D",
            "vin_kuzov_shassi": "JTGJX02P280012661",
            "engine_volume": "2700",
            "weight": "1800",
            "max_weight": "2800",
            "owner_category": "2",
            "end_date": "2008-10-10",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "TOYOTA PRADO",
            "date_certificate": "2010-07-01",
            "series_reg_number": "ZE00237630",
            "reg_number": "Z693OVM",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "JTEBL29J975084139",
            "engine_volume": "2700",
            "weight": "1500",
            "max_weight": "2000",
            "owner_category": "2",
            "end_date": "2011-04-05",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "TOYOTA LAND CRUISER VX 200",
            "date_certificate": "2011-01-28",
            "series_reg_number": "ZE00258985",
            "reg_number": "Z168TFM",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "JTMHT05J105005660",
            "engine_volume": "4664",
            "weight": "2300",
            "max_weight": "3200",
            "owner_category": "2",
            "end_date": "2011-03-04",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "MERCEDES-BENZ 450 GI",
            "date_certificate": "2011-03-05",
            "series_reg_number": "AV00205483",
            "reg_number": "A336VNO",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "4JGBF71E37A244932",
            "engine_volume": "4663",
            "weight": "1800",
            "max_weight": "2200",
            "owner_category": "2",
            "end_date": "2011-08-18",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "AUDI Q7",
            "date_certificate": "2011-03-25",
            "series_reg_number": "AW00230626",
            "reg_number": "A279VVO",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "WAUAY94L27D067124",
            "engine_volume": "3597",
            "weight": "1900",
            "max_weight": "2400",
            "owner_category": "2",
            "end_date": "2013-02-01",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "MERCEDES-BENZ 450 GI",
            "date_certificate": "2011-03-05",
            "series_reg_number": "AV00205483",
            "reg_number": "A336VNO",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "4JGBF71E37A244932",
            "engine_volume": "4663",
            "weight": "1800",
            "max_weight": "2200",
            "owner_category": "2",
            "end_date": "2011-08-18",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "FORD FOCUS",
            "date_certificate": "2013-02-15",
            "series_reg_number": "ZX00064873",
            "reg_number": "038RAA02",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "WF04XXWPD46G54396",
            "engine_volume": "1600",
            "weight": "1180",
            "max_weight": "1580",
            "owner_category": "2",
            "end_date": "2013-02-15",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        },
        {
            "iin": "810504300980",
            "brand_model": "FORD FOCUS",
            "date_certificate": "2013-02-15",
            "series_reg_number": "ZX00064873",
            "reg_number": "038RAA02",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "WF04XXWPD46G54396",
            "engine_volume": "1600",
            "weight": "1180",
            "max_weight": "1580",
            "owner_category": "2",
            "end_date": "2013-02-15",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        }
    ],
    "omns": [
        null
    ],
    "orphanss": [],
    "equipment": [],
    "dormants": [],
    "adms": [],
    "fl_relatives": [
        {
            "id": 145019768,
            "iin": "810504300980",
            "fio": "ҚЫДЫРБЕК-ҰЛЫ ДӘРМЕНИЯР АЛҒАТБЕКҰЛЫ",
            "birth_date": "1981/05/04:12:00:00 AM",
            "parent_iin": "200715600533",
            "parent_fio": "ҚЫДЫРБЕК САФИНҰР ДӘРМЕНИЯРҚЫЗЫ",
            "parent_birth_date": "2020/07/15:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 146762412,
            "iin": "810504300980",
            "fio": "ҚЫДЫРБЕК-ҰЛЫ ДӘРМЕНИЯР АЛҒАТБЕКҰЛЫ",
            "birth_date": "1981/05/04:12:00:00 AM",
            "parent_iin": "180504605590",
            "parent_fio": "ҚЫДЫРБЕК ФИРДАУСА ДӘРМЕНИЯРҚЫЗЫ",
            "parent_birth_date": "2018/05/04:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 158985888,
            "iin": "810504300980",
            "fio": "ҚЫДЫРБЕК -ҰЛЫ ДӘРМЕНИЯР АЛҒАТБЕКҰЛЫ",
            "birth_date": "1981/05/04:12:00:00 AM",
            "parent_iin": "891221450030",
            "parent_fio": "КЫДЫРБЕК ДАРИГА ДАБЫРКУЛОВНА",
            "parent_birth_date": "1989/12/21:12:00:00 AM",
            "relative_type": "Супруг",
            "marriage_reg_date": "2016-09-01",
            "marriage_divorce_date": null
        }
    ],
    "regAddressFls": [
        {
            "id": null,
            "fl_id": null,
            "iin": "810504300980",
            "registration_type": "Зарегистрирован",
            "country": "КАЗАХСТАН",
            "region": "ЕСИЛЬСКИЙ РАЙОН",
            "district": "НУР-СУЛТАН",
            "city": "ҚАЛА IШIНДЕГI АУДАНЫ Есиль",
            "street": "УЛИЦА Сығанақ",
            "building": "3",
            "korpus": null,
            "apartment_number": "47",
            "reg_date": "2020/01/13:12:00:00 AM",
            "reg_end_date": null,
            "reg_reason": "Зарегистрирован",
            "is_active": null
        }
    ],
    "criminals": [],
    "pdls": [
        {
            "id": "201",
            "bin": "080840019073",
            "iin": "810504300980",
            "organization_fullname": "государственное учреждение аппарат акима района есиль города нур-султан",
            "fio": "Қыдырбек-ұлы Д.А.",
            "organ": "аппарат акима района есиль города нур-султан",
            "oblast": "город Нур-Султан",
            "position": "Заместитель акима района",
            "spouse_fio": null,
            "spouse_organ": null,
            "spouse_position": null,
            "spouse_iin": "891221450030"
        }
    ],
    "wantedListEntities": [],
    "commodityProducers": [],
    "mvIinDocs": [
        {
            "id": "e40a5a27-708e-4b7f-8065-7bbce1e8618a",
            "gender": "1",
            "birth_date": "1981-05-04",
            "iin": "810504300980",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "doc_number": "019563678",
            "doc_type_id": "2",
            "doc_type_ru_name": "УДОСТОВЕРЕНИЕ РК",
            "issue_date": "2006-07-31",
            "expiry_date": "2026-05-03",
            "document_invalidity_id": "0",
            "document_invalidity_ru_name": "ДОКУМЕНТ ДЕЙСТВИТЕЛЕН",
            "document_invalidity_date": null,
            "issue_organization_id": "1",
            "issue_organization_ru_name": "МИНИСТЕРСТВО ЮСТИЦИИ РК"
        },
        {
            "id": "92f52f33-6878-444c-97c9-6f00fbc96c31",
            "gender": "1",
            "birth_date": "1981-05-04",
            "iin": "810504300980",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "doc_number": "N10774437",
            "doc_type_id": "1",
            "doc_type_ru_name": "ПАСПОРТ РК",
            "issue_date": "2016-06-21",
            "expiry_date": "2026-06-20",
            "document_invalidity_id": "0",
            "document_invalidity_ru_name": "ДОКУМЕНТ ДЕЙСТВИТЕЛЕН",
            "document_invalidity_date": null,
            "issue_organization_id": "2",
            "issue_organization_ru_name": "МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РК"
        }
    ],
    "universities": [
        {
            "id": 2713712,
            "lastname": "ҚЫДЫРБЕК-ҰЛЫ",
            "name": "ДӘРМЕНИЯР",
            "patronymic": "АЛҒАТБЕКҰЛЫ",
            "iin": "810504300980",
            "start_date": "2002-08-29",
            "five": null,
            "spec_name_2": null,
            "course": "2 курс",
            "duration": "2",
            "spec_name": "нет",
            "study_name": "НАО \"КазНУ имени Аль-Фараби\"",
            "study_type": "национальная организация высшего и (или) послевузовского образования",
            "study_code": "990140001154",
            "end_date": "2004-07-08",
            "fourteen": null,
            "fiveteen": "не трудоустроен",
            "sixteen": "2"
        }
    ],
    "schools": [],
    "contacts": [],
    "millitaryAccounts": [],
    "militaryAccounting2Entities": [],
    "convictsTerminatedByRehabs": [],
    "convictsJustifieds": [],
    "bankrots": [],
    "flPensionContrs": [
        {
            "years": [
                "2009.0",
                "2010.0",
                "2011.0",
                "2012.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "67000"
                },
                {
                    "amount": "27720",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "KNP": "010",
                    "AMOUNT": 10000,
                    "pay_date": 2009
                },
                {
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "AMOUNT": 3600,
                    "KNP": "012",
                    "pay_date": 2009
                },
                {
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "KNP": "010",
                    "AMOUNT": 25000,
                    "pay_date": 2010
                },
                {
                    "AMOUNT": 10620,
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "KNP": "012",
                    "pay_date": 2010
                },
                {
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "KNP": "010",
                    "AMOUNT": 18000,
                    "pay_date": 2011
                },
                {
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "AMOUNT": 7200,
                    "KNP": "012",
                    "pay_date": 2011
                },
                {
                    "P_NAME": "Абдраимова Фарида Кенесбековна",
                    "KNP": "010",
                    "AMOUNT": 2000,
                    "pay_date": 2012
                },
                {
                    "AMOUNT": 12000,
                    "KNP": "010",
                    "P_NAME": "АБДРАИМОВА ФАРИДА КЕНЕСБЕКОВНА",
                    "pay_date": 2012
                },
                {
                    "P_NAME": "АБДРАИМОВА ФАРИДА КЕНЕСБЕКОВНА",
                    "KNP": "012",
                    "AMOUNT": 6300,
                    "pay_date": 2012
                }
            ],
            "year": null,
            "companyBin": "620220463637",
            "amountOfEmp": null
        },
        {
            "years": [
                "2019.0",
                "2020.0",
                "2021.0",
                "2022.0",
                "2023.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "2855417"
                },
                {
                    "amount": "343562",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "AMOUNT": 196683,
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "pay_date": 2019
                },
                {
                    "AMOUNT": 16855,
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "KNP": "012",
                    "pay_date": 2019
                },
                {
                    "KNP": "010",
                    "AMOUNT": 921149,
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "pay_date": 2020
                },
                {
                    "AMOUNT": 120224,
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "KNP": "012",
                    "pay_date": 2020
                },
                {
                    "AMOUNT": 1041637,
                    "KNP": "010",
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "pay_date": 2021
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "KNP": "012",
                    "pay_date": 2021,
                    "AMOUNT": 114532
                },
                {
                    "KNP": "010",
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "AMOUNT": 288766,
                    "pay_date": 2022
                },
                {
                    "AMOUNT": 41406,
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "KNP": "012",
                    "pay_date": 2022
                },
                {
                    "KNP": "010",
                    "AMOUNT": null,
                    "P_NAME": null,
                    "pay_date": 2022
                },
                {
                    "KNP": "010",
                    "AMOUNT": 407182,
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "pay_date": 2023
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат акима района \"Есиль\" гор",
                    "KNP": "012",
                    "AMOUNT": 50545,
                    "pay_date": 2023
                }
            ],
            "year": null,
            "companyBin": "080840019073",
            "amountOfEmp": null
        },
        {
            "years": [
                "2010.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "21000"
                },
                {
                    "KNP": "012",
                    "amount": "9450"
                }
            ],
            "flPensionMinis": [
                {
                    "AMOUNT": 21000,
                    "P_NAME": "ИП Шаяхмет Ж. А.",
                    "KNP": "010",
                    "pay_date": 2010
                },
                {
                    "P_NAME": "ИП Шаяхмет Ж. А.",
                    "AMOUNT": 9450,
                    "KNP": "012",
                    "pay_date": 2010
                }
            ],
            "year": null,
            "companyBin": "090320200439",
            "amountOfEmp": null
        },
        {
            "years": [
                "2013.0",
                "2014.0",
                "2015.0",
                "2016.0",
                "2017.0",
                "2018.0",
                "2019.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "1868294"
                },
                {
                    "KNP": "012",
                    "amount": "738616"
                }
            ],
            "flPensionMinis": [
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "AMOUNT": 267900,
                    "pay_date": 2013
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "AMOUNT": 115802,
                    "KNP": "012",
                    "pay_date": 2013
                },
                {
                    "KNP": "010",
                    "P_NAME": "Талєар ауданы јкімініѕ аппараты ММ",
                    "AMOUNT": 32718,
                    "pay_date": 2013
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "AMOUNT": 403526,
                    "pay_date": 2014
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "AMOUNT": 188294,
                    "KNP": "012",
                    "pay_date": 2014
                },
                {
                    "AMOUNT": 179100,
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "pay_date": 2015
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "AMOUNT": 80592,
                    "KNP": "012",
                    "pay_date": 2015
                },
                {
                    "AMOUNT": 231605,
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "pay_date": 2016
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "AMOUNT": 96721,
                    "KNP": "012",
                    "pay_date": 2016
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "AMOUNT": 253548,
                    "pay_date": 2017
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "012",
                    "pay_date": 2017,
                    "AMOUNT": 108396
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "AMOUNT": 286808,
                    "pay_date": 2018
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "AMOUNT": 81687,
                    "KNP": "012",
                    "pay_date": 2018
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "KNP": "010",
                    "AMOUNT": 213089,
                    "pay_date": 2019
                },
                {
                    "P_NAME": "Государственное учреждение \"Аппарат Акима Талгарского района",
                    "AMOUNT": 67124,
                    "KNP": "012",
                    "pay_date": 2019
                }
            ],
            "year": null,
            "companyBin": "941240001161",
            "amountOfEmp": null
        },
        {
            "years": [
                "2011.0",
                "2012.0"
            ],
            "nakoplenya": [
                {
                    "amount": "47997",
                    "KNP": "010"
                },
                {
                    "KNP": "012",
                    "amount": "21999.75"
                }
            ],
            "flPensionMinis": [
                {
                    "P_NAME": "ТОО \"Жана-Жол\"",
                    "KNP": "010",
                    "AMOUNT": 4797,
                    "pay_date": 2011
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол\"",
                    "AMOUNT": 2399.8500000000004,
                    "KNP": "012",
                    "pay_date": 2011
                },
                {
                    "KNP": "010",
                    "AMOUNT": 36000,
                    "P_NAME": "ТОО \"Жана- Жол А\"",
                    "pay_date": 2011
                },
                {
                    "AMOUNT": 16200,
                    "P_NAME": "ТОО \"Жана- Жол А\"",
                    "KNP": "012",
                    "pay_date": 2011
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол А",
                    "KNP": "010",
                    "AMOUNT": 3200,
                    "pay_date": 2011
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол А",
                    "AMOUNT": 1599.9,
                    "KNP": "012",
                    "pay_date": 2011
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол\"",
                    "KNP": "010",
                    "AMOUNT": 2000,
                    "pay_date": 2012
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол\"",
                    "AMOUNT": 900,
                    "KNP": "012",
                    "pay_date": 2012
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол А\"",
                    "KNP": "010",
                    "AMOUNT": 2000,
                    "pay_date": 2012
                },
                {
                    "P_NAME": "ТОО \"Жана-Жол А\"",
                    "AMOUNT": 900,
                    "KNP": "012",
                    "pay_date": 2012
                }
            ],
            "year": null,
            "companyBin": "030700210974",
            "amountOfEmp": null
        },
        {
            "years": [
                "2013.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "170000"
                },
                {
                    "amount": "36380",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "AMOUNT": 170000,
                    "KNP": "010",
                    "P_NAME": "НК СП Корпорация Жетысу АО",
                    "pay_date": 2013
                },
                {
                    "AMOUNT": 36380,
                    "P_NAME": "НК СП Корпорация Жетысу АО",
                    "KNP": "012",
                    "pay_date": 2013
                }
            ],
            "year": null,
            "companyBin": "070640009334",
            "amountOfEmp": null
        },
        {
            "years": [
                "2012.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "154545"
                },
                {
                    "amount": "28205",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "НК СП Корпорация Жетысу АО",
                    "pay_date": 2012,
                    "AMOUNT": 154545
                },
                {
                    "P_NAME": "НК СП Корпорация Жетысу АО",
                    "KNP": "012",
                    "pay_date": 2012,
                    "AMOUNT": 28205
                }
            ],
            "year": null,
            "companyBin": "092200224450",
            "amountOfEmp": null
        },
        {
            "years": [
                "2021.0",
                "2022.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "8500"
                },
                {
                    "amount": "9854",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "AMOUNT": 4250,
                    "P_NAME": "АО Казахский Университет Технологии и Бизнеса",
                    "pay_date": 2021
                },
                {
                    "AMOUNT": 4166,
                    "P_NAME": "АО Казахский Университет Технологии и Бизнеса",
                    "KNP": "012",
                    "pay_date": 2021
                },
                {
                    "KNP": "010",
                    "AMOUNT": 4250,
                    "P_NAME": "АО Казахский Университет Технологии и Бизнеса",
                    "pay_date": 2022
                },
                {
                    "AMOUNT": 5688,
                    "P_NAME": "АО Казахский Университет Технологии и Бизнеса",
                    "KNP": "012",
                    "pay_date": 2022
                },
                {
                    "KNP": "010",
                    "AMOUNT": null,
                    "P_NAME": null,
                    "pay_date": 2022
                }
            ],
            "year": null,
            "companyBin": "030240001575",
            "amountOfEmp": null
        }
    ],
    "mshes": [],
    "blockEsfs": [],
    "mvUlFounderFls": [
        {
            "id": "197d3c11-0e53-4258-94a8-06863aaabc0b",
            "reg_date": "2009-08-05",
            "bin_org": "060440009484",
            "iin": "810504300980",
            "lastname": "ҚЫДЫРБЕК-ҰЛЫ",
            "firstname": "ДӘРМЕНИЯР",
            "patronymic": "АЛҒАТБЕКҰЛЫ",
            "deposit": "0",
            "share": "0",
            "is_curr": true
        },
        {
            "id": "02180dff-efff-47b5-9b6d-f7624c42238d",
            "reg_date": "2011-06-07",
            "bin_org": "090140003033",
            "iin": "810504300980",
            "lastname": "ҚЫДЫРБЕК-ҰЛЫ",
            "firstname": "ДӘРМЕНИЯР",
            "patronymic": "АЛҒАТБЕКҰЛЫ",
            "deposit": "120000",
            "share": "100",
            "is_curr": false
        },
        {
            "id": "2c1bf78b-8ceb-445a-91fe-e1d2832aad7f",
            "reg_date": "2011-01-20",
            "bin_org": "110140011576",
            "iin": "810504300980",
            "lastname": "ҚЫДЫРБЕК-ҰЛЫ",
            "firstname": "ДӘРМЕНИЯР",
            "patronymic": "АЛҒАТБЕКҰЛЫ",
            "deposit": "12000",
            "share": "60",
            "is_curr": false
        }
    ],
    "ndsEntities": [],
    "ipgoEmailEntities": [],
    "accountantListEntities": [],
    "advocateListEntities": [],
    "auditorsListEntities": [],
    "bailiffListEntities": [],
    "mzEntities": [],
    "mvRnOlds": null,
    "ul_leaderList": [
        {
            "id": "e3971099-4ef0-45fb-badd-baf0d19557a9",
            "bin_org": "090140003033",
            "reg_date": "2011-06-06T18:00:00.000+00:00",
            "iin": "810504300980",
            "last_name": "ҚЫДЫРБЕК-ҰЛЫ",
            "first_name": "ДӘРМЕНИЯР",
            "patronymic": "АЛҒАТБЕКҰЛЫ",
            "position_id": null,
            "appointment_date": null,
            "removal_date": null,
            "is_curr": false,
            "ul_status": "Зарегистрировано"
        }
    ],
    "orphans": [],
    "tipEntity": [],
    "firstCreditBureauEntities": [],
    "person_with_risk": false
}
const iin200715600533 = {
    "mvFls": [
        {
            "iin": "200715600533",
            "gender": "2",
            "birth_date": "2020-07-15",
            "last_name": "ҚЫДЫРБЕК",
            "first_name": "САФИНҰР",
            "patronymic": "ДӘРМЕНИЯРҚЫЗЫ",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "birth_region_id": "409",
            "birth_region_name": null,
            "birth_district_id": "22",
            "birth_district_name": null,
            "region": null,
            "district": null
        }
    ],
    "photoDbf": [
        {
            "iin": "200715600533",
            "document_type_id": "1",
            "photo": "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",
            "date": "2021-07-13 09:34:24"
        }
    ],
    "mvAutoFls": [],
    "omns": [
        null
    ],
    "orphanss": [],
    "equipment": [],
    "dormants": [],
    "adms": [],
    "fl_relatives": [
        {
            "id": 54580551,
            "iin": "200715600533",
            "fio": "ҚЫДЫРБЕК САФИНҰР ДӘРМЕНИЯРҚЫЗЫ",
            "birth_date": "2020/07/15:12:00:00 AM",
            "parent_iin": "810504300980",
            "parent_fio": "ҚЫДЫРБЕК-ҰЛЫ ДӘРМЕНИЯР АЛҒАТБЕКҰЛЫ",
            "parent_birth_date": "1981/05/04:12:00:00 AM",
            "relative_type": "Ребенок",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 59119063,
            "iin": "200715600533",
            "fio": "ҚЫДЫРБЕК САФИНҰР ДӘРМЕНИЯРҚЫЗЫ",
            "birth_date": "2020/07/15:12:00:00 AM",
            "parent_iin": "891221450030",
            "parent_fio": "КЫДЫРБЕК ДАРИГА ДАБЫРКУЛОВНА",
            "parent_birth_date": "1989/12/21:12:00:00 AM",
            "relative_type": "Ребенок",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        }
    ],
    "regAddressFls": [
        {
            "id": null,
            "fl_id": null,
            "iin": "200715600533",
            "registration_type": "Зарегистрирован",
            "country": null,
            "region": null,
            "district": null,
            "city": "-",
            "street": null,
            "building": null,
            "korpus": null,
            "apartment_number": null,
            "reg_date": null,
            "reg_end_date": null,
            "reg_reason": "Зарегистрирован",
            "is_active": null
        }
    ],
    "criminals": [],
    "pdls": [],
    "wantedListEntities": [],
    "commodityProducers": [],
    "mvIinDocs": [
        {
            "id": "6100832d-46d6-4bd2-ad5e-92b0edfb37f2",
            "gender": "2",
            "birth_date": "2020-07-15",
            "iin": "200715600533",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "doc_number": "N13575661",
            "doc_type_id": "1",
            "doc_type_ru_name": "ПАСПОРТ РК",
            "issue_date": "2021-07-12",
            "expiry_date": "2031-07-11",
            "document_invalidity_id": "0",
            "document_invalidity_ru_name": "ДОКУМЕНТ ДЕЙСТВИТЕЛЕН",
            "document_invalidity_date": null,
            "issue_organization_id": "2",
            "issue_organization_ru_name": "МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РК"
        }
    ],
    "universities": [],
    "schools": [],
    "contacts": [],
    "millitaryAccounts": [],
    "militaryAccounting2Entities": [],
    "convictsTerminatedByRehabs": [],
    "convictsJustifieds": [],
    "bankrots": [],
    "flPensionContrs": [],
    "mshes": [],
    "blockEsfs": [],
    "mvUlFounderFls": [],
    "ndsEntities": [],
    "ipgoEmailEntities": [],
    "accountantListEntities": [],
    "advocateListEntities": [],
    "auditorsListEntities": [],
    "bailiffListEntities": [],
    "mzEntities": [],
    "mvRnOlds": null,
    "ul_leaderList": [],
    "orphans": [],
    "tipEntity": [],
    "firstCreditBureauEntities": [],
    "person_with_risk": false
}
const iin831005300954 = {
    "mvFls": [
        {
            "iin": "831005300954",
            "gender": "1",
            "birth_date": "1983-10-05",
            "last_name": "НАЛИБАЕВ",
            "first_name": "САУЛЕТ",
            "patronymic": "АДИЛХАНОВИЧ",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "birth_region_id": "196",
            "birth_region_name": null,
            "birth_district_id": "11",
            "birth_district_name": null,
            "region": "ТАЛГАРСКИЙ РАЙОН",
            "district": "АЛМАТИНСКАЯ"
        }
    ],
    "photoDbf": [
        {
            "iin": "831005300954",
            "document_type_id": "2",
            "photo": "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",
            "date": "2019-01-23 05:04:49"
        }
    ],
    "mvAutoFls": [
        {
            "iin": "831005300954",
            "brand_model": "VOLKSWAGEN GOLF",
            "date_certificate": "2011-01-13",
            "series_reg_number": "AG00047646",
            "reg_number": "B189RHN",
            "category_control_tc": "B",
            "vin_kuzov_shassi": "WVWZZZ1HZNW060273",
            "engine_volume": "1781",
            "weight": "0",
            "max_weight": "1550",
            "owner_category": "2",
            "end_date": "2011-03-01",
            "color": "",
            "release_year_tc": "",
            "is_registered": false,
            "special_marks": ""
        }
    ],
    "omns": [
        null
    ],
    "orphanss": [],
    "equipment": [],
    "dormants": [],
    "adms": [],
    "fl_relatives": [
        {
            "id": 72261409,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": null,
            "parent_fio": "НАЛИБАЕВ АДИЛХАН ",
            "parent_birth_date": "1956/10/18:12:00:00 AM",
            "relative_type": "Ребенок",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 81064347,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": null,
            "parent_fio": "БЕКЖАНОВА МЕИРАМКУЛ ",
            "parent_birth_date": "1954/05/16:12:00:00 AM",
            "relative_type": "Ребенок",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 140889271,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": "100802551325",
            "parent_fio": "ӘДІЛХАН АЙБЕК СӘУЛЕТҰЛЫ",
            "parent_birth_date": "2010/08/02:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 141361626,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": "130904603592",
            "parent_fio": "ӘДІЛХАН АЙЫМ СӘУЛЕТҚЫЗЫ",
            "parent_birth_date": "2013/09/04:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 145711454,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": "190908500968",
            "parent_fio": "ӘДІЛХАН ҚУАНЫШ СӘУЛЕТҰЛЫ",
            "parent_birth_date": "2019/09/08:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 146706605,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": "120406504324",
            "parent_fio": "ӘДІЛХАН КЕРІМ СӘУЛЕТҰЛЫ",
            "parent_birth_date": "2012/04/06:12:00:00 AM",
            "relative_type": "Родитель",
            "marriage_reg_date": null,
            "marriage_divorce_date": null
        },
        {
            "id": 157546777,
            "iin": "831005300954",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "birth_date": "1983/10/05:12:00:00 AM",
            "parent_iin": "891114402574",
            "parent_fio": "АБЕНОВА СЫМБАТ САНСЫЗБАЕВНА",
            "parent_birth_date": "1989/11/14:12:00:00 AM",
            "relative_type": "Супруг",
            "marriage_reg_date": "2010-03-19",
            "marriage_divorce_date": null
        }
    ],
    "regAddressFls": [
        {
            "id": null,
            "fl_id": null,
            "iin": "831005300954",
            "registration_type": "Зарегистрирован",
            "country": "КАЗАХСТАН",
            "region": "ТАЛГАРСКИЙ РАЙОН",
            "district": "АЛМАТИНСКАЯ",
            "city": "АУЫЛДЫҚ ОКРУГІ Алатауский, АУЫЛЫ Амангельды",
            "street": "УЛИЦА Орталық",
            "building": "22",
            "korpus": null,
            "apartment_number": null,
            "reg_date": "2012/05/10:12:00:00 AM",
            "reg_end_date": null,
            "reg_reason": "Зарегистрирован",
            "is_active": null
        }
    ],
    "criminals": [
        {
            "court_name": "суд Талгарского района Алматинской области",
            "court_dt": "2020-03-13",
            "iin_bin": "831005300954",
            "decision": "осужден с назначением уголовного наказания, подлежащего отбыванию осужденным",
            "crime_name": "Нарушение правил охраны труда",
            "crime_code": "1560003",
            "sentence": "ограничение свободы",
            "add_info": null,
            "treatment": null,
            "erdr": "181962031004853",
            "update_dt": "2020-03-29T18:00:00.000+00:00",
            "id": 241738
        }
    ],
    "pdls": [],
    "wantedListEntities": [],
    "commodityProducers": [],
    "mvIinDocs": [
        {
            "id": "356c801b-fbae-474f-bd44-6b595b0553df",
            "gender": "1",
            "birth_date": "1983-10-05",
            "iin": "831005300954",
            "citizenship_id": "105",
            "citizenship_ru_name": "КАЗАХСТАН",
            "nationality_id": "135",
            "nationality_ru_name": "КАЗАХ",
            "is_resident": true,
            "life_status_id": "1",
            "life_status_ru_name": "Нормальный",
            "death_date": null,
            "doc_number": "023729840",
            "doc_type_id": "2",
            "doc_type_ru_name": "УДОСТОВЕРЕНИЕ РК",
            "issue_date": "2009-04-17",
            "expiry_date": "2028-10-04",
            "document_invalidity_id": "0",
            "document_invalidity_ru_name": "ДОКУМЕНТ ДЕЙСТВИТЕЛЕН",
            "document_invalidity_date": null,
            "issue_organization_id": "1",
            "issue_organization_ru_name": "МИНИСТЕРСТВО ЮСТИЦИИ РК"
        }
    ],
    "universities": [],
    "schools": [],
    "contacts": [
        {
            "iin": "831005300954",
            "phone": "7077836368",
            "fio": "НАЛИБАЕВ САУЛЕТ АДИЛХАНОВИЧ",
            "email": "sauletnalibaev@gmail.com",
            "nickname": null,
            "source": "olimp",
            "leader_fio": null,
            "id": 5772728
        }
    ],
    "millitaryAccounts": [],
    "militaryAccounting2Entities": [],
    "convictsTerminatedByRehabs": [],
    "convictsJustifieds": [
        {
            "iin": "831005300954",
            "last_name": "НАЛИБАЕВ",
            "first_name": "САУЛЕТ",
            "patronomyc": "АДИЛХАНОВИЧ",
            "birth_date": "1983-10-05",
            "reg_date": "2020-03-30",
            "qualification": "Нарушение правил охраны труда",
            "severity_code_crime": "1",
            "qualification_code": "1560003",
            "measure_punishment": null,
            "code_desicion_by_person": "7075",
            "decision_on_person": "осужден с назначением уголовного наказания, подлежащего отбыванию осужденным",
            "court_of_first_instance": "суд Талгарского района Алматинской области",
            "erdr_number": "181962031004853",
            "consider_date_first_instance": null,
            "code_started_investiogation": null,
            "investigative_authority": null,
            "is_iin_upd": true,
            "is_rab": false,
            "id": 144654
        }
    ],
    "bankrots": [],
    "flPensionContrs": [
        {
            "years": [
                "2015.0",
                "2016.0",
                "2017.0",
                "2018.0",
                "2019.0"
            ],
            "nakoplenya": [
                {
                    "amount": "477454",
                    "KNP": "010"
                },
                {
                    "amount": "190495",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"KERUEN PLUS\"",
                    "AMOUNT": 29200,
                    "pay_date": 2015
                },
                {
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"KERUEN PLUS\"",
                    "AMOUNT": 13140,
                    "KNP": "012",
                    "pay_date": 2015
                },
                {
                    "KNP": "010",
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "pay_date": 2015,
                    "AMOUNT": 28616
                },
                {
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "AMOUNT": 13242,
                    "KNP": "012",
                    "pay_date": 2015
                },
                {
                    "KNP": "010",
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "AMOUNT": 116130,
                    "pay_date": 2016
                },
                {
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "AMOUNT": 52257,
                    "KNP": "012",
                    "pay_date": 2016
                },
                {
                    "KNP": "010",
                    "AMOUNT": 120564,
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "pay_date": 2017
                },
                {
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "AMOUNT": 52918,
                    "KNP": "012",
                    "pay_date": 2017
                },
                {
                    "KNP": "010",
                    "AMOUNT": 137278,
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "pay_date": 2018
                },
                {
                    "AMOUNT": 44552,
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "KNP": "012",
                    "pay_date": 2018
                },
                {
                    "KNP": "010",
                    "AMOUNT": 45666,
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "pay_date": 2019
                },
                {
                    "P_NAME": "ТОО \"Keruen plus\"",
                    "AMOUNT": 14386,
                    "KNP": "012",
                    "pay_date": 2019
                }
            ],
            "year": null,
            "companyBin": "140440023893",
            "amountOfEmp": null
        },
        {
            "years": [
                "2019.0"
            ],
            "nakoplenya": [
                {
                    "amount": "32400",
                    "KNP": "010"
                },
                {
                    "amount": "10938",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "AMOUNT": 32400,
                    "pay_date": 2019,
                    "P_NAME": "ТОО Маслодел -Трейд"
                },
                {
                    "AMOUNT": 10938,
                    "KNP": "012",
                    "pay_date": 2019,
                    "P_NAME": "ТОО Маслодел -Трейд"
                }
            ],
            "year": null,
            "companyBin": "071140016827",
            "amountOfEmp": null
        },
        {
            "years": [
                "2008.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "31352"
                },
                {
                    "amount": "8060",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "P_NAME": "АФ ТОО \"ИНТЕРСТРОЙСЕРВИС И К \"",
                    "KNP": "010",
                    "AMOUNT": 31352,
                    "pay_date": 2008
                },
                {
                    "P_NAME": "АФ ТОО \"ИНТЕРСТРОЙСЕРВИС И К \"",
                    "AMOUNT": 8060,
                    "KNP": "012",
                    "pay_date": 2008
                }
            ],
            "year": null,
            "companyBin": "600400562002",
            "amountOfEmp": null
        },
        {
            "years": [
                "2019.0",
                "2020.0"
            ],
            "nakoplenya": [
                {
                    "amount": "42727.270000000004",
                    "KNP": "010"
                },
                {
                    "amount": "13460",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "AMOUNT": 6000,
                    "KNP": "010",
                    "P_NAME": "ТОО \"Масло-Дел\"",
                    "pay_date": 2019
                },
                {
                    "AMOUNT": 1890,
                    "P_NAME": "ТОО \"Масло-Дел\"",
                    "KNP": "012",
                    "pay_date": 2019
                },
                {
                    "KNP": "010",
                    "AMOUNT": 30400,
                    "P_NAME": "ТОО \"Масло-Дел\"",
                    "pay_date": 2020
                },
                {
                    "AMOUNT": 9576,
                    "P_NAME": "ТОО \"Масло-Дел\"",
                    "KNP": "012",
                    "pay_date": 2020
                },
                {
                    "KNP": "010",
                    "P_NAME": "ТОО Масло-Дел",
                    "AMOUNT": 6327.27,
                    "pay_date": 2020
                },
                {
                    "P_NAME": "ТОО Масло-Дел",
                    "AMOUNT": 1994,
                    "KNP": "012",
                    "pay_date": 2020
                }
            ],
            "year": null,
            "companyBin": "990240000368",
            "amountOfEmp": null
        },
        {
            "years": [
                "2007.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "21042.769999999997"
                },
                {
                    "amount": "5681.55",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ГЕЛИОС ТОО",
                    "AMOUNT": 9115.31,
                    "pay_date": 2007
                },
                {
                    "P_NAME": "ГЕЛИОС ТОО",
                    "KNP": "012",
                    "pay_date": 2007,
                    "AMOUNT": 5681.55
                },
                {
                    "KNP": "010",
                    "AMOUNT": 11927.460000000001,
                    "pay_date": 2007,
                    "P_NAME": "ГЕЛИОС ТОО РНН 600900149899"
                }
            ],
            "year": null,
            "companyBin": "600900149899",
            "amountOfEmp": null
        },
        {
            "years": [
                "2011.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "33361.19"
                },
                {
                    "amount": "15012.54",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "AMOUNT": 33361.19,
                    "KNP": "010",
                    "P_NAME": "ТОО \"GLOBAL OIL LTD\"",
                    "pay_date": 2011
                },
                {
                    "AMOUNT": 15012.54,
                    "P_NAME": "ТОО \"GLOBAL OIL LTD\"",
                    "KNP": "012",
                    "pay_date": 2011
                }
            ],
            "year": null,
            "companyBin": "600400554430",
            "amountOfEmp": null
        },
        {
            "years": [
                "2014.0",
                "2015.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "124494.44999999997"
                },
                {
                    "KNP": "012",
                    "amount": "56022.5"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ГАЛАКСИ (GALAK",
                    "AMOUNT": 80938.91999999998,
                    "pay_date": 2014
                },
                {
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ГАЛАКСИ (GALAK",
                    "AMOUNT": 36412.62,
                    "KNP": "012",
                    "pay_date": 2014
                },
                {
                    "KNP": "010",
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ГАЛАКСИ (GALAK",
                    "pay_date": 2015,
                    "AMOUNT": 43555.53
                },
                {
                    "AMOUNT": 19609.88,
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ГАЛАКСИ (GALAK",
                    "KNP": "012",
                    "pay_date": 2015
                }
            ],
            "year": null,
            "companyBin": "940140000296",
            "amountOfEmp": null
        },
        {
            "years": [
                "2011.0",
                "2012.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "91593.03"
                },
                {
                    "amount": "41216.87",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "AMOUNT": 1681.03,
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "pay_date": 2011
                },
                {
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "AMOUNT": 756.47,
                    "KNP": "012",
                    "pay_date": 2011
                },
                {
                    "AMOUNT": 89912,
                    "KNP": "010",
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "pay_date": 2012
                },
                {
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "AMOUNT": 40460.4,
                    "KNP": "012",
                    "pay_date": 2012
                }
            ],
            "year": null,
            "companyBin": "600400580517",
            "amountOfEmp": null
        },
        {
            "years": [
                "2019.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "12000"
                },
                {
                    "amount": "3780",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "AMOUNT": 12000,
                    "KNP": "010",
                    "pay_date": 2019,
                    "P_NAME": "ТОО \"ASIANA PRODUCTION\""
                },
                {
                    "AMOUNT": 3780,
                    "KNP": "012",
                    "pay_date": 2019,
                    "P_NAME": "ТОО \"ASIANA PRODUCTION\""
                }
            ],
            "year": null,
            "companyBin": "170940032231",
            "amountOfEmp": null
        },
        {
            "years": [
                "2013.0",
                "2014.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "330135.68000000005"
                },
                {
                    "amount": "148561.05000000002",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "AMOUNT": 190335.39999999997,
                    "pay_date": 2013
                },
                {
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "AMOUNT": 85650.88999999998,
                    "KNP": "012",
                    "pay_date": 2013
                },
                {
                    "AMOUNT": 139800.27999999997,
                    "KNP": "010",
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "pay_date": 2014
                },
                {
                    "P_NAME": "ГАЗПРОМ НЕФТЬ-КАЗАХСТАН ТОО",
                    "AMOUNT": 62910.16,
                    "KNP": "012",
                    "pay_date": 2014
                }
            ],
            "year": null,
            "companyBin": "070540009192",
            "amountOfEmp": null
        },
        {
            "years": [
                "2020.0",
                "2021.0",
                "2022.0",
                "2023.0"
            ],
            "nakoplenya": [
                {
                    "KNP": "010",
                    "amount": "298157"
                },
                {
                    "amount": "87627",
                    "KNP": "012"
                }
            ],
            "flPensionMinis": [
                {
                    "KNP": "010",
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬ \"ЗАВОД КАЗАХСКОЙ",
                    "AMOUNT": 53036,
                    "pay_date": 2020
                },
                {
                    "AMOUNT": 16777,
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬ \"ЗАВОД КАЗАХСКОЙ",
                    "KNP": "012",
                    "pay_date": 2020
                },
                {
                    "KNP": "010",
                    "AMOUNT": 34147,
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬ \"ЗАВОД КАЗАХСКОЙ",
                    "pay_date": 2021
                },
                {
                    "AMOUNT": 10757,
                    "P_NAME": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬ \"ЗАВОД КАЗАХСКОЙ",
                    "KNP": "012",
                    "pay_date": 2021
                },
                {
                    "KNP": "010",
                    "P_NAME": "ТОО \"Завод Казахской академии питания \"Амиран\"",
                    "pay_date": 2021,
                    "AMOUNT": 111543
                },
                {
                    "P_NAME": "ТОО \"Завод Казахской академии питания \"Амиран\"",
                    "AMOUNT": 28770,
                    "KNP": "012",
                    "pay_date": 2021
                },
                {
                    "KNP": "010",
                    "P_NAME": "ТОО \"Завод Казахской академии питания \"Амиран\"",
                    "pay_date": 2022,
                    "AMOUNT": 54443
                },
                {
                    "AMOUNT": 17151,
                    "P_NAME": "ТОО \"Завод Казахской академии питания \"Амиран\"",
                    "KNP": "012",
                    "pay_date": 2022
                },
                {
                    "KNP": "010",
                    "AMOUNT": null,
                    "P_NAME": null,
                    "pay_date": 2022
                },
                {
                    "AMOUNT": 44988,
                    "KNP": "010",
                    "P_NAME": "ТОО \"Завод Казахской академии питания \"Амиран\"",
                    "pay_date": 2023
                },
                {
                    "P_NAME": "ТОО \"Завод Казахской академии питания \"Амиран\"",
                    "KNP": "012",
                    "pay_date": 2023,
                    "AMOUNT": 14172
                }
            ],
            "year": null,
            "companyBin": "080740016719",
            "amountOfEmp": null
        }
    ],
    "mshes": [],
    "blockEsfs": [],
    "mvUlFounderFls": [],
    "ndsEntities": [],
    "ipgoEmailEntities": [],
    "accountantListEntities": [],
    "advocateListEntities": [],
    "auditorsListEntities": [],
    "bailiffListEntities": [],
    "mzEntities": [],
    "mvRnOlds": null,
    "ul_leaderList": [],
    "orphans": [],
    "tipEntity": [],
    "firstCreditBureauEntities": [],
    "person_with_risk": false
}