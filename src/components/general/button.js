import React from 'react';
import './button.scss';

export default function AddButton(props){
    return (
        <span className="addbutton">
            <i className="material-icons center" onClick={props.click}>{props.icon}</i>
        </span>
    )
}