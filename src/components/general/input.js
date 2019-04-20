import React from 'react';


export default props => {
    const {input,type="text",label,id,col='s12', meta:{error,touched}}=props;
    return(
        <div className={`input-field col ${col}`}>
            <input type={type} {...input} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

