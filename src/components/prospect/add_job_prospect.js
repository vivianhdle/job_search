import React, { Component } from 'react';
import { reduxForm, Field, initialize} from 'redux-form';
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
        const action = initialize('add-job-card', {progress: this.props.progress.split('%20').join(' ')});
        this.props.dispatch(action);
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
        
        const { required, add, handleSubmit, children} = this.props;
        const { contactForm } = this.state;
        const progress = this.props.progress.split('%20').join(' ');
        return (
            <form onSubmit={handleSubmit(add)}>
                <Header title="Add Job Prospect" alignment="left-align" col="col s10 offset-s1"/>
                <DropDown col="s10 offset-s1 col " required={required} progress={progress}/>
                <div className="row">
                    <Field id="company" col="s10 offset-s1 col " name="company" component={Input} label="Company Name *"icon="business" validate={[required]}/>
                    <Field id="title" col="s10  offset-s1 col " name="title" component={Input} label="Job Title *" icon="title" validate={[required]}/> 
                    <Field id="link" col="s10  offset-s1 col " name="link" component={Input} label="Posting Link" icon="link" />
                </div>

                <div className="row contact-row">
                    {contactForm}
                </div>
                <div className="row">
                    <div className="col s10 offset-s1 extra-contact center">
                        <button type="button" className="btn-floating center btn-small waves-effect" onClick={this.addNewContact}><i className="material-icons">add</i></button>
                    </div>
                </div>
                <div className="row">
                    <Field id="note" col="s10 offset-s1 col " name="note" component={TextArea} label="Notes" icon="note_add"/>
                </div>
                {children}
                <div className="row">
                    <div className="col s10  offset-s1 right-align extra-contact">
                        <button className="btn">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'add-job-card'
})(AddJobProspect);
