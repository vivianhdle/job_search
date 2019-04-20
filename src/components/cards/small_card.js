import React from 'react';
import {formatTime} from '../helpers';
import './small_card.scss';

function SmallCard(props){
    console.log(props);
    const {company,created,id,progress,title} = props;
    return(
        <div className="row">
            <div className="col s10 offset-s1">
            <div className="card grey white">
                <div className="card-content black-text">
                    <span className="card-title">{company}</span>
                    <span className="title">{title}</span>
                    <br/>
                    <span className="created right "><em>{formatTime(created)}</em></span>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default SmallCard;