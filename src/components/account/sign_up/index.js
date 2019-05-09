import React, {Component} from 'react';
import SignUpForm from './sign_up';
import Header from '../../general/header';
import './sign_up.scss';
import {connect} from 'react-redux';
import {signUp, signIn, clearAuthError} from '../../../actions';


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
    componentWillUnmount(){
        this.props.clearAuthError();
    }
    render(){
        const {error, errorMsg} = this.props;
        return(
        <div className="signup-container row">
            <div className="signup-box row m6 offset-m3 s10 offset-s1">
                <Header alignment = "left-align" title="Sign Up"/>
                <SignUpForm signUp={this.signUp}>
                    {error && 
                        <div className='errorMsg'>
                            <div className="col s10 offset-s1 left-align" >
                            <i className='material-icons prefix'>warning</i>
                            {errorMsg}
                            </div>
                        </div>}
                </SignUpForm>
            </div>
            
        </div>
        )
    }
    
}

function mapStateToProps(state){ 
    return{
        errorMsg: state.user.errorMsg,
        error: state.user.error
    }
}

export default connect(mapStateToProps,{
    signUp:signUp,
    signIn:signIn,
    clearAuthError: clearAuthError
})(SignUp);