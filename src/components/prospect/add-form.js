import React from 'react';
import {reduxForm,Field, FormSection} from 'redux-form';
import Input from '../general/input';
import ContactForm from './contact';
import DropDown from './progress';

const AddJobCardForm = props =>{
    const {add,handleSubmit, onClick}=props;
    return(
        <form onSubmit={handleSubmit(add)} onClick ={onClick}>
            <div className="row application-title">
            Job Prospect
            </div>
                <DropDown/> 
            <div className="row">
                <Field id="title" col="s10 offset-s1" name="title" component={Input} label="Job Title"/>
            </div>
            <div className="row">
                <Field id="link" col="s10 offset-s1" name="link" component={Input} label="Posting"/>
            </div>
            <div className="row">
                <Field id="company" col="s10 offset-s1" name="company" component={Input} label="Company Name"/>
            </div>
            <div className="row">
                <FormSection name='contact' col="s10 offset-s1">
                    <ContactForm/>
                </FormSection>
            </div>
            <div className="row">
                <Field id="note" col="s10 offset-s1" name="note" component={Input} label="Notes"/>
            </div>
                <div className="btn-wrapper">
                    <button className="btn green submit-button">Submit</button>
                </div>
            
        </form>
    )
}

// function validate(title, company){
//     const error = {};

//     if (!title){
//         error.title = "Please enter your a job title/description";
//     }

//     if(!company){
//         error.company = "Please enter a company name";
//     }


//     return error;
// }

export default reduxForm({
    form:'add-job-card',
    // validate: validate
})(AddJobCardForm);
