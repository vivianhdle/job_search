import React from 'react';
import './action_button.scss';

function ActionButton(props){
    const {handleClick,icon,classes,size} = props
    return(
        <span>
            <button onClick={handleClick} className={`action-button waves-effect ${classes} ${size}`}>
                <i className="material-icons">{icon}</i>
            </button>
        </span>
    )
}


export default ActionButton;