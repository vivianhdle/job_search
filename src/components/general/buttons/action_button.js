import React from 'react';

function ActionButton(props){
    const {handleClick,icon,classes,size,color} = props
    return(
        <span>
            <button onClick={handleClick} className={`waves-effect ${classes} ${size}`}>
                <i className={`material-icons ${color}`}>{icon}</i>
            </button>
        </span>
    )
}


export default ActionButton;