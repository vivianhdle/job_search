import React, { Component } from 'react';
import Modal from './modals/modal';
import './error_handler.scss';

class ErrorHandler extends Component {
    render() {
        const { errorMsg, closeError } = this.props
        return (
            <Modal modalClass="error-modal" mscss="error-wrapper">
                <div>
                    <button className="exit" onClick={closeError}><i className="material-icons">close</i></button>
                </div>
                <div className="error-message-content center" >{errorMsg}</div>
            </Modal>
        )
    }
}

export default ErrorHandler;
