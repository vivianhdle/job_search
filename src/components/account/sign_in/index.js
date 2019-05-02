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
        const {error, errorMsg} = this.props;
        return(
            <div className="signin-container row">
                <div className="signin-box col m6 offset-m3 s10 offset-s1">
                    <div className="signin-content">
                    </div>
                    <Header alignment = "left-align" title="Sign In" newClass = "teal-text text-darken-1"/>
                    {error && 
                    <div className='errorMsg row'>
                        <i className='material-icons warning prefix'>warning</i>
                        <div className="col s10 offset-s1" >{errorMsg}</div>
                    </div>}
                    <SignInForm signIn={this.signIn}/>
                    
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
    signIn:signIn
})(SignIn);
