import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

function SignUpForm(props){
    const {handleSubmit,signUp}=props;
    return(
        <div className="signup-form">
            <form onSubmit={handleSubmit(signUp)}>
                <div className="row">
                    <Field id="user_name" col="s10 offset-s1" name="user_name" component={Input} label="Username *" icon="person_outline"/>
                    <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email *" icon="mail_outline"/>
                    <Field id="password" col="s10 offset-s1" name="password" component={Input} label="Password *" type="password" icon="lock_open"/>
                    <Field id="confirmpass" col="s10 offset-s1" name="confirmpass" component={Input} label="Confirm Password *" type="password" icon="lock_open"/>
                </div>
                <div className="row">
                    <div className="s10 offset-s1 col">
                        <button className="btn-small blue-grey right">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )

}
function validate(values){
    const {email,password,confirmpass,user_name} = values
    const errors = {};
    if(!user_name){
        errors.user_name = 'Please enter your username';
    }
    if(!email){
        errors.email = 'Please enter your email';
    }
    if (!password){
        errors.password = 'Please enter a password';
    }
    if(!confirmpass){
        errors.confirmpass = 'Please confirm your password';
    }
    if(password !== confirmpass){
        errors.confirmpass = 'Passwords do not match';
    }
    return errors;
}


export default reduxForm({
    form: 'sign-up',
    validate:validate
})(SignUpForm);