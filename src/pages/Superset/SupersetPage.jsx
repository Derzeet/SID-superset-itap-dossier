import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './supersetPage.scss'
import SideBar from '../../components/side-bar';
import logoImage from './superset-logo.png';

function SupersetPage() {
    const [dashboardUrl, setDashboardUrl] = useState('');
    const [questionUrl, setQuestionUrl] = useState('');

    const [open, setOpen] = useState(false);

    const fetchDashboardUrl = (event) => {


        let url = event.target.id;
        
        axios.get(`http://192.168.30.24:9095/dashboard/dashurl`)
            .then(response => {
                setDashboardUrl(response.data.url);
            })
            .catch(error => {
                console.error('Error fetching dashboard URL:', error);
            });

        setOpen(true)
    };

    return (
        <div className='supersetPage'>
            <SideBar/>
            <div className='supersetBody'>
                <div className="title">METABASE</div>
                <div className="iframes-container">
                    <div className="selectBar">
                        <div onClick={fetchDashboardUrl} id='dashurl'>Dashurl</div>
                        <div onClick={fetchDashboardUrl} id='dashboard_2'>DASHBOARD2</div>
                        <div onClick={fetchDashboardUrl} id='dashboard_3'>DASHBOARD3</div>
                        <div onClick={fetchDashboardUrl} id='dashboard_4'>DASHBOARD4</div>
                    </div>
                    <div className="iframe-items">
                        {
                            open ? 
                            <iframe
                                id="dashboard"
                                src={dashboardUrl}
                                frameBorder="0"
                                width="1000"
                                height="600"
                                allowtransparency
                            ></iframe>
                            :
                            <img src={logoImage}/>
                        }
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SupersetPage;
