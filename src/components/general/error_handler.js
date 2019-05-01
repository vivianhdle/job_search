import React, { Component } from 'react';
import Modal from './modals/modal';
import './error_handler.scss';

class ErrorHandler extends Component {
    render() {
        const { errorMsg, closeError, redirect } = this.props
        return (
            <Modal modalClass="error-modal" mscss="error-wrapper">
                <div>
                    <button className="exit" onClick={closeError}><i className="material-icons">close</i></button>
                </div>
                <div className="error-message-content center" >{errorMsg}</div>
                {redirect && <button className="btn blue-grey" onClick={redirect}>Sign Up</button>}
            </Modal>
        )
    }
}

export default ErrorHandler;
