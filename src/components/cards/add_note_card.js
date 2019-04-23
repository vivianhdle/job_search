import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NoteForm from './note_form';
import Modal from '../general/modal';
import ActionButton from '../general/buttons/action_button';

class AddNote extends Component {
    render() {
        const {id} = this.props;
        return (
            <div className="action row center">
                <Modal modalClass="add-note-modal" mscss="note">
                    <NoteForm name="note" id={id}/>
                </Modal>
                <ActionButton icon="note_add" classes="blue-grey btn-floating" size="btn" handleClick={this.showModal}/>
            </div>
        )
    }
}

export default AddNote;
