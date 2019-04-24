import React, { Component, Fragment } from 'react';
import Modal from '../../general/modal';
import { reduxForm,Field, initialize } from 'redux-form';
import ActionButton from '../../general/buttons/action_button';
import Input from '../../general/input';
import Header from '../../general/header';
import TextArea from '../../general/textarea';
import ReactDOM from 'react-dom';
import './edit_note.scss';
import axios from 'axios';
import {connect} from 'react-redux';

class EditNote extends Component {

    componentDidMount() {
        const actions = initialize('add-note', {note: this.props.fieldInput});
        this.props.dispatch(actions);
    }
    
    handleEditNote = async values => {
        const { id } = this.props
        const editNoteValues = {
            id: id,
            note: values.note
        }
        axios.post('/api/update_note_item.php', editNoteValues);
        this.props.view();
    }
    handleDeleteNote = async () => {
        const { id } = this.props;
        await axios.post('/api/delete_note_item.php', { "id": id });
        this.props.view();
    }
    render() {
        const { handleSubmit, closeModal } = this.props;
        return (
            <div className="action row">
                <Modal modalClass="edit-note-modal" mscss="note">
                    <div>
                        <button className="exit" onClick={closeModal}><i className="material-icons">close</i></button>
                    </div>
                    <Header title="Edit Note" newClass="col s10 offset-s1"/>
                    <form className="center" onSubmit={handleSubmit(this.handleEditNote)} >
                        <Field id="note" col="s10 offset-s1" name="note" component={TextArea} />
                        <button className="btn blue-grey">SUBMIT</button>
                    </form>
                    <button className="trash right" onClick={this.handleDeleteNote}><i className="material-icons text-darken-2 grey-text">delete</i></button>
                </Modal>
            </div>
        )
    }
}

export default connect()( reduxForm({
    form: 'add-note',
})(EditNote));