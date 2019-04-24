import React, { Component, Fragment } from 'react';
import Modal from '../../general/modal';
import { reduxForm, Field } from 'redux-form';
import ActionButton from '../../general/buttons/action_button';
import Input from '../../general/input';
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
            <div className="action row center">
                <Modal modalClass="add-note-modal" mscss="note">
                    <div className=" btn-wrapper row left-align delete">
                        <button className=" btn white" onClick={closeModal}>
                            <i className="material-icons red-text text-darken-1 white">close</i>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(this.handleEditNote)} >
                        <Field ref={(textarea) => { this.editNote = textarea }} id="note" col="s10 offset-s1" name="note" handleChange={this.handleChange} component={TextArea} currentValue={this.state.note} />
                        <div className="btn-wrapper row left-align update">
                            <i className="medium material-icons prefix grey-text text-darken-1">update</i>
                            <button className="btn blue-grey">submit</button>
                        </div>
                    </form>
                    <div className="btn-wrapper row left-align delete">
                        <i className="medium material-icons prefix grey-text text-darken-1">delete</i>
                        <button className="btn red darken-1" onClick={this.handleDeleteNote}>delete</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-note',
})(EditNote);