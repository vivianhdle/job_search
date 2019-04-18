import React from 'react';
import {formatTime} from '../helpers';

function SmallCard(props){
    const {company,created,id,progress,title} = props;
    return(
        // <div className="small-card-container col s10 offset-s1">
        //     <span className="company">{company}</span>
        //     <span className="title">{title}</span>
        //     <span className="created right">{created}</span>
        // </div>
        <div className="row">
            <div className="col s10 offset-s1">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span class="card-title">{company}</span>
                <span className="title">{title}</span>
                <span className="created right">{formatTime(created)}</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SmallCard;