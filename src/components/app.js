import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React,{Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import '../assets/css/app.scss';
import Tracker from './tracker';
import Nav from './nav';
import Prospect from './prospect';
import ViewCard from './view_card';

const App = () => (
    <div className="app-container">
        <Nav/>
        <Switch>
            <Route exact path="/" render={(routingprops)=>{
                return <Tracker {...routingprops}/>
            }}/>
            <Route path="/prospect" render={(routingprops)=>{
                return <Prospect {...routingprops} />
            }}/>
            <Route path="/view" render={()=>{
                return <ViewCard/>
            }}/>
        </Switch>
    </div>
        
);

export default App;
