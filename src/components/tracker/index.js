import React, { Component } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import ActionButton from '../general/buttons/action_button';
import './tracker.scss';
import axios from 'axios';
import Loader from '../general/loader';
import ButtonList from '../general/buttons/button_list';


class Tracker extends Component {
    constructor(props) {
        super(props);
        this.status = ['Started Application', 'Waiting for Response', 'Follow-up Needed', 'Archived'];
        this.state = {
            lists: null,
            isLoaded: false,
            errorMsg: '',
            error: false,
            sortedList: {},
            sortOrder: 'date-dec',
            lastAlphabetOrder: '',
            lastDateOrder: ''
        }
    }
    async componentDidMount() {
        this.props.handlePageRender('Job Tracker');
        await this.getDetails();
        this.sortCards();
    }
    goToProspect = () => {
        this.props.history.push('/prospect');
    }
    goToSearch = () => {
        this.props.history.push('/search');
    }
    async getDetails() {
        const resp = await axios.get('/api/get_jobcard_display.php');
        const unfilteredList = resp.data.data;
        const totalFiltered = {}
        this.status.forEach((status) => {
            const filteredList = unfilteredList.filter((card) => {
                return card.progress === status
            })
            totalFiltered[status] = filteredList
        })
        await this.setState({
            lists: totalFiltered,
        })
    }
    sortCards = async () => {
        const newList = {};
        const {lists} = this.state;
        for(var key in lists){
            newList[key] = [...lists[key]]
        }
        switch (this.state.sortOrder) {
            case 'date-asc':
                await this.setState({
                    sortedList: newList
                })
                break;
            case 'date-dec':
            for(var key in newList){
                newList[key].reverse();
            }
                await this.setState({
                    sortedList: newList
                })
                break;
            case 'ZtoA':
                for(var key in newList){
                    newList[key].sort((card1, card2) => {
                    let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                    return greater ? 1 : -1
                })
            }
                await this.setState({
                    sortedList: newList
                })
                break;
            case 'AtoZ':
            for(var key in newList){
                newList[key].sort((card1, card2) => {
                    let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                    return greater ? -1 : 1
                })
            }
                await this.setState({
                    sortedList: newList
                })
                break;
        }
        this.setState({
            isLoaded: true
        })
    }
    toggleAlphabetical = async () => {
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
            this.state.lastAlphabetOrder === 'AtoZ' ? await this.setState({
                sortOrder: 'AtoZ',
                lastAlphabetOrder: 'ZtoA',
            }) : await this.setState({
                sortOrder: 'ZtoA',
                lastAlphabetOrder: 'AtoZ'
            })
        }
        this.sortCards();
    }
    toggleDates = async () => {
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
            this.state.lastDateOrder === 'date-dec' ? await this.setState({
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
        if (this.state.isLoaded) {
            return (
                <div className="tracker-container">
                    <ButtonList sortAlphabetically={this.toggleAlphabetical} sortDate={this.toggleDates} direction="bottom"/>
                    <Status progress="Started Application" id="started-app" filteredList={this.state.sortedList['Started Application']} goToProspect={this.goToProspect}/>
                    <Status progress="Waiting for Response" id="waiting" filteredList={this.state.sortedList['Waiting for Response']} goToProspect={this.goToProspect}/>
                    <Status progress="Follow-up Needed" id="follow-up" filteredList={this.state.sortedList['Follow-up Needed']} goToProspect={this.goToProspect}/>
                    <Status progress="Archived" id="archived" filteredList={this.state.sortedList['Archived']} goToProspect={this.goToProspect}/>
                    <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="add-prospect" icon="add" />
                    <ActionButton handleClick={this.goToSearch} size="btn btn-floating" classes="search-prospect" icon="search" />
                    <NavCookies active={this.props.location.search.replace('?active=', '')} />
                </div>
            )
        } else {
            return <Loader />;
        }
    }

}


export default Tracker
