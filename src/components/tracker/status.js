import React, { Component, Fragment } from 'react';
import './tracker.scss';
import SmallCard from '../cards/small_card';
import axios from 'axios';
import Header from '../general/header';
import ViewCard from '../view_card';
import { Route } from 'react-router-dom';
import ActionButton from '../general/buttons/action_button';

class Status extends Component {
    state = {
        cards: [],
        redirect: false
    }
    componentDidMount() {
        this.getDetails();
    }
    async getDetails() {
        const resp = await axios.get('/api/get_jobcard_display.php');
        this.setState({
            cards: resp.data.data
        })
    }
    render() {
        const { progress, id } = this.props;
        const cards = this.state.cards.filter((card) => {
            return card.progress === progress
        }).map((card) => {
            return (
                <Route key={card.id} render={(routingprops) => {
                    return (<SmallCard key={card.id} {...card} {...routingprops}/>)
                }} />

            )
        })
        return (
            <Fragment>
                <div className="job-container show-on-medium-and-up" id={id}>
                    <Header title={progress} />
                    <div className="card-container row col s12">
                        {cards}
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Status;


