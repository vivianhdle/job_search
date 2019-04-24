import React from 'react';

function ActionButton(props){
    const {handleClick,icon,classes,size} = props
    return(
        <span>
            <button onClick={handleClick} className={`waves-effect ${classes} ${size}`}>
                <i className="material-icons">{icon}</i>
            </button>
        </span>
    )
}


export default ActionButton;