import React, { Component, Fragment } from 'react';
import Modal from '../../general/modal';
import { reduxForm, Field } from 'redux-form';
import ActionButton from '../../general/buttons/action_button';
import Input from '../../general/input';
import Header from '../../general/header';
import TextArea from '../../general/textarea';
import ReactDOM from 'react-dom';
import './edit_note.scss';
import axios from 'axios';

class EditNote extends Component {
    state = {
        note: ''
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.editNote).getElementsByTagName("textarea")[0].focus();
        const { fieldInput } = this.props;
        this.setState({
            note: fieldInput
        })
    }
    handleChange = e => {
        let { note } = this.state;
        note = e.target.value;
        this.setState({
            note: note
        })
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
                        <button className="exit" onClick={closeModal}><i className="material-icons red-text">close</i></button>
                        <button className="trash" onClick={this.handleDeleteNote}><i className="material-icons grey-text">delete</i></button>
                    </div>
                    <Header title="Edit Note" newClass="col s10 offset-s1"/>
                    <form className="center" onSubmit={handleSubmit(this.handleEditNote)} >
                        <Field ref={(textarea) => { this.editNote = textarea }} id="note" col="s10 offset-s1" name="note" handleChange={this.handleChange} component={TextArea} currentValue={this.state.note} />
                        {/* <ActionButton icon="done" classes="green lighten-1 submit-contact"size="btn"/> */}
                        <button className="btn blue-grey">SUBMIT</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-note',
})(EditNote);