import React from 'react';


export default props => {
    const { search=false,input, icon, classes = '', type = "text", label, id, col = 's12', placeholder, meta: { touched, error, warning }} = props;
    const {value} = input;
    return (
        <div className={`input-field col ${col}`}>
            {(icon && !search)&& <i className="material-icons prefix">{icon}</i>}
            <input autoComplete="off" spellCheck="false" autoCorrect="off" className={`input ${id} ${classes}`} type={type} {...input} id={id} />
            {(icon && search)&& <button><i className="material-icons">{icon}</i></button>}
            {touched && ((error && <label htmlFor={id}>{!value && label}</label>) || (warning && <label htmlFor={id}>{!value && label}</label>)) ||<label htmlFor={id}>{!value && label}</label>}
            {touched && ((error && <span className="red-text">{error}</span>) || (warning && <span className="red-text">{warning}</span>))}
        </div>
    )
}

