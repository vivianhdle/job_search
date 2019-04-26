import React from 'react';


export default props => {
    const { input, classes = '', type = "text", label, id, col = 's12', meta: { touched, error, warning }} = props;
    const {value} = input;
    console.log(value);
    return (
        <div className={`input-field col ${col}`}>
            <input className={`input ${id} ${classes}`} type={type} {...input} id={id} />
            {touched && ((error && <label htmlFor={id}>{!value && label}</label>) || (warning && <label htmlFor={id}>{!value && label}</label>)) ||<label htmlFor={id}>{!value && label}</label>}
            {touched && ((error && <span className="red-text">{error}</span>) || (warning && <span className="red-text">{warning}</span>))}
        </div>
    )
}

