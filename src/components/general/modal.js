import React, { Component } from 'react';
import './modal.scss';


class Modal extends Component {
    render(){
        const {children, modalClass, mscss} = this.props
            return (
                <div className={modalClass}>
                    <div className={mscss}>
                        {children}
                    </div>
                </div>
            )
    }
}

export default Modal;
