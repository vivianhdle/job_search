import React, { Component, Fragment } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import { Route } from 'react-router-dom';
import ActionButton from '../general/buttons/action_button';
import './tracker.scss';

class Tracker extends Component {
    componentDidMount(){
        this.props.handlePageRender('Job Tracker');
    }
    goToProspect = () => {
        this.props.history.push('/prospect');
    }
    render() {
        return (
            <div className="tracker-container">
                <Route render={(routingprops) => {
                    return (
                        <Fragment>
                            <Status progress="Started Application" id="started-app" {...routingprops} />
                            <Status progress="Waiting for Response" id="waiting" {...routingprops} />
                            <Status progress="Follow-up Needed" id="follow-up" {...routingprops} />
                            <Status progress="Archived" id="archived" {...routingprops} />
                            <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="blue-grey darken-1 add-prospect" icon="add"/>
                        </Fragment>
                    )
                }} />
                <NavCookies />
            </div>
        )
    }

}


export default Tracker
