import React, { Component } from 'react';
import AddJobProspect from './add_job_prospect';
import axios from 'axios';
import { SubmissionError } from 'redux-form';
import Modal from '../general/modals/modal';

class Prospect extends Component {
    state={
        errorMsg: '',
        error: false
    }
    componentDidMount(){
        this.props.handlePageRender('Job Tracker');
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
            let {link, progress, company, note, title} = values;
            if(link){
            const regexTest= /^https?:\/\//;
            const result = regexTest.test(link);
            if(!result){
                link = 'https://'+link;
            }else{
                link;
            }
            }
            
            values = {
                progress,
                company,
                title,
                link,
                contact: newContact,
                note
            }
            const resp = await axios.post('/api/add_tracker_item.php', values);
            if(!resp.data.success){
                this.setState({
                    errorMsg: resp.data.error,
                    error: false
                })
            }else{
                this.goToTracker();
            }
    }
    closeErrorModal = ()=>{
        this.setState({
            error: false
        })
    }
    render() {
        const required = values => (values || values ? undefined : 'Required Field');
        return (
            <div className="add-form-progress">
            {this.state.error && <ErrorHandler errorMsg={this.state.errorMsg} closeError={this.closeErrorModal}/>}
                <div className="form">
                    <AddJobProspect add={this.handleAdd} goToTracker={this.goToTracker} required={required} />
                        
                </div>
            </div>
        )
    }
}


export default Prospect

