import React, { Component } from 'react';
import './textarea.scss';
import {accountSpecials} from'../helpers';

class TextArea extends Component {
    render() {
        const { label, id, col = 's12', input, icon } = this.props;
        const {value} = input;
        const formattedValue = accountSpecials(value);
        console.log(formattedValue)
        const noteLength = Math.ceil(formattedValue/40);
        console.log(noteLength);
        let notePx = noteLength*25;
        return (
            <div className="row">
                <div className={`input-field col ${col}`}>
                    {icon && <i className="material-icons prefix">{icon}</i>}
                    <textarea id={id} className="materialize-textarea" {...input} style={{height:`${notePx}px`}} ></textarea>
                    <label htmlFor={id}>{!value && label}</label>
                </div>
            </div>
        )
    }
}

export default TextArea;