import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Field, FieldArray } from 'redux-form';
import TextArea from '../general/textarea';
import Input from '../general/input';
import NoteForm from './note_form';
import Modal from '../general/modal';

class AddNote extends Component {
    state={
        modalIsOpen: false
    }
    // state = {
    //     noteForm: [],
    //     noteCount: 0
    // }
    // componentDidMount(){
    //     this.addNewNote();
    // }
    // addNewNote = () => {
    //     let {noteForm, noteCount} = this.state;
    //     noteForm = [...noteForm, <NoteForm key={noteCount} name={`note${noteCount}`}/>]
    //     noteCount++;
    //     this.setState({
    //         noteForm,
    //         noteCount
    //     })
    // }

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
        const {modalIsOpen} = this.state;
        //const {noteForm} = this.state;
        return (
            <div className="action row center">
                <Modal modalIsOpen={modalIsOpen} modalClass="add-note-modal" mscss="note">
                    <NoteForm name="note"/>
                </Modal>
                <div className="btn-floating btn-small waves-effect blue-grey" onClick={this.showModal}>
                    <i className="material-icons">
                        add
                    </i>
                </div>
            </div>
        )
    }
}

export default AddNote;
