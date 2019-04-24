import React, { Component, Fragment } from 'react';
import Modal from '../../general/modal';
import { reduxForm,Field } from 'redux-form';
import Header from '../../general/header';
import Input from '../../general/input';
import TextArea from '../../general/textarea';
import './add_note.scss';

class AddNote extends Component {
    render() {
        const {addNote, handleSubmit,exitModal} = this.props 
        return (
            <div className="action row">
                <Modal modalClass="add-note-modal" mscss="note">
                    <button onClick={exitModal}><i className="material-icons exit">close</i></button>
                    <Header title="Add Note" newClass="col s10 offset-s1"/>
                    <form onSubmit={handleSubmit(addNote)} className="center">
                        <Field id="note" col="s10 offset-s1" name="note" component={TextArea} label="Notes" />
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