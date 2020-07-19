import React, {useEffect, useState} from 'react';
import Company from "./components/company/Company";
import Loader from "./components/loader/Loader";

const CORS = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi';

function App() {
    const [appState, setState] = useState({loading: true, company: null});

    /**
     * In production for fetch data from server
     * this method should be removed to redux
     * also need handles http errors but in task no case how need handling errors
     * @returns {Promise<void>}
     */
    useEffect(() => {
        async function fetchCompany(){
            const response = await fetch(`${CORS}${URL}`,{
                headers:{
                    'x-api-key':'9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9'
                }
            });
            const company = await response.json();
            setState(() => ({loading: false,company}));
        }

        fetchCompany();
    },[]);

    return (
        <>
            {
                appState.loading ?
                    <Loader/>
                    :
                    <Company
                        name={appState.company.campaign_name}
                        teams={appState.company.team_instances}/>
            }
        </>
    );
}

export default App;
