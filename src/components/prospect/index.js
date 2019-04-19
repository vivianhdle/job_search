import React, { Component, Fragment } from 'react';
import './modal.scss';
import { Route, Redirect, Link } from 'react-router';
import AddForm from './add-form';
import axios from 'axios';

class Prospect extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }

    handleAdd = async values => {
        await axios.post('/api/add_tracker_item.php', values);
        this.setRedirect();

    }

    render() {
        return (
            <Route exact path="/prospect" render={() => (
                this.state.redirect ? (
                    <Redirect to="/tracker" />
                ) : (
                    <AddForm add={this.handleAdd} />
                    )
            )} />
        )
    }
}

export default Prospect