import React, { Component } from 'react';
import './progress.scss';
import AddForm from './add-form';
import axios from 'axios';

class Prospect extends Component {
    goToTracker = () =>{
        this.props.history.push('/');
    }

    handleAdd = async values => {
        console.log(values);
        const resp = await axios.post('/api/add_tracker_item.php', values);
        this.goToTracker();
    }

    render() {
        return (
            <div className="add-form-progress">
                <div className="form">
                    <AddForm add={this.handleAdd} goToTracker={this.goToTracker}/>
                </div>
            </div>
        )
    }
}


export default Prospect