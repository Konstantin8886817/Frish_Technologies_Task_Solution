import React from "react";
import './TeamRow.css';
import Step from "../step/Step";

export default ({title, steps}) => {
    return (
        <div className='TeamRow'>
            <div className='TeamRow-name'>{title}</div>
            <div className='TeamRow-steps'>
                {
                    steps.map(step => <Step
                        key={step.step_id}
                        title={step.step_name}
                        status={step.status}/>
                    )
                }
            </div>
        </div>
    );
}
