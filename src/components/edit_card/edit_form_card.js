import React, { Component } from 'react';
import Input from '../general/input';
import { Field, reduxForm } from 'redux-form';
import NoteList from '../view_card/note_list';
import ContactList from '../view_card/contact_list';
import { formatTime } from '../helpers';
import './edit_form_card.scss';
import DropDown from '../prospect/progress';
import Header from '../general/header';
import ActionButton from '../general/buttons/action_button';
import AddNote from '../cards/add_note_card';
import AddContact from './add_contact/add_contact';


class EditFormCard extends Component {
    state={
        addContactOpen:false,
        addNoteOpen:false
    }
    addContactModal = () => {
        console.log('flipping the switch')
        this.setState({
            addContactOpen:true
        })
    }
    handleAddContact = (values) => {
        console.log('values:',values);
        //axios call here
    }
    render() {
        const { title, company, contact = [], created, link, note = [], progress, handleChange } = this.props;
        return (
                <div className="form">
                    {this.state.addContactOpen && <AddContact addContact={this.handleAddContact}/>}
                    <form>
                        <Header title="Edit Prospect" alignment="left-align" margin="5%" bgcolor="white"/>
                        <DropDown col="s10 offset-s1 col edit-progress"/>
                        <div className="row">
                            <Field id="title" col="s10 offset-s1" name="title" component={Input} onChange={handleChange} currentValue={title} label={!title && "Job Title"}/>
                        </div>
                        <div className="row">
                            <Field id="company" col="s10 offset-s1" name="company" onChange={handleChange} label={!company && "Company Name"} currentValue={company} component={Input} />
                        </div>
                        <div className="row">
                            <Field id="link" col="s10 offset-s1" name="link" component={Input} onChange={handleChange} currentValue={link} name="link" label={!link && "Posting Link"}/>
                        </div>
                        {this.state.addNoteOpen && <AddNote/>}
                    </form>
                    <ActionButton icon="contacts" classes="teal lighten-1 btn-floating add-contact" size="btn" handleClick={this.addContactModal}/>
                    <ActionButton icon="note_add" classes="teal lighten-1 btn-floating" size="btn" handleClick={this.addContactModal}/>
                    <ContactList contact={contact} edit="true"/>
                    <NoteList note={note}/>
                </div>
        )
    }
}
export default reduxForm({
        form: 'edit-job-card',
    // validate: validate
})(EditFormCard);