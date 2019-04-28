import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        const { label, id, col = 's12', input,icon } = this.props;
        return (
            <div className="row">
                <div className={`input-field col ${col}`}>
                    {icon && <i className="material-icons prefix">{icon}</i>}
                    <textarea id={id} className="materialize-textarea" {...input}></textarea>
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>
        )
    }
}

export default TextArea;