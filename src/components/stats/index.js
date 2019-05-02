import React, { Component } from 'react';
import './stats.scss'
import axios from 'axios';
import StatTable from './stats_table';
import Loader from '../general/loader';
import { connect } from 'react-redux';
import { signInGuest, signUpNewGuest } from '../../actions';
import ErrorHandler from '../general/error_handler';

class Stats extends Component {
    constructor(props){
        super(props);
        this.timeoutID = null;
        this.state = {
            metaStats: null,
            errorMsg: '',
            error: false
        }
    }
    async componentDidMount(){
        this.props.handlePageRender('Career Assistant');
        await this.checkSession();
        this.getStats();
        this.timeoutID = setTimeout(()=>{
            this.photo.style.opacity = '1';
            this.greeting.style.opacity="0";
        },2000);
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutID);
    }
    async checkSession() {
        const resp = await axios.get('./api/sessiontest.php');
        const { success } = resp.data;
        if (!success) {
            this.clearUserLog();
            if (localStorage.getItem('guest_id')) {
                await this.props.signInGuest();
            } else if (!localStorage.getItem('guest_id')) {
                await this.props.signUpNewGuest();
            }
        } else {
            if (localStorage.getItem('guest_id') && !localStorage.getItem('signedIn') && !localStorage.getItem('guestSignedIn') && this.props.location.state !== 'signedOut') {
                await this.props.signInGuest();
            } else if (!localStorage.getItem('guest_id') && !localStorage.getItem('signedIn') && !localStorage.getItem('guestSignedIn') && this.props.location.state !== 'signedOut') {
                await this.props.signUpNewGuest();
            }
        }
    }
    clearUserLog() {
        localStorage.removeItem('signedIn');
        localStorage.removeItem('guestSignedIn');
    }
    async getStats() {
        const resp = await axios.get('./api/get_user_stats.php');
        if (resp.data.success) {
            this.setState({
                metaStats: resp.data.data
            })
        } else {
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }
    }
    closeErrorModal = () => {
        this.setState({
            error: false
        })
    }
    goToProspect = () => {
        this.props.history.push('/prospect');
    }
    render() {
        if (this.state.metaStats) {
            const {metaStats} = this.state;
            return (
                <div className="stats-page row">
                    {this.state.error && <ErrorHandler errorMsg={this.state.errorMsg} closeError={this.closeErrorModal} />}
                    <div className="greeting-content">
                        <div className="greeting center" ref={(element) => { this.greeting = element }}>
                            <div className="greeting-text">
                                {this.state.metaStats.user_name === 'Guest' ? 'Welcome,' : 'Welcome back,'}
                                <div>
                                    {metaStats.user_name}!
                            </div>
                            </div>
                        </div>
                        <div className="greeting-photo" ref={(element) => { this.photo = element }}></div>
                    </div>
                    <StatTable {...metaStats} {...this.props} />
                    <div className="col s10 offset-s1 center add-prospect">
                        <button onClick={this.goToProspect} className="btn-small blue-grey">{metaStats['total_prospects'] ? 'Add Job Prospect':'Get Started!'}</button>
                    </div>
                </div>
            )
        } else {
            return <Loader />
        }
    }
}

export default connect(null, {
    signInGuest,
    signUpNewGuest
})(Stats);