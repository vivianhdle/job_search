import React, { Component } from 'react';
import './sign_out';
import { connect } from 'react-redux';
import { signOut, signInGuest, signUpNewGuest } from '../../../actions';

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
        return (
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1 className="center">Thank you for using our application</h1>
                    <h2 className="center">You have been signed out</h2>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    signInGuest,
    signUpNewGuest,
    signOut
})(SignOut);