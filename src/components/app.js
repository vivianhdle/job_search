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
import Home from './home';
import NotFound from './404/404';

class App extends React.Component {
    state = {
        currentPage: null
    }
    handlePageRender = currentPage =>{
        this.setState({
            currentPage
        })
    }
    render() {
        return (
            <div className="app-container" >
                {this.state.currentPage !== 'Career Assistant' ? <Nav title={'Tracker'}/> : <Nav title={this.state.currentPage}/>}
                <Switch>
                    <Route exact path="/" render={routingprops => {
                        return <Home {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/tracker/edit/:id" render={(routingprops) => {
                        return <EditCard {...routingprops}/>
                    }} />
                    <Route path="/tracker/:id" render={(routingprops) => {
                        return <ViewCard {...routingprops} />
                    }} />
                    <Route path="/tracker" render={(routingprops) => {
                        return <Tracker {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/prospect" render={(routingprops) => {
                        return <Prospect {...routingprops} />
                    }} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App;
