import React, { Component } from 'react';
import Input from '../general/input';
import { Field, reduxForm } from 'redux-form';
import NoteList from '../view_card/note_list';
import ContactList from '../view_card/contact_list';
import { formatTime } from '../helpers';
import './edit_form_card.scss';
import DropDown from '../prospect/progress';
import Header from '../general/header';
import ActionButton from '../general/action_button';
import AddNote from '../cards/add_note_card';
import ReactDOM from 'react-dom';
import axios from 'axios';


class EditFormCard extends Component {
    async componentDidMount(){
        await ReactDOM.findDOMNode(this.link).getElementsByTagName("input")[0].focus();
        await ReactDOM.findDOMNode(this.company).getElementsByTagName("input")[0].focus();
        ReactDOM.findDOMNode(this.title).getElementsByTagName("input")[0].focus();
    }
    goToTracker = () =>{
        this.props.history.push(`/tracker/${this.props.match.params.id}`);
    }
    handleAdd = async values => {
        const newValues = {...values, "tracker_id": parseInt(this.props.match.params.id)}
        await axios.post('/api/update_tracker_item.php', newValues);
        this.goToTracker();
    }
    render() {
        const { title, company, contact = [], created, link, note = [], progress, handleChange, id , handleSubmit} = this.props;
        return (
            <div className="form">
                <form onSubmit={handleSubmit(this.handleAdd)}>
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
                <ActionButton icon="contacts" classes="blue-grey btn-floating add-contact" size="btn" />
                <AddNote id={id} />
                <ContactList contact={contact} edit="true" />
                <NoteList note={note} />
            </div>
        )
    }
}
export default reduxForm({
    form: 'edit-job-card',
    // validate: validate
})(EditFormCard);