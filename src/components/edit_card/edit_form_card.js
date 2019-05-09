import React, { Component } from 'react';
import Input from '../general/input';
import { Field, reduxForm, initialize } from 'redux-form';
import NoteList from '../view_card/note_list';
import ContactList from '../view_card/contact_list';
import './edit_form_card.scss';
import DropDown from '../prospect/progress';
import Header from '../general/header';
import ActionButton from '../general/buttons/action_button';
import AddNote from './add_note/add_note_card';
import AddContact from './add_contact/add_contact';
import axios from 'axios';
import { connect } from 'react-redux';
import DeleteModal from '../general/modals/delete_confirmation';

class EditFormCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            addContactOpen: false,
            addNoteOpen: false,
            deleteConfirmation:false,
            errorMsg: '',
            error: false
        }
        this.getData = props.getData
    }
    componentDidMount() {
        const action = initialize('edit-job-card', { title: this.props.title, link: this.props.link, company: this.props.company, progress: this.props.progress })
        this.props.dispatch(action);
    }
    handleUpdate = async values => {
        const newValues = {...values, "tracker_id": parseInt(this.props.match.params.id) }
        const resp = await axios.post('/api/update_tracker_item.php', newValues);
        if(resp.data.success){
            this.goToViewMode();
            this.getData();
        }else{
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }
    }
    toggleContactModal = () => {
        const {addContactOpen} = this.state
        this.setState({
            addContactOpen: !addContactOpen
        })
    }
    toggleNoteModal = () => {
        const {addNoteOpen} = this.state
        this.setState({
            addNoteOpen: !addNoteOpen
        })
    }
    goToViewMode = () => {
        this.props.history.push(`/tracker/${this.props.match.params.id}`);
    }
    goToTracker = () => {
        this.props.history.push(`/tracker`);
    }
    handleAddContact = async values => {
        const { id } = this.props;
        const contactValue = {
            tracker_id: id,
            contact: values
        }
        const resp = await axios.post('/api/add_contact_item.php', contactValue);
            if(resp.data.success){
                await this.getData();
                this.toggleContactModal();
            }else{
                this.setState({
                    errorMsg: resp.data.error,
                    error: true
                })
            }
    }
    handleAddNote = async values => {
        const { id } = this.props;
        const noteValue = {
            tracker_id: id,
            note: values.note
        };
        const resp = await axios.post(`/api/add_note_item.php`, noteValue);
        if(resp.data.success){
            await this.getData();
            this.toggleNoteModal();
        }else{
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }
    }
    deleteConfirmationToggle=()=>{
        this.state.deleteConfirmation ? this.setState({
            deleteConfirmation:false
        }):this.setState({
            deleteConfirmation:true
        })
    }
    deleteJobProspect = async () => {
        if(this.state.deleteConfirmation){
        const {id}=this.props.match.params;
        const resp = await axios.get(`/api/delete_tracker_item.php?tracker_id=${id}`);
        if(resp.data.success){
            this.goToTracker();
        }else{
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }}

    }
    closeErrorModal = ()=>{
        this.setState({
            error: false
        })
    }
    render() {
        const { contact = [], note = [], progress, handleSubmit, required, linkCheck } = this.props;
        return (
            <div className="form">
                <ActionButton icon="delete_forever" classes="btn-floating delete-prospect" size="btn" handleClick={this.deleteConfirmationToggle}/>
                {this.state.addContactOpen && <AddContact addContact={this.handleAddContact} exitModal={this.toggleContactModal} />}
                {this.state.addNoteOpen && <AddNote addNote={this.handleAddNote} exitModal={this.toggleNoteModal} />}
                {this.state.deleteConfirmation && <DeleteModal handleDelete={this.deleteJobProspect} closeModal={this.deleteConfirmationToggle} modalClass="edit-note-modal" mscss="note"/>}
                <form onSubmit={handleSubmit(this.handleUpdate)}>
                    <Header title="Edit Job Prospect" alignment="left-align" />
                    <DropDown ref={(input) => this.dropdown = input} col="s10 offset-s1 col edit-progress" progress={progress} required={required}/>
                    <div className="row">
                        <Field ref={(input) => this.company = input} id="company" col="s10 offset-s1" name="company" label={"Company Name *"} component={Input} validate={required} icon="business"/>
                    </div>
                    <div className="row">
                        <Field ref={(input) => this.title = input} id="title" col="s10 offset-s1" name="title" component={Input} label={"Job Title *"} validate={required} icon="title"/>
                    </div>
                    <div className="row">
                        <Field ref={(input) => this.link = input} id="link" col="s10 offset-s1" name="link" component={Input} label="Posting Link" icon="link" validate={linkCheck}/>
                    </div>
                    {this.state.error &&
                            <div className='errorMsg row'>
                                <div className="col s10 offset-s1 left-align" >
                                    <i className='material-icons prefix'>warning</i>
                                    {this.state.errorMsg = 'No alterations were made.'}
                                </div>
                            </div>}
                    <div className="btn-wrapper row right-align">
                        <button className="btn save-button">SAVE</button>
                    </div>
                </form>
                <Header title="Contacts" alignment="left" newClass=" edit-section-header" addButton={true} addHandler={this.toggleContactModal}/>
                {contact.length ? <ContactList contact={contact} edit={true} update={this.getData} /> : <ContactList css={{cursor:"auto"}} contact={[{ name: 'Please Add a Contact', phone: 0, email: '', id: 1 }]} view={this.goToViewMode} />}
                <Header title="Notes" alignment="left" newClass=" edit-section-header" addButton={true} addHandler={this.toggleNoteModal}/>
                {note.length ? <NoteList note={note} edit={true} update={this.getData} /> : <NoteList css={{cursor:"auto"}} note={[{ input: 'Please Add a Note', created: "1970-01-01 00:00:00", id: 1 }]} view={this.goToViewMode} />}
            </div>
        )
    }
}
export default connect()(reduxForm({
    form: 'edit-job-card',
})(EditFormCard));