import React from 'react';

export default props => {
    const { input, classes = '', type = "text", label, id, col = 's12' } = props;
    return (
        <div className={`input-field col ${col}`}>
            <input className={`input ${id} ${classes}`} type={type} {...input} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

