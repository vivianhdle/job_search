import React, { Component } from 'react';
import './progress.scss';
import AddForm from './add-form';
import axios from 'axios';
import { SubmissionError } from 'redux-form';

class Prospect extends Component {
    goToTracker = () => {
        this.props.history.push('/tracker');
    }
    handleAdd = async values => {
        console.log('values', values);
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
            console.log('does it work');
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
            const resp = axios.post('/api/add_tracker_item.php', values).then(
                this.goToTracker()
            );
            console.log("resp",resp);
            
        })
    }


    render() {
        return (
            <div className="add-form-progress">
                <div className="form">
                    <AddForm add={this.handleAdd} goToTracker={this.goToTracker} />
                </div>
            </div>
        )
    }
}


export default Prospect