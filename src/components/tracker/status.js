import React, { Component, Fragment } from 'react';
import './tracker.scss';
import SmallCard from '../job_card/small-card';
import axios from 'axios';
import Header from '../general/header';
import AddButton from '../general/button';
import { Route, Redirect, Link } from 'react-router';

class Status extends Component {
    state = {
        modalOpen: false,
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
    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }
    handleAdd = async values => {
        this.setRedirect();
    }
    render() {
        const { progress, id } = this.props;
        const cards = this.state.cards.filter((card) => {
            return card.progress === progress
        }).map((card) => {
            return (
                <SmallCard key={card.id} {...card} />
            )
        })
        return (
            <Route exact path="/" render={() => (
                this.state.redirect ? (
                    <Redirect to="/prospect" />
                ) : (
                        <div className="job-container show-on-medium-and-up" id={id}>
                            <Header title={progress} />
                            <AddButton icon={'add'} click={this.handleAdd} />
                            <div className="card-container row col s12">
                                {cards}
                                {cards}
                            </div>
                        </div>
                    )
            )} />
        )
    }
}

export default Status;