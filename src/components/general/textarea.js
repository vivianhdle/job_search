import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        const { label, id, col = 's12', input } = this.props;
        return (
            <div className="row">
                <div className={`input-field col ${col}`}>
                    <textarea id={id} className="materialize-textarea" {...input}></textarea>
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>
        )
    }
}

export default TextArea;