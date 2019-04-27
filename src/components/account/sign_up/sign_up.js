import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

function SignUpForm(props){
    const {handleSubmit,signUp}=props;
    return(
        <div className="signup-form">
            <form onSubmit={handleSubmit(signUp)}>
                <div className="row">
                    <Field id="username" col="s10 offset-s1" name="username" component={Input} label="Username *" icon="person_outline"/>
                    <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email *" icon="mail_outline"/>
                    <Field id="password" col="s10 offset-s1" name="password" component={Input} label="Password *" type="password" icon="lock_open"/>
                    <Field id="confirmpass" col="s10 offset-s1" name="confirmpass" component={Input} label="Confirm Password *" type="password" icon="lock_open"/>
                    
                </div>
                <div className="row">
                    <div className="s10 offset-s1 col">
                        <button className="btn-small blue-grey right">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    )

}


export default reduxForm({
    form: 'sign-up'
})(SignUpForm);