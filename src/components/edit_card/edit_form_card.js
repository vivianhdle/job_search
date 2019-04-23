import React, { Component } from 'react';
import Input from '../general/input';
import { Field, reduxForm } from 'redux-form';
import NoteList from '../view_card/note_list';
import ContactList from '../view_card/contact_list';
import './edit_form_card.scss';
import DropDown from '../prospect/progress';
import Header from '../general/header';
import ActionButton from '../general/buttons/action_button';
import AddNote from './add_note/add_note_card';
import AddContact from './add_contact/add_contact';
import ReactDOM from 'react-dom';
import axios from 'axios';


class EditFormCard extends Component {
    state={
        addContactOpen:false,
        addNoteOpen:false
    }

    async componentDidMount(){
        await ReactDOM.findDOMNode(this.link).getElementsByTagName("input")[0].focus();
        await ReactDOM.findDOMNode(this.company).getElementsByTagName("input")[0].focus();
        ReactDOM.findDOMNode(this.title).getElementsByTagName("input")[0].focus();
    }   
    
    handleAdd = async values => {
        const newValues = {...values, "tracker_id": parseInt(this.props.match.params.id)}
        await axios.post('/api/update_tracker_item.php', newValues);
        this.goToTracker();
    }

    addContactModal = () => {
        this.setState({
            addContactOpen:true
        })
    }

    exitContactModal = () => {
        this.setState({
            addContactOpen:false
        })
    }

    addNoteModal = () => {
        this.setState({
            addNoteOpen:true
        })
    }
    exitNoteModal = () => {
        this.setState({
            addNoteOpen:false
        })
    }


    goToTracker = () =>{
        this.props.history.push(`/tracker/${this.props.match.params.id}`);
    }

    handleAddContact = async values => {
        const{id} = this.props;
        const contactValue ={
            tracker_id: id,
            contact: values
        }
        const resp = await axios.post('/api/add_contact_item.php', contactValue);
        this.setState({
            addContactOpen:false
        })

    }
    handleAddNote = async values =>{
        const {id} = this.props;
        const noteValue = {
            tracker_id: id,
            note: values.note
        };
        const resp = await axios.post(`/api/add_note_item.php`, noteValue);
    }

    render() {
        const { title, company, contact = [], created, link, note = [], progress, handleChange, handleSubmit} = this.props;
        return (
                <div className="form">
                    {this.state.addContactOpen && <AddContact addContact={this.handleAddContact} exitModal={this.exitContactModal}/>}
                    {this.state.addNoteOpen && <AddNote addNote={this.handleAddNote} exitModal={this.exitNoteModal}/>}
                    <form onSubmit = {handleSubmit(this.handleAdd)}>
                        <Header title="Edit Prospect" alignment="left-align" margin="5%" bgcolor="white" />
                        <DropDown ref={(input)=>this.dropdown=input} col="s10 offset-s1 col edit-progress" />
                        <div className="row">
                            <Field ref={(input)=>this.title=input} id="title" col="s10 offset-s1" name="title" component={Input} onChange={handleChange} currentValue={title} label={!title && "Job Title"} />
                        </div>
                        <div className="row">
                            <Field ref={(input)=>this.company=input} id="company" col="s10 offset-s1" name="company" onChange={handleChange} label={!company && "Company Name"} currentValue={company} component={Input} />
                        </div>
                        <div className="row">
                            <Field ref={(input)=>this.link=input} id="link" col="s10 offset-s1" name="link" component={Input} onChange={handleChange} currentValue={link} name="link" label={!link && "Posting Link"} />
                        </div>
                        <div className="btn-wrapper row right-align">
                            <button className="btn blue-grey submit-button">Submit</button>
                        </div>
                    </form>
                    <ActionButton icon="contacts" classes="teal lighten-1 btn-floating add-contact" size="btn" handleClick={this.addContactModal}/>
                    <ActionButton icon="note_add" classes="teal lighten-1 btn-floating" size="btn" handleClick={this.addNoteModal}/>
                    <Header title="Contacts" alignment="left" newClass="edit-section-header"/>
                    <ContactList contact={contact} edit="true" />
                    <Header title="Notes" alignment="left" newClass="edit-section-header"/>
                    <NoteList note={note} edit={true}/>
                </div>
        )
    }
}
export default reduxForm({
    form: 'edit-job-card',
})(EditFormCard);