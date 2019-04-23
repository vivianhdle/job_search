import React, {Component} from 'react';

class TextArea extends Component{
    render(){
        const {handleChange,input,label,id,col='s12', meta:{error,touched},currentValue}=this.props;
        return(
            <div className="row">
                <div className={`input-field col ${col}`}>
                <textarea id={id} {...input} value={currentValue} onChange={handleChange} className="materialize-textarea"></textarea>
                <label htmlFor={id}>{label}</label>
                </div>
            </div>
        )
    } 
}

export default TextArea;