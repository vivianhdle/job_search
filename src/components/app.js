import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../assets/css/app.scss';
import Tracker from './tracker';
import Nav from './nav';
import Prospect from './prospect';
import ViewCard from './view_card';
import EditCard from './edit_card';
import Error404 from './404';
import Stats from './stats';
import AccountRoutes from './account';
import Search from './search';

function App() {
    return (
        <div className="app-container" >
            <Nav title={'Career Assistant'} />
            <Switch>
                <Route exact path="/" component={Stats} />
                <Route path="/tracker/edit/:id" component={EditCard} />
                <Route path="/tracker/:id" component={ViewCard} />
                <Route path="/tracker" component={Tracker} />
                <Route path="/prospect" component={Prospect} />
                <Route path="/account" component={AccountRoutes} />
                <Route path="/search" component={Search} />
                <Route component={Error404} />
            </Switch>
        </div>
    )
}

export default App;
