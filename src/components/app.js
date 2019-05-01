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
import About from './about';
import Search from './search';

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
                <Nav title={this.state.currentPage}/>
                <Switch>
                    <Route exact path="/" render={routingprops => {
                        return <Stats {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/tracker/edit/:id" render={routingprops => {
                        return <EditCard {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/tracker/:id" render={routingprops => {
                        return <ViewCard {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/tracker" render={(routingprops) => {
                        return <Tracker {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/prospect" render={routingprops => {
                        return <Prospect {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/account" render={routingprops => {
                        return <AccountRoutes {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/about" render={(routingprops) => {
                        return <About {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route path="/search" render={(routingprops) => {
                        return <Search {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                    <Route render={(routingprops) => {
                        return <Error404 {...routingprops} handlePageRender={this.handlePageRender}/>
                    }} />
                </Switch>
            </div>
        )
    }
}

export default App;
