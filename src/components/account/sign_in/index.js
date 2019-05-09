import React, {Component} from 'react';
import SignInForm from './sign_in';
import './sign_in.scss';
import Header from '../../general/header';
import {connect} from 'react-redux';
import {signIn, clearAuthError} from '../../../actions';



class SignIn extends Component{
    constructor(props){
        super(props);
    }
    signIn= values=>{
        this.props.signIn(values);
    }
    componentWillUnmount(){
        this.props.clearAuthError();
    }
    render(){
        const {error, errorMsg} = this.props;
        return(
            <div className="signin-container row">
                <div className="signin-box row m6 offset-m3 s10 offset-s1">
                    <Header alignment = "left-align" title="Sign In"/>
                    <SignInForm signIn={this.signIn}/>
                    {error && 
                    <div className='errorMsg'>
                        <div className="col s10 offset-s1 left-align" >
                        <i className='material-icons prefix'>warning</i>
                        {errorMsg}
                        </div>
                    </div>}
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
    signIn:signIn,
    clearAuthError: clearAuthError
})(SignIn);
