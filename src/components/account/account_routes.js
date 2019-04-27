import React from 'react';
import {Route,Switch} from 'react-router-dom';
import NotFound from '../404/404';
import SignIn from './sign_in';
import SignUp from './sign_up';

function AccountRoutes(props){
    const {match} = props;
    console.log(props);
    return(
        <Switch>
            <Route path={`${match.path}/sign-in`} component={SignIn}/>
            <Route path={`${match.path}/sign-up`} component={SignUp}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default AccountRoutes