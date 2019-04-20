import React, { Component } from 'react';
import { formatTime } from '../helpers';
import './small_card.scss';
import { Route } from 'react-router-dom';
import ViewCard from '../view_card';

class SmallCard extends Component {
    constructor(props){
        super(props);
        this.id = null;
    }

    handleCardClick = () => {
        this.props.history.push(`/tracker/${this.id}`);
    }

    render() {
        const { company, created, id, progress, title, history } = this.props;
        this.id = id;
        return (
            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="card grey white" onClick={this.handleCardClick}>
                        <div className="card-content black-text">
                            <span className="card-title">{company}</span>
                            <span className="title">{title}</span>
                            <br />
                            <span className="created right "><em>{formatTime(created)}</em></span>
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
