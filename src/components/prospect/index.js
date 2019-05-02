import React, { Component } from 'react';
import AddJobProspect from './add_job_prospect';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            let resp = null;
            if(localStorage.getItem('guest_id') && localStorage.getItem('guestSignedIn')){
                const guestValues = {...values, guest: true};
                resp = await axios.post('/api/add_tracker_item.php', guestValues)
            }else{
                resp = await axios.post('/api/add_tracker_item.php', values);
            }
            console.log(resp.data);
            if(!resp.data.success){
                this.setState({
                    errorMsg: resp.data.error,
                    error: true
                })
            }else{
                this.goToTracker();
            }
    }
    render() {
        const required = values => (values || values ? undefined : 'Required Field');
        const errorMsgCheck = /sign up/;
        let {errorMsg} = this.state;
        const link = (<Link to="/account/sign-up" key={"sign-up"}>sign up</Link>);
        if(errorMsgCheck.test(errorMsg)){
            let splitSignUp = errorMsg.split("sign up");
            splitSignUp.splice(1, 0, link);
            errorMsg = splitSignUp
        }
        return (
            <div className="add-form-progress">
                <div className="form">
                    <AddJobProspect add={this.handleAdd} goToTracker={this.goToTracker} required={required}/>
                </div>
                {this.state.error && 
                    <div className='errorMsg row'>
                    <i className='material-icons warning prefix'>warning</i>
                        <div className="col s10 offset-s1" >{errorMsg}</div>
                    </div>}
            </div>
            
        )
    }
}


export default Prospect

