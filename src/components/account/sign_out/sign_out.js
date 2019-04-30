import React, { Component } from 'react';
import './sign_out';
import { connect } from 'react-redux';
import { signOut, signInGuest, signUpNewGuest } from '../../../actions';
import Loader from '../../general/loader';

class SignOut extends Component {
    async componentDidMount() {
        this.props.signOut();
        if(localStorage.getItem('guest_id')){
            await this.props.signInGuest();
        }else{
            await this.props.signUpNewGuest();
        }
        this.props.history.push('/', 'signedOut');
    }
    render() {
        debugger;
        return (
            <Loader />
        )
    }
}

export default connect(null, {
    signInGuest,
    signUpNewGuest,
    signOut
})(SignOut);