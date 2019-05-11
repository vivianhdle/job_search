import React, { Component } from 'react';
import { formatTime } from '../helpers';
import './small_card.scss';
import { Route } from 'react-router-dom';
import ViewCard from '../view_card';

class SmallCard extends Component {
    constructor(props) {
        super(props);
        this.id = null;
        this.icons={
            'Started Application':'note_add',
            'Waiting for Response':'watch_later',
            'Follow-up Needed': 'whatshot',
            'Archived':'archive'
        }
    }
    handleCardClick = () => {
        this.props.history.push(`/tracker/${this.id}`);
    }
    render() {
        const { company, created, id, title, progress } = this.props;
        this.id = id;
        return (
            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="card" onClick={this.handleCardClick}>
                        <div className="card-content">
                            <span className="right"><i className="material-icons grey-text ">{this.icons[progress]}</i></span>
                            <span className="card-title">{company}</span>
                            <span className="title">{title}</span>
                            <br />
                            <span className="created right"><em>{formatTime(created)}</em></span>
                        </div>
                    </div>
                </div>
                <Route path="/view" render={(routingprops) => {
                    return <ViewCard {...routingprops} />
                }} />
            </div>
        )
    }
}

export default SmallCard;
