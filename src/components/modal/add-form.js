import React from 'react';
import {reduxForm,Field, FormSection} from 'redux-form';
import Input from '../general';
import ContactForm from './contact';
import DropDown from './progress';

const AddJobCardForm = props =>{
    const {add,handleSubmit}=props;
    return(
        <form onSubmit={handleSubmit(add)}>
            <div className="row application-title">
            Job Prospect
            </div>
            <div className="row dropdown">
                <DropDown/>
            </div>
            <div className="row">
                <Field id="title" col="s11" name="title" component={Input} label="Job Title"/>
            </div>
            <div className="row">
                <Field id="link" col="s11" name="link" component={Input} label="Posting"/>
            </div>
            <div className="row">
                <Field id="company" col="s11" name="company" component={Input} label="Company Name"/>
            </div>
            <div className="row">
                <FormSection name='contact'>
                    <ContactForm/>
                </FormSection>
            </div>
            <div className="row">
                <Field id="note" col="s11" name="note" component={Input} label="Notes"/>
            </div>
                <div className="btn-wrapper">
                    <button className="btn green submit-button">Submit</button>
                </div>
            
        </form>
    )
}

function validate(title, company){
    const error = {};

    if (!title){
        error.title = "Please enter your a job title/description";
    }

    if(!company){
        error.company = "Please enter a company name";
    }

    return error;
}

export default reduxForm({
    form:'add-job-card',
    validate: validate
})(AddJobCardForm);
