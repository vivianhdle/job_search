import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render() {
        const { children, modalClass, mscss,innerRef } = this.props
        return (
            <div ref={innerRef} className={modalClass}>
                <div className={mscss}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Modal;
