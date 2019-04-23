import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NoteForm from './note_form';
import Modal from '../general/modal';
import ActionButton from '../general/action_button';

class AddNote extends Component {
    state={
        modalIsOpen: false
    }

    showModal=()=>{
        this.setState({
            modalIsOpen: true
        })
    }

    hideModal=()=>{
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        const {id} = this.props;
        const {modalIsOpen} = this.state;
        console.log('props', this.props)
        return (
            <div className="action row center">
                <Modal modalIsOpen={modalIsOpen} modalClass="add-note-modal" mscss="note">
                    <NoteForm name="note" id={id}/>
                </Modal>
                <ActionButton icon="note_add" classes="blue-grey btn-floating" size="btn" handleClick={this.showModal}/>
            </div>
        )
    }
}

export default AddNote;
