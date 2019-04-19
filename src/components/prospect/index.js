import React, { Component, Fragment } from 'react';
import './progress.scss';
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
        console.log(values);
        this.setRedirect();

    }

    render() {
        return (
            <Route exact path="/prospect" render={() => (
                this.state.redirect ? (
                    <Redirect to="/tracker" />
                ) : (
                    <div className="add-form-progress">
                        <div className="form">
                        <AddForm add={this.handleAdd} />
                        </div>
                    </div>
                    
                    )
            )} />
        )
    }
}

export default Prospect