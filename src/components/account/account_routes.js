import React from 'react';
import {Route,Switch} from 'react-router-dom';
import NotFound from '../404/404';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../../hoc/auth';

function AccountRoutes(props){
    const {match} = props;
    return(
        <Switch>
            <Route path={`${match.path}/sign-in`} component={auth(SignIn,'/',false)}/>
            <Route path={`${match.path}/sign-up`} component={auth(SignUp,'/')}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default AccountRoutes