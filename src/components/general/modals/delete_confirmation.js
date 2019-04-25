import React from 'react';
import Modal from './modal';
import './delete_confirmation.scss';
import ActionButton from '../buttons/action_button';

function DeleteConfirmation(props){
    const {handleDelete,closeModal}=props;
    return(
        <Modal modalClass="delete-confirmation" mscss="delete-area">
            <div className="confirm-icon center">
                <div className="icon-text center">
                    <i className="material-icons grey-text text-darken-2">delete_forever</i>
                </div>
            </div>
            <div className="confirm-text center row">
                <div className="col s10 offset-s1">Are you sure you want to delete this forever?</div>
            </div>
            <div className="confirm-btns center row">
                <div className="col s10 offset-s1">
                    <button onClick={handleDelete} className="btn btn-large green-text transparent">YES</button>
                    <button onClick={closeModal} className="btn btn-large red-text transparent">NO</button>
                </div>
            </div>
        </Modal>
    
    )
}




export default DeleteConfirmation