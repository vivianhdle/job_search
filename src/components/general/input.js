import React from 'react';


export default props => {
    const {input,classes='',type="text",label,id,col='s12', currentValue,meta:{error,touched}}=props;
    console.log('input props',props)
    return(
        <div className={`input-field col ${col}`}>
            <input className={`input ${id} ${classes}`} type={type} {...input} id={id} value={currentValue}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

