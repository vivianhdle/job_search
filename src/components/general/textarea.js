import React, { Component } from 'react';
import './textarea.scss';

class TextArea extends Component {
    render() {
        const { label, id, col = 's12', input, icon } = this.props;
        const {value} = input;
        const noteLength = Math.ceil(value.length/40);
        let notePx = noteLength*22;
        return (
            <div className="row">
                <div className={`input-field col ${col}`}>
                    {icon && <i className="material-icons prefix">{icon}</i>}
                    <textarea id={id} className="materialize-textarea GG" {...input} style={{height:`${notePx}px`}} ></textarea>
                    <label htmlFor={id}>{!value && label}</label>
                </div>
            </div>
        )
    }
}

export default TextArea;