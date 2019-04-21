import React, { Component, Fragment } from 'react';
import Input from '../general/input';
import { Field, reduxForm, FormSection } from 'redux-form';
import ContactForm from '../prospect/contact';
import TextArea from '../general/textarea';
import NoteList from './note_list';
import ContactList from './contact_list';
import { formatTime } from '../helpers';
import Header from '../general/header';
import './edit_form_card.scss';



class EditFormCard extends Component {
    state = {
        respData: null
    }
    componentDidMount(){
        this.setState({
            respData: this.props.respData
        })
    }
    handleChange = e => {
        const {respData} = this.state;
        respData[e.target.name] = e.target.value;
        this.setState({
            respData
        })
    }
    render() {
        const { title, company, contact = [], created, link, note = [], progress } = this.props.respData;
        return (
            <Fragment>
                <Header title={progress} bgcolor="rgba(243, 243, 243, 0.856)" />
                <form action="">
                    <div className="row">
                        <Field id="company" col="s10 offset-s1" onChange={this.handleChange} currentValue={company} name="company" component={Input} />
                        <Field id="title" col="s10 offset-s1"  onChange={this.handleChange}currentValue={title} name="title" component={Input} />
                        <Field id="link" col="s10 offset-s1"  onChange={this.handleChange}currentValue={link} name="link" component={Input} />
                    </div>
                    <div className="row">
                        <div className="s10 right-align offset-s1 col view-main-text created" col="s10 offset-s1" ><em>Added {formatTime(created)}</em></div>
                    </div>
                    <ContactList contact={contact} />
                    <NoteList note={note} />
                </form>
            </Fragment>
        )
    }
}

export default reduxForm({
    form: 'edit-job-card',
    // validate: validate
})(EditFormCard);