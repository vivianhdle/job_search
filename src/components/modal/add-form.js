import React from 'react';
import {reduxForm,Field, FormSection} from 'redux-form';
import Input from '../general';
import ContactForm from './contact';

const AddJobCardForm = props =>{
    const {add,handleSubmit}=props;
    return(
        <form onSubmit={handleSubmit(add)}>
            <div className="row">
                <Field id="progress" col="s12" name="progress" component={Input} label="Status"/>
            </div>
            <div className="row">
                <Field id="title" col="s12" name="title" component={Input} label="Job Title"/>
            </div>
            <div className="row">
                <Field id="link" col="s12" name="link" component={Input} label="Posting"/>
            </div>
            <div className="row">
                <Field id="company" col="s12" name="company" component={Input} label="Company Name"/>
            </div>
            <div className="row">
                <FormSection name='contact'>
                    <ContactForm/>
                </FormSection>
            </div>
            <div className="row">
                <Field id="note" col="s12" name="note" component={Input} label="Notes"/>
            </div>
            <button className="btn right green">Submit</button>
        </form>
    )
}

export default reduxForm({
    form:'add-job-card'
})(AddJobCardForm);
