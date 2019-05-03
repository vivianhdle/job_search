import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './status.scss';
import axios from 'axios';
import Header from '../general/header';
import ButtonList from '../general/buttons/button_list';
import JobProspectList from './job_prospect_list';

class Status extends Component {
    state = {
        errorMsg: '',
        error: false,
        unsortedList: [],
        sortedCards: [],
        sortOrder: 'date-dec',
        lastAlphabetOrder: '',
        lastDateOrder: '',
        redirect: false
    }
    componentDidMount() {
        this.getDetails();
    }
    async getDetails() {
        const resp = await axios.get('/api/get_jobcard_display.php');
        const unsortedList = resp.data.data.filter(card => {
            return card.progress === this.props.progress
        })
        const cards = [...unsortedList].reverse();
        this.setState({
            unsortedList: unsortedList,
            sortedCards: cards
        })
    }
    sortCards() {
        const unsortedListCopy = [...this.state.unsortedList];
        let sortedList = [];
        switch (this.state.sortOrder) {
            case 'date-asc':
                this.setState({
                    sortedCards: unsortedListCopy
                })
                break;
            case 'date-dec':
                sortedList = unsortedListCopy.reverse();
                this.setState({
                    sortedCards: sortedList
                })
                break;
            case 'ZtoA':
                sortedList = unsortedListCopy.sort((card1, card2) => {
                    let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                    return greater ? 1 : -1
                })
                this.setState({
                    sortedCards: sortedList
                })
                break;
            case 'AtoZ':
                sortedList = unsortedListCopy.sort((card1, card2) => {
                    let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                    return greater ? -1 : 1
                })
                this.setState({
                    sortedCards: sortedList
                })
                break;
        }
    }
    toggleAlphabetical = async (e) => {
        if (this.state.sortOrder === 'AtoZ') {
            await this.setState({
                sortOrder: 'ZtoA',
                lastAlphabetOrder: 'AtoZ'
            })
        } else if (this.state.sortOrder === 'ZtoA') {
            await this.setState({
                sortOrder: 'AtoZ',
                lastAlphabetOrder: 'ZtoA'
            })
        } else {
            await this.state.lastAlphabetOrder === 'AtoZ' ? this.setState({
                sortOrder: 'AtoZ',
                lastAlphabetOrder: 'ZtoA',
            }) : await this.setState({
                sortOrder: 'ZtoA',
                lastAlphabetOrder: 'AtoZ'
            })
        }
        this.sortCards();
    }
    toggleDates = async (e) => {
        if (this.state.sortOrder === 'date-dec') {
            await this.setState({
                sortOrder: 'date-asc',
                lastDateOrder: 'date-dec'
            })
        } else if (this.state.sortOrder === 'date-asc') {
            await this.setState({
                sortOrder: 'date-dec',
                lastDateOrder: 'date-asc'
            })
        } else {
            await this.state.lastDateOrder === 'date-dec' ? this.setState({
                sortOrder: 'date-dec',
                lastDateOrder: 'date-asc'
            }) : await this.setState({
                sortOrder: 'date-asc',
                lastDateOrder: 'date-dec'
            })
        }
        this.sortCards();
    }
    render() {
        const { progress, id } = this.props;
        return (
            <Fragment>
                <div className="job-container show-on-medium-and-up" id={id}>
                    <ButtonList sortAlphabetically={this.toggleAlphabetical} sortDate={this.toggleDates} direction="bottom" />
                    {this.state.error && <ErrorHandler errorMsg={this.state.errorMsg} closeError={this.closeErrorModal} />}
                    <Header title={progress} alignment="center" />
                    <JobProspectList list={this.state.sortedCards} />
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Status);


