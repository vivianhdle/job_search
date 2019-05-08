import React, {Component} from 'react';
import SignInForm from './sign_in';
import './sign_in.scss';
import Header from '../../general/header';
import {connect} from 'react-redux';
import {signIn} from '../../../actions';



class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            error: false
        }
    }
    signIn=values=>{
        const {error} = this.props;
        this.props.signIn(values);
        this.setState({
            error
        });
    }
    componentWillUnmount(){
        this.setState({
            error: false
        });
    }
    render(){
        const {error, errorMsg} = this.props;
        return(
            <div className="signin-container row">
                <div className="signin-box row m6 offset-m3 s10 offset-s1">
                    <Header alignment = "left-align" title="Sign In"/>
                    <SignInForm signIn={this.signIn}/>
                    {this.state.error && 
                    <div className='errorMsg row'>
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
    signIn:signIn
})(SignIn);
