import React from 'react';

export default props => {
    const { input, classes = '', type = "text", label, id, col = 's12', meta: { touched, error }} = props;
    console.log('error', error);
    return (
        <div className={`input-field col ${col}`}>
            <input className={`input ${id} ${classes}`} type={type} {...input} id={id} />
            <label htmlFor={id}>{label}</label>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

