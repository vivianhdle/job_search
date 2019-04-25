import React from 'react';

export default props => {
    const { input, classes = '', type = "text", label, id, col = 's12', meta: { touched, error, warning }} = props;
    return (
        <div className={`input-field col ${col}`}>
            <input className={`input ${id} ${classes}`} type={type} {...input} id={id} />
            {touched && ((error && <label htmlFor={id}>{`${label} *`}</label>) || (warning && <label htmlFor={id}>{`${label} *`}</label>)) ||<label htmlFor={id}>{label}</label>}
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

