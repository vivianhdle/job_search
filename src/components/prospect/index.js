import React, { Component } from 'react';
import AddJobProspect from './add_job_prospect';
import axios from 'axios';
import { SubmissionError } from 'redux-form';
import Modal from '../general/modals/modal';

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
    }

    render() {
        const required = values => (values || values ? undefined : 'Required Field');
        const number = values => (values && !/[0-9]?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})/gm.test(values)) ? 'Must be a valid phone number' : undefined;
        return (
            <div className="add-form-progress">
            <div>{this.state.errorMsg}</div>
                <div className="form">
                    <AddJobProspect add={this.handleAdd} goToTracker={this.goToTracker} required={required} number={number} />
                        
                </div>
            </div>
        )
    }
}


export default Prospect

