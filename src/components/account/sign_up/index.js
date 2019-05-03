import React, {Component} from 'react';
import SignUpForm from './sign_up';
import Header from '../../general/header';
import './sign_up.scss';
import {connect} from 'react-redux';
import {signUp, signIn} from '../../../actions';


class SignUp extends Component{
    signUp= async values=>{
        const {email, password} = values;
        const signUpInfo = {
            user_name: values.user_name,
            email,
            password
        }
        const signInInfo = {
            email,
            password
        }
        await this.props.signUp(signUpInfo);
        this.props.signIn(signInInfo);
    }
    render(){
        return(
        <div className="signup-container row">
            <div className="signup-box col m6 offset-m3 s10 offset-s1">
                <Header alignment = "left-align" title="Sign Up" newClass = "teal-text text-darken-1"/>
                <SignUpForm signUp={this.signUp}/>
            </div>
        </div>
        )
    }
    
}

export default connect(null,{
    signUp:signUp,
    signIn:signIn
})(SignUp);