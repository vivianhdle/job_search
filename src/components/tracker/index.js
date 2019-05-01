import React, { Component } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import ActionButton from '../general/buttons/action_button';
import './tracker.scss';

class Tracker extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.handlePageRender('Job Tracker');
    }
    goToProspect = () => {
        this.props.history.push('/prospect');
    }
    goToSearch = () => {
        this.props.history.push('/search');
    }
    render() {
        return (
            <div className="tracker-container">
                <Status progress="Started Application" id="started-app" />
                <Status progress="Waiting for Response" id="waiting" />
                <Status progress="Follow-up Needed" id="follow-up" />
                <Status progress="Archived" id="archived" />
                <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="blue-grey add-prospect" icon="add"/>
                <ActionButton handleClick={this.goToSearch} size="btn btn-floating" classes="grey search-prospect" icon="search"/>   
                <NavCookies/>
            </div>
        )
    }

}


export default Tracker
