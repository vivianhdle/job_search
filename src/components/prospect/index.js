import React, { Component } from 'react';
import './progress.scss';
import AddForm from './add-form';
import axios from 'axios';

class Prospect extends Component {
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
        await axios.post('/api/add_tracker_item.php', values);
        this.goToTracker();
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