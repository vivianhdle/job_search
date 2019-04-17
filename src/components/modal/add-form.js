import React from 'react';
import {reduxForm,Field} from 'redux-form';
import Input from '../general/input';

const AddJobCardForm = props =>{
    const {add,handleSubmit}=props;
    return(
        <form onSubmit={handleSubmit(add)}>
            <div className="row">
                <Field id="email" col="s12" name="email" component={Input} label="Email"/>
            </div>
            <div className="row">
            <Field id="email" col="s12" name="email" component={Input} label="Email"/>
            </div>
        </form>
    )
}

export default reduxForm({
    form:'add-job-card'
})(AddJobCardForm);