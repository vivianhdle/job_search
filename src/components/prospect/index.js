import React, { Component, Fragment } from 'react';
import AddJobProspect from './add_job_prospect';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FeatureDiscovery from '../general/feature_discovery/';
import '../general/feature_discovery/feature_discovery_text';

class Prospect extends Component {
    state={
        errorMsg: '',
        error: false
    }
    componentWillUnmount(){
        localStorage.removeItem('newGuestAdd');
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
        const text = featureDiscoveryText.addPage;
        const title = featureDiscoveryTitle.addPage;
        const required = values => {(values || values ? undefined : 'Required Field');}
        const errorMsgCheck = /sign up/;
        let {errorMsg} = this.state;
        const link = (<Link to="/account/sign-up" key={"sign-up"}>sign up</Link>);
        if(errorMsgCheck.test(errorMsg)){
            let splitSignUp = errorMsg.split("sign up");
            splitSignUp.splice(1, 0, link);
            errorMsg = splitSignUp
        }
        return (
            <Fragment>
            <div className="add-form-progress row">
                <div className="form">
                    <AddJobProspect add={this.handleAdd} goToTracker={this.goToTracker} required={required} progress={this.props.location.search.replace('?progress=', '')}>
                        {this.state.error && 
                        <div className='errorMsg col s10 offset-s1'>
                            <div><i className='material-icons warning'>warning</i>{errorMsg}</div>
                        </div>}
                    </AddJobProspect>
                </div>
                <FeatureDiscovery text={text} title={title} newGuest={localStorage.getItem('newGuestAdd')}/>
            </div>
            
            </Fragment>
        )
    }
}


export default Prospect

