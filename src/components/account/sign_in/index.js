import React, {Component} from 'react';
import SignInForm from './sign_in';
import './sign_in.scss';
import Header from '../../general/header';
import {connect} from 'react-redux';
import {signIn} from '../../../actions';


class SignIn extends Component{
    signIn=values=>{
        this.props.signIn(values);
    }
    render(){
        return(
            <div className="signin-container row">
                <div className="signin-box col m6 offset-m3 s10 offset-s1">
                    <div className="signin-content">
                        <div className="photo"></div>
                    </div>
                    <Header alignment = "left-align" title="Sign In" newClass = "teal-text text-darken-1"/>
                    <SignInForm signIn={this.signIn}/>
                </div>
            </div>
        )
    }
}

export default connect(null,{
    signIn:signIn
})(SignIn);
