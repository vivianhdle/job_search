import React from 'react';
import './button.scss';

export default function Button(props){
    return (
        <span className={props.classes} onClick={props.goToProspect}>
            <i className="material-icons center">{props.icon}</i>
        </span>
    )
}