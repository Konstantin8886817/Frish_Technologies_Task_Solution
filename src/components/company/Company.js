import React from "react";
import './Company.css';
import TeamRow from "../team-row/TeamRow";

export default ({name, teams}) => {
    return (
        <div className='Company'>
            <h2 className='Company-title'>Scenario Visualization</h2>
            <h3 className='Company-name'>{name}</h3>
            <hr/>
            <div className="Company-team-box">
                {
                    teams.map(team => <TeamRow
                        key={team.team_id}
                        steps={team.steps}
                        title={team.team_name}
                    />)
                }
            </div>
        </div>
    );
}
