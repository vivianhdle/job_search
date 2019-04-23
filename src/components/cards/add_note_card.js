import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Field, FieldArray } from 'redux-form';
import TextArea from '../general/textarea';
import Input from '../general/input';
import NoteForm from './note_form';

class AddNote extends Component {
    state = {
        noteForm: [],
        noteCount: 0
    }
    componentDidMount(){
        this.addNewNote();
    }
    addNewNote = () => {
        let {noteForm, noteCount} = this.state;
        noteForm = [...noteForm, <NoteForm key={noteCount} name={`note${noteCount}`}/>]
        noteCount++;
        this.setState({
            noteForm,
            noteCount
        })
    }

    render() {
        const {noteForm} = this.state;
        return (
            <div className="action row center">
                {noteForm}
                <div className="btn-floating btn-small waves-effect blue-grey" onClick={this.addNewNote}>
                    <i className="material-icons">
                        add
                    </i>
                </div>
            </div>
        )
    }
}

export default AddNote;
