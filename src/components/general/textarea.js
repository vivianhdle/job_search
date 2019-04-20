import React, {Component} from 'react';

class TextArea extends Component{
    render(){
        const {input,label,id,col='s12', meta:{error,touched}}=this.props;
        return(
            <div className="row">
                <div className={`input-field col ${col}`}>
                <textarea id={id} {...input} className="materialize-textarea"></textarea>
                <label htmlFor={id}>{label}</label>
                </div>
            </div>
        )
    } 
}

export default TextArea;