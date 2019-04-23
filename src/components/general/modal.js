import React, { Component, Fragment } from 'react';
import './modal.scss';


class Modal extends Component {

    render(){
        const {children, modalIsOpen, modalClass, mscss} = this.props
        if (modalIsOpen){
            return (
                <div className={modalClass}>
                    <div className={mscss}>
                        {children}
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal;
