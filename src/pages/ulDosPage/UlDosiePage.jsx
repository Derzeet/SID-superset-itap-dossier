import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import default_host from '../../config/config';

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
    const [uchreditel, setUchreditel] = useState([])


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
    const [autos, setAutos] = useState([])
    const [commodityProducers, setCommodityProducers] = useState([])
    const [accountant, setAccountant] = useState([])

    const [taxCount, setTaxCount] = useState(0) 


    const [menuOpen, setMenuOpen] = useState(false)
    const getData = (res) => {
        setFullName(res.mvUls[0].full_name_rus)
        setAddress(res.regAddressUlEntities)
        setPdl(res.pdls)
        setOpg(res.opgEntities)
        setBlockESF(res.blockEsfs)
        setNds(res.ndsEntities)
        setBankrot(res.bankrots)
        setOMN(res.omns)
        setUlBin(bin)
        console.log(res)
        setFounders(res.mvUlFounderFls)
        setNedvijimost(res.mvRnOlds)
        setTaxes(res.taxOutEntities)
        setMshes(res.mshes)
        setAutos(res.mvAutoFls)
        setPension((curr) => res.pensionYearAndEmpNum)
        setCommodityProducers(res.commodityProducers)
        setAccountant(res.accountantListEntities)
        setUchreditel(res.svedenyaObUchastnikovUlEntities)
        setTaxCount(res.taxCount);
        isLoading(false)

    }
    useEffect(() => {
        const searchIIN = () => {
            isLoading(true)
            const params = {bin: bin}

            if (bin == '100240021921') {
                const res = bin100240021921
                getData(res)
            }
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
                    <div className="central-bar">
                        <div className="frames">
                            <LeftTopFrame fullName={fullName} bin={ulBin} address = {address}/>
                            <RightTopFrame uchreditel={uchreditel} founders={founders} pdls={pdl}/>
                            <LeftBottomFrame taxCount={taxCount} accountant={accountant} commodityProducers={commodityProducers} mshes={mshes} taxes={taxes} nedvijimost={nedvijimost} pension={pension} bin={bin} autos={autos}/>
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

const bin100240021921 = {
    "mvUls": [
        {
            "bin": "100240021921",
            "full_name_rus": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "full_name_kaz": "АлматыСтройПроект жауапкершілігі шектеулі серіктестігі",
            "org_status": "1",
            "org_registration_type": "16",
            "org_form": "1",
            "org_reg_date": "04-05-2020",
            "legal_form": "20",
            "is_resident": null,
            "registration_agensy": null,
            "registration_number": null,
            "oked": null,
            "head_organization": null,
            "subject_id": "7874766",
            "layer_id": "176491648",
            "ul_status": "Зарегистрировано",
            "is_upd": true,
            "short_name": "ТОО \"АЛМАТЫСТРОЙПРОЕКТ\""
        }
    ],
    "mvUlFounderFls": [
        {
            "id": "a9b7b1fc-0f36-4950-9ae8-b0fdcead55db",
            "reg_date": "2010-02-24",
            "bin_org": "100240021921",
            "iin": "780101400785",
            "lastname": "ЛАРИОНОВА",
            "firstname": "ЮЛИЯ",
            "patronymic": "АЛЕКСЕЕВНА",
            "deposit": "140",
            "share": "100",
            "is_curr": false
        },
        {
            "id": "75851ad6-ace1-462e-9aeb-2b7a7648a0e8",
            "reg_date": "2013-03-13",
            "bin_org": "100240021921",
            "iin": "780101400785",
            "lastname": "ЛАРИОНОВА",
            "firstname": "ЮЛИЯ",
            "patronymic": "АЛЕКСЕЕВНА",
            "deposit": "140000",
            "share": "100",
            "is_curr": false
        },
        {
            "id": "20883b3b-2096-4fd6-9d60-acac74f9a73e",
            "reg_date": "2014-09-24",
            "bin_org": "100240021921",
            "iin": "770510301783",
            "lastname": "ОСПАНОВ",
            "firstname": "ЖАНАТ",
            "patronymic": "БУЛАТОВИЧ",
            "deposit": "140000",
            "share": "100",
            "is_curr": false
        },
        {
            "id": "2e0a90fa-2722-4e68-9a9a-4d71c10059e3",
            "reg_date": "2016-03-28",
            "bin_org": "100240021921",
            "iin": "691001450290",
            "lastname": "ТАШМУЛИНА",
            "firstname": "НАЗИПА",
            "patronymic": "МЕРЕКЕЕВНА",
            "deposit": "140000",
            "share": "100",
            "is_curr": false
        },
        {
            "id": "c4c7594a-475b-4f6c-a2d6-3e3266567dc9",
            "reg_date": "2021-01-20",
            "bin_org": "100240021921",
            "iin": "750120402000",
            "lastname": "БЕЙСЕНОВА",
            "firstname": "ДИНА",
            "patronymic": "БУЛАТОВНА",
            "deposit": "140000",
            "share": "100",
            "is_curr": true
        }
    ],
    "accountantListEntities": [
        {
            "bin": "100240021921",
            "prof": "Бухгалтер",
            "iin": "680318450606",
            "lname": "САНДЫРЕВА",
            "fname": "ИРИНА"
        }
    ],
    "omns": [],
    "equipment": [
        {
            "owner_iin_bin": null,
            "owner_name": null,
            "owner_address": null,
            "proprietor_name": "ТОО \"АЛМАТЫ СТРОЙ ПРОЕКТ\"",
            "proprietor_name_iin_bin": "100240021921",
            "proprietor_address": "г.Алматы, Турксибская р.а., Турксибский район",
            "quipment_location": "г.Астана, Алматинская р.а., район \"Алматы\"",
            "gov_number": "ATD687Z",
            "reg_series_num": "УКиКГС 005543",
            "reg_date": "2019-12-31",
            "reg_reason": "Приобретение",
            "end_date": "2021-01-06",
            "end_reason": "Прекращение право владения на машину",
            "vin": "011910",
            "engine_num": null,
            "equipment_spec": "Прочее",
            "equipment_type": "Каток пневмоколёсный",
            "equipment_form": "Несамоходный",
            "brand": null,
            "equipment_model": "МКСМ-800Н",
            "manufacturer": null,
            "dealer": null,
            "id": 363913,
            "issue_year": 2013,
            "power_kw": 103,
            "power_hp": null,
            "is_first_reg": true,
            "is_pledge": false,
            "is_arrest": false
        },
        {
            "owner_iin_bin": null,
            "owner_name": null,
            "owner_address": null,
            "proprietor_name": "ТОО \"АЛМАТЫ СТРОЙ ПРОЕКТ\"",
            "proprietor_name_iin_bin": "100240021921",
            "proprietor_address": "г.Алматы, Турксибская р.а., Турксибский район",
            "quipment_location": "г.Астана, Алматинская р.а., район \"Алматы\"",
            "gov_number": "ATD686Z",
            "reg_series_num": "УКиКГС 005542",
            "reg_date": "2019-12-31",
            "reg_reason": "Вывоз машины за пределы РК",
            "end_date": "2021-12-27",
            "end_reason": null,
            "vin": "H1710539",
            "engine_num": null,
            "equipment_spec": "Дорожно-строительная техника",
            "equipment_type": "Каток дорожный",
            "equipment_form": "Самоходный",
            "brand": null,
            "equipment_model": "HAMM HD10W",
            "manufacturer": null,
            "dealer": null,
            "id": 364072,
            "issue_year": 2008,
            "power_kw": null,
            "power_hp": null,
            "is_first_reg": true,
            "is_pledge": false,
            "is_arrest": false
        },
        {
            "owner_iin_bin": null,
            "owner_name": null,
            "owner_address": null,
            "proprietor_name": "ТОО \"АЛМАТЫ СТРОЙ ПРОЕКТ\"",
            "proprietor_name_iin_bin": "100240021921",
            "proprietor_address": "г.Алматы, Турксибская р.а., Турксибский район",
            "quipment_location": "г.Астана, Алматинская р.а., район \"Алматы\"",
            "gov_number": "ATD685Z",
            "reg_series_num": "УКиКГС 005541",
            "reg_date": "2019-12-31",
            "reg_reason": "Прекращение право владения на машину",
            "end_date": "2021-12-27",
            "end_reason": null,
            "vin": "XUG0300FJDNB00902",
            "engine_num": null,
            "equipment_spec": "Прочее",
            "equipment_type": "Погрузчик фронтальный",
            "equipment_form": "Самоходный",
            "brand": "XCMG",
            "equipment_model": "LW300FN",
            "manufacturer": "XCMG",
            "dealer": null,
            "id": 364073,
            "issue_year": 2013,
            "power_kw": null,
            "power_hp": 125,
            "is_first_reg": true,
            "is_pledge": false,
            "is_arrest": false
        },
        {
            "owner_iin_bin": null,
            "owner_name": null,
            "owner_address": null,
            "proprietor_name": "ТОО \"АЛМАТЫ СТРОЙ ПРОЕКТ\"",
            "proprietor_name_iin_bin": "100240021921",
            "proprietor_address": "г.Алматы, Турксибская р.а., Турксибский район",
            "quipment_location": "г.Астана, Алматинская р.а., район \"Алматы\"",
            "gov_number": "ATD684Z",
            "reg_series_num": "УКиКГС 005540",
            "reg_date": "2019-12-31",
            "reg_reason": "Прекращение право владения на машину",
            "end_date": "2021-12-27",
            "end_reason": null,
            "vin": "XUG0300FLENB00793",
            "engine_num": null,
            "equipment_spec": "Дорожно-строительная техника",
            "equipment_type": "Погрузчик фронтальный",
            "equipment_form": "Самоходный",
            "brand": "XCMG",
            "equipment_model": "LW300FN",
            "manufacturer": "XCMG",
            "dealer": null,
            "id": 364074,
            "issue_year": 2014,
            "power_kw": 92,
            "power_hp": null,
            "is_first_reg": true,
            "is_pledge": false,
            "is_arrest": false
        },
        {
            "owner_iin_bin": null,
            "owner_name": null,
            "owner_address": null,
            "proprietor_name": "ТОО \"АЛМАТЫ СТРОЙ ПРОЕКТ\"",
            "proprietor_name_iin_bin": "100240021921",
            "proprietor_address": "г.Алматы, Турксибская р.а., Турксибский район",
            "quipment_location": "г.Алматы, Турксибская р.а., Турксибский район",
            "gov_number": "AEDA444",
            "reg_series_num": "А-02 007395",
            "reg_date": "2019-01-31",
            "reg_reason": "Приобретение",
            "end_date": null,
            "end_reason": null,
            "vin": "PTJ-00124",
            "engine_num": null,
            "equipment_spec": "С/Х техника",
            "equipment_type": "Трактор колёсный",
            "equipment_form": "Самоходный",
            "brand": "Беларус",
            "equipment_model": "892",
            "manufacturer": "Минский Тракторный Завод",
            "dealer": null,
            "id": 389597,
            "issue_year": 2017,
            "power_kw": null,
            "power_hp": 89,
            "is_first_reg": true,
            "is_pledge": false,
            "is_arrest": false
        },
        {
            "owner_iin_bin": null,
            "owner_name": null,
            "owner_address": null,
            "proprietor_name": "ТОО \"АЛМАТЫ СТРОЙ ПРОЕКТ\"",
            "proprietor_name_iin_bin": "100240021921",
            "proprietor_address": "г.Алматы, Турксибская р.а., Турксибский район",
            "quipment_location": "г.Алматы, Турксибская р.а., Турксибский район",
            "gov_number": "ARD414A",
            "reg_series_num": "А-02 007396",
            "reg_date": "2019-01-31",
            "reg_reason": "Приобретение",
            "end_date": null,
            "end_reason": null,
            "vin": "CSJ-0058",
            "engine_num": null,
            "equipment_spec": "Дорожно-строительная техника",
            "equipment_type": "Экскаватор",
            "equipment_form": "Самоходный",
            "brand": null,
            "equipment_model": "машина",
            "manufacturer": null,
            "dealer": null,
            "id": 389672,
            "issue_year": 2017,
            "power_kw": null,
            "power_hp": 267,
            "is_first_reg": true,
            "is_pledge": false,
            "is_arrest": false
        }
    ],
    "dormants": [],
    "bankrots": [],
    "opgEntities": [],
    "adms": [
        {
            "two": "6000000010543013",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": "",
            "material_num": "227121150001093",
            "language_prod": "русский",
            "reg_date": "2022-04-07",
            "protocol_num": "000944",
            "protocol_date": null,
            "kui_number": "",
            "kui_date": null,
            "erdr_number": "",
            "erdr_date": "0001-01-01 BC",
            "fifteen": "ДАРБАЕВА ДИНАРА БЕРИКОВНА",
            "sixteen": "05.04.2022",
            "seventeen": "03",
            "eighteen": "2880001",
            "nineteen": " ",
            "twenty": "",
            "twenty_one": "",
            "surname": "",
            "firstname": "",
            "secondname": "",
            "birth_date": null,
            "citizenship": "",
            "nationality": "",
            "iin": null,
            "work_place": null,
            "phone_num": "",
            "email": "",
            "ul_org_name": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"АЛМАТЫСТРОЙПРОЕКТ\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": "",
            "state_auto_num": "",
            "qualification": "2880001",
            "enforcement": null,
            "id": "359302",
            "maim_measure": "01",
            "end_date": null,
            "fine_amount": null,
            "teminate_reason": "",
            "source": null,
            "thirty_seven": "6000000018493059",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "227121150001093",
            "fourty_two": "",
            "fourty_three": "09",
            "fourty_four": "2022-04-07",
            "fourty_nine": "",
            "fifty_one": "",
            "fifty_two": "",
            "fifty_three": "",
            "fifty_four": "",
            "fifty_five": "",
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        null,
        null,
        {
            "two": "5000000017625600",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": null,
            "material_num": "217121153001137",
            "language_prod": "русский",
            "reg_date": "2021-02-19",
            "protocol_num": "001094",
            "protocol_date": "2021-02-19",
            "kui_number": null,
            "kui_date": null,
            "erdr_number": null,
            "erdr_date": null,
            "fifteen": "МЕЙРБЕК?ЛЫ СЕРІК",
            "sixteen": "19.02.2021",
            "seventeen": "03",
            "eighteen": "0910007",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": null,
            "surname": null,
            "firstname": null,
            "secondname": null,
            "birth_date": null,
            "citizenship": null,
            "nationality": null,
            "iin": null,
            "work_place": null,
            "phone_num": null,
            "email": null,
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": null,
            "state_auto_num": null,
            "qualification": "0910007",
            "enforcement": null,
            "id": "2733297",
            "maim_measure": "02",
            "end_date": null,
            "fine_amount": "36000",
            "teminate_reason": null,
            "source": null,
            "thirty_seven": "146807402",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153001137",
            "fourty_two": null,
            "fourty_three": "12",
            "fourty_four": "2021-02-23",
            "fourty_nine": null,
            "fifty_one": null,
            "fifty_two": null,
            "fifty_three": "36000",
            "fifty_four": null,
            "fifty_five": null,
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        {
            "two": "5000000017625630",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": null,
            "material_num": "217121153001138",
            "language_prod": "русский",
            "reg_date": "2021-02-19",
            "protocol_num": "001095",
            "protocol_date": "2021-02-19",
            "kui_number": null,
            "kui_date": null,
            "erdr_number": null,
            "erdr_date": null,
            "fifteen": "МЕЙРБЕК?ЛЫ СЕРІК",
            "sixteen": "19.02.2021",
            "seventeen": "03",
            "eighteen": "0920003",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": null,
            "surname": null,
            "firstname": null,
            "secondname": null,
            "birth_date": null,
            "citizenship": null,
            "nationality": null,
            "iin": null,
            "work_place": null,
            "phone_num": null,
            "email": null,
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": null,
            "state_auto_num": null,
            "qualification": "0920003",
            "enforcement": null,
            "id": "2733298",
            "maim_measure": "02",
            "end_date": null,
            "fine_amount": "9450",
            "teminate_reason": null,
            "source": null,
            "thirty_seven": "146807523",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153001138",
            "fourty_two": null,
            "fourty_three": "12",
            "fourty_four": "2021-02-23",
            "fourty_nine": null,
            "fifty_one": null,
            "fifty_two": null,
            "fifty_three": "9450",
            "fifty_four": null,
            "fifty_five": null,
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        {
            "two": "5000000017625660",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": null,
            "material_num": "217121153001139",
            "language_prod": "русский",
            "reg_date": "2021-02-19",
            "protocol_num": "001096",
            "protocol_date": "2021-02-19",
            "kui_number": null,
            "kui_date": null,
            "erdr_number": null,
            "erdr_date": null,
            "fifteen": "МЕЙРБЕК?ЛЫ СЕРІК",
            "sixteen": "19.02.2021",
            "seventeen": "03",
            "eighteen": "0921002",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": null,
            "surname": null,
            "firstname": null,
            "secondname": null,
            "birth_date": null,
            "citizenship": null,
            "nationality": null,
            "iin": null,
            "work_place": null,
            "phone_num": null,
            "email": null,
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": null,
            "state_auto_num": null,
            "qualification": "0921002",
            "enforcement": null,
            "id": "2733301",
            "maim_measure": "02",
            "end_date": null,
            "fine_amount": "9000",
            "teminate_reason": null,
            "source": null,
            "thirty_seven": "146807395",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153001139",
            "fourty_two": null,
            "fourty_three": "12",
            "fourty_four": "2021-02-23",
            "fourty_nine": null,
            "fifty_one": null,
            "fifty_two": null,
            "fifty_three": "9000",
            "fifty_four": null,
            "fifty_five": null,
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        {
            "two": "5000000017625600",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": null,
            "material_num": "217121153001137",
            "language_prod": "русский",
            "reg_date": "2021-02-19",
            "protocol_num": "001094",
            "protocol_date": "2021-02-19",
            "kui_number": null,
            "kui_date": null,
            "erdr_number": null,
            "erdr_date": null,
            "fifteen": "МЕЙРБЕК?ЛЫ СЕРІК",
            "sixteen": "19.02.2021",
            "seventeen": "03",
            "eighteen": "0910007",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": null,
            "surname": null,
            "firstname": null,
            "secondname": null,
            "birth_date": null,
            "citizenship": null,
            "nationality": null,
            "iin": null,
            "work_place": null,
            "phone_num": null,
            "email": null,
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": null,
            "state_auto_num": null,
            "qualification": "0910007",
            "enforcement": null,
            "id": "2733297",
            "maim_measure": "02",
            "end_date": null,
            "fine_amount": "36000",
            "teminate_reason": null,
            "source": null,
            "thirty_seven": "146807402",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153001137",
            "fourty_two": null,
            "fourty_three": "12",
            "fourty_four": "2021-02-23",
            "fourty_nine": null,
            "fifty_one": null,
            "fifty_two": null,
            "fifty_three": "36000",
            "fifty_four": null,
            "fifty_five": null,
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        {
            "two": "5000000017625630",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": null,
            "material_num": "217121153001138",
            "language_prod": "русский",
            "reg_date": "2021-02-19",
            "protocol_num": "001095",
            "protocol_date": "2021-02-19",
            "kui_number": null,
            "kui_date": null,
            "erdr_number": null,
            "erdr_date": null,
            "fifteen": "МЕЙРБЕК?ЛЫ СЕРІК",
            "sixteen": "19.02.2021",
            "seventeen": "03",
            "eighteen": "0920003",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": null,
            "surname": null,
            "firstname": null,
            "secondname": null,
            "birth_date": null,
            "citizenship": null,
            "nationality": null,
            "iin": null,
            "work_place": null,
            "phone_num": null,
            "email": null,
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": null,
            "state_auto_num": null,
            "qualification": "0920003",
            "enforcement": null,
            "id": "2733298",
            "maim_measure": "02",
            "end_date": null,
            "fine_amount": "9450",
            "teminate_reason": null,
            "source": null,
            "thirty_seven": "146807523",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153001138",
            "fourty_two": null,
            "fourty_three": "12",
            "fourty_four": "2021-02-23",
            "fourty_nine": null,
            "fifty_one": null,
            "fifty_two": null,
            "fifty_three": "9450",
            "fifty_four": null,
            "fifty_five": null,
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        {
            "two": "5000000017625660",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": null,
            "material_num": "217121153001139",
            "language_prod": "русский",
            "reg_date": "2021-02-19",
            "protocol_num": "001096",
            "protocol_date": "2021-02-19",
            "kui_number": null,
            "kui_date": null,
            "erdr_number": null,
            "erdr_date": null,
            "fifteen": "МЕЙРБЕК?ЛЫ СЕРІК",
            "sixteen": "19.02.2021",
            "seventeen": "03",
            "eighteen": "0921002",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": null,
            "surname": null,
            "firstname": null,
            "secondname": null,
            "birth_date": null,
            "citizenship": null,
            "nationality": null,
            "iin": null,
            "work_place": null,
            "phone_num": null,
            "email": null,
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": null,
            "state_auto_num": null,
            "qualification": "0921002",
            "enforcement": null,
            "id": "2733301",
            "maim_measure": "02",
            "end_date": null,
            "fine_amount": "9000",
            "teminate_reason": null,
            "source": null,
            "thirty_seven": "146807395",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153001139",
            "fourty_two": null,
            "fourty_three": "12",
            "fourty_four": "2021-02-23",
            "fourty_nine": null,
            "fifty_one": null,
            "fifty_two": null,
            "fifty_three": "9000",
            "fifty_four": null,
            "fifty_five": null,
            "fifty_six": "08 Учет адм. правнарушений (web)"
        },
        {
            "two": "6000000002335048",
            "org_identify_crime": "19712115",
            "authority_detected": "Управление государственных доходов по Байконурскому району  г.Астана",
            "divisions_ovd": "",
            "material_num": "217121153003423",
            "language_prod": "русский",
            "reg_date": "2021-05-20",
            "protocol_num": "",
            "protocol_date": "0001-01-01 BC",
            "kui_number": "",
            "kui_date": null,
            "erdr_number": "",
            "erdr_date": null,
            "fifteen": "БАЙСАЛЫКОВА АЙША ЖАНАБЕКОВНА",
            "sixteen": "2021-05-20",
            "seventeen": "03",
            "eighteen": "2720001",
            "nineteen": " ",
            "twenty": null,
            "twenty_one": "",
            "surname": "",
            "firstname": "",
            "secondname": "",
            "birth_date": "0001-01-01 BC",
            "citizenship": "",
            "nationality": "",
            "iin": null,
            "work_place": "",
            "phone_num": "",
            "email": "",
            "ul_org_name": "Товарищество с ограниченной ответственностью \"АлматыСтройПроект\"",
            "ul_adress": "КАЗАХСТАН",
            "bin": "100240021921",
            "vehicle_brand": "",
            "state_auto_num": "",
            "qualification": "2720001",
            "enforcement": null,
            "id": "1145624",
            "maim_measure": "01",
            "end_date": null,
            "fine_amount": "",
            "teminate_reason": "",
            "source": null,
            "thirty_seven": "6000000003394133",
            "thirty_eight": "19712115",
            "thirty_nine": "Управление государственных доходов по Байконурскому району  г.Астана",
            "fourty": "217121153003423",
            "fourty_two": "",
            "fourty_three": "09",
            "fourty_four": "2021-05-20",
            "fourty_nine": "",
            "fifty_one": "",
            "fifty_two": "",
            "fifty_three": "",
            "fifty_four": "",
            "fifty_five": "",
            "fifty_six": "08 Учет адм. правнарушений (web)"
        }
    ],
    "mshes": [
        {
            "ownerIinBin": "100240021921",
            "equipmentType": null,
            "equipmentModel": "Беларус 892",
            "vin": "PTJ-00124",
            "govNumber": "AEDA444",
            "regSeriesNum": "7395",
            "regDate": "2019-01-30T18:00:00.000+00:00"
        },
        {
            "ownerIinBin": "100240021921",
            "equipmentType": null,
            "equipmentModel": "машина",
            "vin": "CSJ-0058",
            "govNumber": "ARD414A",
            "regSeriesNum": "7396",
            "regDate": "2019-01-30T18:00:00.000+00:00"
        }
    ],
    "criminals": [],
    "blockEsfs": [
        {
            "id": 24645,
            "iin_bin": "100240021921",
            "start_dt": "2019-08-20",
            "end_dt": "2019-09-02",
            "update_dt": "2019-09-02"
        }
    ],
    "ndsEntities": [
        {
            "id": 112418,
            "iinBin": "100240021921",
            "startDt": "2016-03-31T18:00:00.000+00:00",
            "endDt": null,
            "reason": null,
            "updateDt": "2016-03-31T18:00:00.000+00:00"
        }
    ],
    "mvRnOlds": null,
    "taxOutEntities": null,
    "fpgTempEntities": [],
    "pdls": [],
    "commodityProducers": [],
    "regAddressUlEntities": {
        "subjectId": 7874766,
        "layerId": 195917557,
        "bin": "100240021921",
        "regActionCode": 16,
        "regDate": "2021-01-25T18:00:00.000+00:00",
        "dOrgForm": 1,
        "dOrgLegalForm": 20,
        "orgNameRu": "ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"АЛМАТЫСТРОЙПРОЕКТ\"",
        "orgNameKz": "\"АЛМАТЫСТРОЙПРОЕКТ\" ЖАУАПКЕРШІЛІГІ ШЕКТЕУЛІ СЕРІКТЕСТІГІ",
        "regAddrRegionRu": "ГОРОД АСТАНА",
        "regAddrRegionKz": "АСТАНА ҚАЛАСЫ",
        "regAddrDistrictRu": "РАЙОН БАЙКОНЫР",
        "regAddrDistrictKz": "БАЙҚОҢЫР АУДАНЫ",
        "regAddrRuralDistrictRu": null,
        "regAddrRuralDistrictKz": null,
        "regAddrLocalityRu": null,
        "regAddrLocalityKz": null,
        "regAddrStreetRu": "С 745",
        "regAddrStreetKz": "С 745",
        "regAddrBuildingNum": "12",
        "regAddrBlockNum": null,
        "regAddrBuildingBodyNum": null,
        "regAddrOffice": null,
        "okedNameRu": "ДЕЯТЕЛЬНОСТЬ В ОБЛАСТИ АРХИТЕКТУРЫ, ЗА ИСКЛЮЧЕНИЕМ ОБЪЕКТОВ АТОМНОЙ ПРОМЫШЛЕННОСТИ И АТОМНОЙ ЭНЕРГЕТИКИ",
        "okedNameKz": "АТОМ ӨНЕРКӘСІБІ ЖӘНЕ АТОМ ЭНЕРГЕТИКАСЫ ОБЪЕКТІЛЕРІН ҚОСПАҒАНДА, СӘУЛЕТ САЛАСЫНДАҒЫ ҚЫЗМЕТ",
        "authorizedCapitalTotal": "140000",
        "authorizedCapitalGovShare": "0",
        "authorizedCapitalPrivateShare": "140000",
        "ulOrgRegNumber": "8507-1901-НАО-ТОО",
        "taxInactive": false,
        "dUlFormationType": 1,
        "dOwnershipType": "15",
        "dPrivateEnterpriseType": 3,
        "is_international": false,
        "is_foreign_investors": null,
        "is_stateless_person": false,
        "d_state_enterprise_type": null,
        "d_ul_fund_type": null,
        "is_government_agency": null,
        "ul_status": "Зарегистрировано",
        "entrepreneurial": true,
        "commercial": true,
        "subsidiary": false,
        "active": true
    },
    "svedenyaObUchastnikovUlEntities": [
        {
            "iin_bin": "780101400785",
            "identificator": "Директор (исторический)",
            "reg_date": "2010-02-24",
            "risk": null,
            "fioorUlName": "ЛАРИОНОВА ЮЛИЯ АЛЕКСЕЕВНА"
        },
        {
            "iin_bin": "770510301783",
            "identificator": "Директор (исторический)",
            "reg_date": "2014-09-24",
            "risk": null,
            "fioorUlName": "ОСПАНОВ ЖАНАТ БУЛАТОВИЧ"
        },
        {
            "iin_bin": "691001450290",
            "identificator": "Директор (исторический)",
            "reg_date": "2016-03-28",
            "risk": null,
            "fioorUlName": "ТАШМУЛИНА НАЗИПА МЕРЕКЕЕВНА"
        },
        {
            "iin_bin": "750120402000",
            "identificator": "Директор (исторический)",
            "reg_date": "2021-01-20",
            "risk": null,
            "fioorUlName": "БЕЙСЕНОВА ДИНА БУЛАТОВНА"
        },
        {
            "iin_bin": "810109301098",
            "identificator": "Директор",
            "reg_date": "2021-01-26",
            "risk": null,
            "fioorUlName": "ОСПАНОВ КАНАТ БУЛАТОВИЧ"
        }
    ],
    "fl_contacts": [],
    "taxCount": 487,
    "mvAutoFls": [
        {
            "iin": "100240021921",
            "brand_model": "VOLVO FM7-42T-71S",
            "date_certificate": "2019-12-06",
            "series_reg_number": "AP00023211",
            "reg_number": "815YB01",
            "category_control_tc": "C",
            "vin_kuzov_shassi": "YV2J4DEA1XA299722",
            "engine_volume": "11000",
            "weight": "11000",
            "max_weight": "26000",
            "owner_category": "1",
            "end_date": null,
            "color": "",
            "release_year_tc": "",
            "is_registered": true,
            "special_marks": ""
        },
        {
            "iin": "100240021921",
            "brand_model": "MAN 19-322",
            "date_certificate": "2019-12-06",
            "series_reg_number": "AP00023214",
            "reg_number": "816YB01",
            "category_control_tc": "C",
            "vin_kuzov_shassi": "WMAF033420M157744",
            "engine_volume": "9973",
            "weight": "8700",
            "max_weight": "18000",
            "owner_category": "1",
            "end_date": null,
            "color": "",
            "release_year_tc": "",
            "is_registered": true,
            "special_marks": ""
        },
        {
            "iin": "100240021921",
            "brand_model": "MERCEDES BENZ ACTROS 2540",
            "date_certificate": "2019-12-06",
            "series_reg_number": "AP00023223",
            "reg_number": "817YB01",
            "category_control_tc": "C",
            "vin_kuzov_shassi": "WDB9502141K473970",
            "engine_volume": "11946",
            "weight": "11700",
            "max_weight": "25000",
            "owner_category": "1",
            "end_date": null,
            "color": "",
            "release_year_tc": "",
            "is_registered": true,
            "special_marks": ""
        }
    ],
    "flPensionContrs": null,
    "qoldauSubsidy": [],
    "pensionYearAndEmpNum": [
        {
            "iin_count": 2,
            "date_part": 2013
        },
        {
            "iin_count": 2,
            "date_part": 2014
        },
        {
            "iin_count": 2,
            "date_part": 2016
        },
        {
            "iin_count": 1,
            "date_part": 2017
        },
        {
            "date_part": 2018,
            "iin_count": 13
        },
        {
            "date_part": 2019,
            "iin_count": 40
        },
        {
            "date_part": 2020,
            "iin_count": 1087
        },
        {
            "date_part": 2021,
            "iin_count": 111
        },
        {
            "date_part": 2022,
            "iin_count": 7
        }
    ],
    "person_with_risk": true,
    "regUlNaOdnomMeste": null
}