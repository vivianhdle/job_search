import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import NotFound from '../404/404';
import SignIn from './sign_in';
import SignUp from './sign_up';
import SignOut from './sign_out';
import auth from '../../hoc/auth';

class AccountRoutes extends Component {
    componentDidMount(){
        this.props.handlePageRender('Career Assistant');
    }
    render(){
        const {match} = this.props;
        return(
            <Switch>
                <Route path={`${match.path}/sign-in`} component={auth(SignIn, '/', false)}/>
                <Route path={`${match.path}/sign-up`} component={auth(SignUp, '/', false)}/>
                <Route path={`${match.path}/sign-out`} component={auth(SignOut, '/', true)}/>
                <Route component={NotFound}/>
            </Switch>
        )    
    }
}

export default AccountRoutes