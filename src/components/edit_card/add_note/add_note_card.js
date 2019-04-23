import React, { Component, Fragment } from 'react';
import Modal from '../../general/modal';
import { reduxForm,Field } from 'redux-form';
import ActionButton from '../../general/buttons/action_button';
import Input from '../../general/input';

class AddNote extends Component {
    render() {
        const {addNote, handleSubmit} = this.props 
        return (
            <div className="action row center">
                <Modal modalClass="add-note-modal" mscss="note">
                    <form onSubmit={handleSubmit(addNote)}>
                        <Field id="note" col="s10 offset-s1" name="note" component={Input} label="Notes" />
                        <button className="btn blue-grey">submit</button>
                    </form>   
                </Modal>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-note',
})(AddNote);