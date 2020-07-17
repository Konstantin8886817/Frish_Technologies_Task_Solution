import React from "react";
import './Step.css';
export default ({title, status}) => {
    let statusStyleClass = '';
    if(status === 'done'){
        statusStyleClass = 'Step-done';
    }else if(status === 'in_progress'){
        statusStyleClass = 'Step-progress'
    }
    return(
        <div className='Step'>
            <div className={`Step-circle ${statusStyleClass}`}>
                <h2 className='Step-title'>{title}</h2>
            </div>
            {status === 'in_progress' ? <div className='Step-underline'/> : null}
        </div>
    );
}
