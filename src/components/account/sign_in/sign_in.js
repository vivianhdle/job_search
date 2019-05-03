import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

class SignInForm extends Component{
    render(){
        const {handleSubmit,signIn}=this.props
        return (
            <div className="signin-form field-input">
                <form onSubmit={handleSubmit(signIn)}>
                    <div className="row">
                        <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email *" icon="perm_identity"/>
                    </div>
                    <div className="row">
                        <Field id="password" col="s10 offset-s1" name="password" component={Input} label="Password *" type="password" icon="lock_open"/>
                    </div>
                    <div className="row">
                        <div className="s10 offset-s1 col">
                            <button className="btn-small blue-grey right field-input">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
function validate(values){
    const {email,password} = values;
    const errors = {};
    if(!email){
        errors.email = 'Please enter your email'
    }
    if (!password){
        errors.password = 'Please enter your password'
    }
    return errors;
}

export default reduxForm({
    form: 'sign-in-form',
    validate:validate
})(SignInForm);