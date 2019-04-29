import React, {Component} from 'react';
import './stats.scss'
import axios from 'axios';
import StatTable from './stats_table';
import Loader from '../general/loader';
import { connect } from 'react-redux';
import { signInGuest, signUpNewGuest } from '../../actions';

class Stats extends Component {
    state={
        metaStats:null
    }
    componentDidMount(){
        this.props.handlePageRender('Career Assistant');
        this.checkSession();
        if(localStorage.getItem('guest_id') && !localStorage.getItem('signedIn') && !localStorage.getItem('guestSignedIn') && this.props.location.state !== 'signedOut'){
            this.props.signInGuest();
        }else if(!localStorage.getItem('guest_id') && !localStorage.getItem('signedIn') && !localStorage.getItem('guestSignedIn') && this.props.location.state !== 'signedOut'){
            this.props.signUpNewGuest();
        }
        this.getStats();
        // setTimeout(()=>{
        //     this.photo.style.opacity = '1';
        //     this.greeting.style.opacity="0";
        // },2000)
        //turn on after debug
    }
    async checkSession(){
        const resp = await axios.get('./api/sessiontest.php');
        const {success} = resp.data;
        if(!success && localStorage.getItem('guest_id')){
            this.clearUserLog();
            this.props.signInGuest();
        }else if(!success && !localStorage.getItem('guest_id')){
            this.clearUserLog();
            this.props.signUpNewGuest();
        }
    }
    clearUserLog(){
        localStorage.removeItem('signedIn');
        localStorage.removeItem('guestSignedIn');
    }
    async getStats(){
        const resp = await axios.get('./api/get_user_stats.php');
        this.setState({
            metaStats:resp.data.data
        })
    }
    render(){
        if (this.state.metaStats){
            const {user_name} = this.state.metaStats
            return(
                <div className="stats-page row">
                    <div className="greeting-content">
                        <div className="greeting center" ref={(element)=>{this.greeting = element}}>
                            <div className="greeting-text grey-text text-darken-2">
                                {user_name === 'Guest' ? 'Welcome,' : 'Welcome back,'}
                                <div>
                                    {user_name}!
                                </div>
                            </div>
                        </div>
                        <div className="greeting-photo" ref={(element)=>{this.photo = element}}></div>
                    </div>
                    <StatTable {...this.state.metaStats}/>
                </div>
            )
        }else{
            return <Loader/>
        }
    }
}

export default connect(null, {
    signInGuest,
    signUpNewGuest
})(Stats);