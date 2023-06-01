import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SupersetPage() {
    const [dashboardUrl, setDashboardUrl] = useState('');
    const [questionUrl, setQuestionUrl] = useState('');

    const fetchDashboardUrl = () => {
        axios.get('http://192.168.30.24:9095/dashboard/dashurl')
            .then(response => {
                setDashboardUrl(response.data.url);
            })
            .catch(error => {
                console.error('Error fetching dashboard URL:', error);
            });
    };


    useEffect(() => {
// Fetch the initial URLs
        fetchDashboardUrl();
    }, []);

    return (
        <div>
            <button onClick={fetchDashboardUrl}>Click me to see the dashboard</button>
            <br/>
            <iframe
                id="dashboard"
                src={dashboardUrl}
                frameBorder="0"
                width="1000"
                height="600"
                allowtransparency
            ></iframe>
        </div>
    );
}

export default SupersetPage;
