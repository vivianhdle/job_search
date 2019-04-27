import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

class SignInForm extends Component{
    render(){
        const {handleSubmit,signIn}=this.props
        return (
            <div className="signin-form">
                <form onSubmit={handleSubmit(signIn)}>
                    <div className="row">
                        <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email *" icon="perm_identity"/>
                    </div>
                    <div className="row">
                        <Field id="password" col="s10 offset-s1" name="password" component={Input} label="Password *" type="password" icon="lock_open"/>
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
}

export default reduxForm({
    form: 'sign-in'
})(SignInForm);