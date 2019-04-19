import React from 'react';
import {formatTime} from '../helpers';

function SmallCard(props){
    const {company,created,id,progress,title} = props;
    return(
        <div className="row">
            <div className="col s10 offset-s1">
            <div className="card grey white">
                <div className="card-content black-text">
                    <span className="card-title">{company}</span>
                    <span className="title">{title}</span>
                    <span className="created right">{formatTime(created)}</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SmallCard;