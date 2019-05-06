import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError  } from 'redux-form';
import Input from '../general/input';
import ContactForm from './contact';
import DropDown from './progress';
import Header from '../general/header';
import TextArea from '../general/textarea';
import './add_job_prospect.scss';

class AddJobProspect extends Component {
    state = {
        contactForm: [],
        contactCount: 0,
        
    }
    componentDidMount() {
        this.addNewContact();
    }

    
    addNewContact = () => {
        let { contactForm, contactCount } = this.state;
        contactForm = [...contactForm, <ContactForm key={contactCount} name={`contact${contactCount}`} />]
        contactCount++;
        this.setState({
            contactForm,
            contactCount
        })
    }

    
    render() {
        
        const { required, add, handleSubmit, children } = this.props;
        const { contactForm } = this.state;
        return (
            <form onSubmit={handleSubmit(add)}>
                <Header title="Add Job Prospect" alignment="left-align"/>
                <DropDown col="s10 l8 offset-s1 col offset-l2" required={required}/>
                <div className="row">
                    <Field id="title" col="s10 l8 offset-s1 col offset-l2" name="title" component={Input} label="Job Title *" icon="title" validate={[required]}/>
                    <Field id="company" col="s10 l8 offset-s1 col offset-l2" name="company" component={Input} label="Company Name *"icon="business" validate={[required]}/>
                    <Field id="link" col="s10 l8 offset-s1 col offset-l2" name="link" component={Input} label="Posting Link" icon="link" />
                </div>

                <div className="row contact-row">
                    {contactForm}
                </div>
                <div className="row">
                    <div className="col s10 l8 offset-s1 offset-l2 center">
                        <button type="button" className="btn-floating center btn-small waves-effect blue-grey" onClick={this.addNewContact}><i className="material-icons">add</i></button>
                    </div>
                </div>
                <div className="row">
                    <Field id="note" col="s10 l8 offset-s1 col offset-l2" name="note" component={TextArea} label="Notes" icon="note_add"/>
                </div>
                {children}
                <div className="row">
                    <div className="col s10 l8 offset-s1 offset-l2 center extra-contact">
                        <button className="btn blue-grey">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'add-job-card'
})(AddJobProspect);
