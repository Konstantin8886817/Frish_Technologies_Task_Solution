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

const company = {
    "campaign_instance_id": "a2d6b5fd-df8b-4c45-9bc6-9baa1c5744fd",
    "campaign_name": "AirHacked",
    "team_instances": [
        {
            "steps": [
                {
                    "status": "done",
                    "step_id": "6e507890-da88-4093-9cf0-042d99f6ac33",
                    "step_name": "Hypervisor"
                },
                {
                    "status": "done",
                    "step_id": "f6108b39-51da-460e-8d0e-d318d4c4d01c",
                    "step_name": "Local Job Scheduling"
                },
                {
                    "status": "done",
                    "step_id": "807c4038-3420-41e8-b72c-a50d398ec673",
                    "step_name": "Authentication Package"
                },
                {
                    "status": "done",
                    "step_id": "ce399c25-1911-4532-a159-4cf8d2b70133",
                    "step_name": "Path Interception"
                },
                {
                    "status": "in_progress",
                    "step_id": "e8309643-7fe8-4738-bf75-1cd05420ca5f",
                    "step_name": "Disk Structure Wipe"
                },
                {
                    "status": "not_started",
                    "step_id": "f35bb097-e39c-4592-91e2-56d266e945ca",
                    "step_name": "Permission Groups Discovery"
                },
                {
                    "status": "not_started",
                    "step_id": "69869c8d-1984-4766-b519-5aadbd9883c2",
                    "step_name": "Service Registry Permissions Weakness"
                },
                {
                    "status": "not_started",
                    "step_id": "cc8ae388-5f8b-49ea-9e49-ba0fe66720c4",
                    "step_name": "Network Service Scanning"
                },
                {
                    "status": "not_started",
                    "step_id": "20467aad-3a34-47f7-a6bb-1240f127c16f",
                    "step_name": "Password Filter DLL"
                }
            ],
            "team_id": "8a9abb02-c44c-4429-97bb-aa2127cba9b6",
            "team_name": "firmwareEagles"
        },
        {
            "steps": [
                {
                    "status": "in_progress",
                    "step_id": "ea9ad0ed-bc4a-4e05-bd93-6d44db62c4c1",
                    "step_name": "Indirect Command Execution"
                }
            ],
            "team_id": "3f5980ff-84e8-41d5-8b93-741e602e14dc",
            "team_name": "wirelessTsunami"
        },
        {
            "steps": [
                {
                    "status": "done",
                    "step_id": "4e2401fb-249a-4c48-883d-73f936ff1b06",
                    "step_name": "Sudo"
                },
                {
                    "status": "done",
                    "step_id": "f037523b-0fce-4b1b-b045-07e659872622",
                    "step_name": "Query Registry"
                },
                {
                    "status": "done",
                    "step_id": "6e39b2f6-5327-43bc-a6f0-56b31bd8031b",
                    "step_name": "System Owner/User Discovery"
                },
                {
                    "status": "done",
                    "step_id": "07d947bd-fb6a-4dd8-bfd7-38ea0cb43f60",
                    "step_name": "Office Application Startup"
                },
                {
                    "status": "in_progress",
                    "step_id": "27454036-0ad3-4c57-b5b7-8467da684580",
                    "step_name": "Custom Cryptographic Protocol"
                },
                {
                    "status": "not_started",
                    "step_id": "9a1b4bbd-9459-44ca-9c82-bd4aea95e6f7",
                    "step_name": "Hooking"
                },
                {
                    "status": "not_started",
                    "step_id": "50448222-f1a0-458b-a217-4138d1861c2c",
                    "step_name": "Data Transfer Size Limits"
                },
                {
                    "status": "not_started",
                    "step_id": "c4812947-23f7-4a20-a679-bc1f5fb96408",
                    "step_name": "Defacement"
                },
                {
                    "status": "not_started",
                    "step_id": "c687acd5-ba5d-4853-b266-05de2ccb7ccc",
                    "step_name": "Hidden Files and Directories"
                }
            ],
            "team_id": "19157d58-3003-484f-bc69-f0d1a736fdb8",
            "team_name": "wirelessTsunami"
        }
    ]
}
