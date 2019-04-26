import React, { Component } from 'react';
import AddJobProspect from './add_job_prospect';
import axios from 'axios';
import { SubmissionError } from 'redux-form';

class Prospect extends Component {
    state={
        errorMsg: ''
    }
    goToTracker = () => {
        this.props.history.push('/tracker');
    }

    handleAdd = async values => {
        let newContact = [];
            for (let object in values) {
                if (typeof values[object] === 'object')
                    newContact.push(values[object]);
            }
            values = {
                progress: values.progress,
                company: values.company,
                title: values.title,
                link: values.link,
                contact: newContact,
                note: values.note
            }
            const resp = await axios.post('/api/add_tracker_item.php', values);
            console.log(resp);
            // if(resp){
            //     this.goToTracker();
            // }
            // if(!resp){

            // }
    }

    render() {
        const required = values => (values || values ? undefined : 'Required Field');
        const number = values => (values && !/[0-9]?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})/gm.test(values)) ? 'Must be a valid phone number' : undefined;
        const minLength = values => (values && values < 10 ? "Must Be at Least 10 characters long" : undefined);
        return (
            <div className="add-form-progress">
                <div className="form">
                    <AddJobProspect add={this.handleAdd} goToTracker={this.goToTracker} required={required} number={number} minLength={minLength}/>
                </div>
            </div>
        )
    }
}


export default Prospect









/*
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        return sleep(1000).then(() => {
            if (!values.title) {
                throw new SubmissionError({
                    title: "You must enter a Job Title",
                    _error: 'Creation Failed'
                })

            }
            if (!values.company) {
                throw new SubmissionError({
                    company: "You must enter a Company Name",
                    _error: 'Creation Failed'
                })
            }
            if(!values.progress){
                throw new SubmissionError({
                    progress: "You must choose an App status",
                    _error: 'Creation Failed'
                })
            }
            
            
            
        })
*/