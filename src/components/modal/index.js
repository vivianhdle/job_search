import React, {Component} from 'react';
import './modal.scss';
import AddForm from './add-form';

class Modal extends Component{
    handleAdd(values){
        console.log('Form Values',values);
    }
    render(){
        const {isOpen}=this.props
        if (isOpen){
            return (
                <div className="add-form-modal">
                    <div className="form">
                        {/* <AddForm add={this.handleAdd}/> */}
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal