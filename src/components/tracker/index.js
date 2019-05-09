import React, { Component, Fragment } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import ActionButton from '../general/buttons/action_button';
import './tracker.scss';
import axios from 'axios';
import Loader from '../general/loader';
import ButtonList from '../general/buttons/button_list';
import FeatureDiscovery from '../general/feature_discovery/';
import '../general/feature_discovery/feature_discovery_text';


class Tracker extends Component {
    constructor(props) {
        super(props);
        this.status = ['Started Application', 'Waiting for Response', 'Follow-up Needed', 'Archived'];
        this.state = {
            lists: null,
            isLoaded: false,
            searched: false,
            errorMsg: '',
            error: false,
            sortedList: {},
            sortOrder: 'Newest',
            lastAlphabetOrder: '',
            lastDateOrder: '',
            width: 0,
            options: {
                swipeable: false
            }
        }
    }
    async componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        await this.getDetails();
        this.sortCards();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        localStorage.removeItem('newGuestView');
    }
    updateWindowDimensions = async () => {
        await this.setState({
            width: window.innerWidth
        })
        var options = {
            swipeable: false
        }
        if (this.state.width < 400) {
            options.swipeable = true;
            this.setState({
                options
            })
        } else {
            options.swipeable = false;
            this.setState({
                options
            })
        }
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
            searched: false
        })
    }
    sortCards = async () => {
        const newList = {};
        const { lists } = this.state;
        for (var key in lists) {
            newList[key] = [...lists[key]]
        }
        switch (this.state.sortOrder) {
            case 'Oldest':
                await this.setState({
                    sortedList: newList,
                    searched: true
                })
                break;
            case 'Newest':
                for (var key in newList) {
                    newList[key].reverse();
                }
                await this.setState({
                    sortedList: newList,
                    searched: true
                })
                break;
            case 'A to Z':
                for (var key in newList) {
                    newList[key].sort((card1, card2) => {
                        let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                        return greater ? 1 : -1
                    })
                }
                await this.setState({
                    sortedList: newList,
                    searched: true
                })
                break;
            case 'Z to A':
                for (var key in newList) {
                    newList[key].sort((card1, card2) => {
                        let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                        return greater ? -1 : 1
                    })
                }
                await this.setState({
                    sortedList: newList,
                    searched: true
                })
                break;
        }
        this.setState({
            isLoaded: true
        })
    }
    toggleAlphabetical = async () => {
        if (this.state.sortOrder === 'Z to A') {
            await this.setState({
                sortOrder: 'A to Z',
                lastAlphabetOrder: 'Z to A'
            })
        } else if (this.state.sortOrder === 'A to Z') {
            await this.setState({
                sortOrder: 'Z to A',
                lastAlphabetOrder: 'A to Z'
            })
        } else {
            this.state.lastAlphabetOrder === 'Z to A' ? await this.setState({
                sortOrder: 'Z to A',
                lastAlphabetOrder: 'A to Z',
            }) : await this.setState({
                sortOrder: 'A to Z',
                lastAlphabetOrder: 'Z to A'
            })
        }
        this.sortCards();
    }
    toggleDates = async () => {
        if (this.state.sortOrder === 'Newest') {
            await this.setState({
                sortOrder: 'Oldest',
                lastDateOrder: 'Newest'
            })
        } else if (this.state.sortOrder === 'Oldest') {
            await this.setState({
                sortOrder: 'Newest',
                lastDateOrder: 'Oldest'
            })
        } else {
            this.state.lastDateOrder === 'Newest' ? await this.setState({
                sortOrder: 'Newest',
                lastDateOrder: 'Oldest'
            }) : await this.setState({
                sortOrder: 'Oldest',
                lastDateOrder: 'Newest'
            })
        }
        this.sortCards();
    }
    render() {
        const text = featureDiscoveryText.viewPage;
        const title = featureDiscoveryTitle.viewPage;
        const {sortedList, searched, options, sortOrder} = this.state;
        if (this.state.isLoaded) {
            return (
                <Fragment>
                    <div className="tracker-container">
                        <ButtonList sortAlphabetically={this.toggleAlphabetical} sortDate={this.toggleDates} direction="bottom" />
                        {searched && (sortedList ? <span className="order-state">Sort Order: {sortOrder}</span> : null)}
                        <Status progress="Started Application" id="started-app" filteredList={sortedList['Started Application']} goToProspect={this.goToProspect} />
                        <Status progress="Waiting for Response" id="waiting" filteredList={sortedList['Waiting for Response']} goToProspect={this.goToProspect} />
                        <Status progress="Follow-up Needed" id="follow-up" filteredList={sortedList['Follow-up Needed']} goToProspect={this.goToProspect} />
                        <Status progress="Archived" id="archived" filteredList={sortedList['Archived']} goToProspect={this.goToProspect} />
                        <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="add-prospect" icon="add" />
                        <ActionButton handleClick={this.goToSearch} size="btn btn-floating" classes="search-prospect" icon="search" />
                        <NavCookies active={this.props.location.search.replace('?active=', '')} options={options} />
                    </div>
                    <FeatureDiscovery text={text} title={title} newGuest={localStorage.getItem('newGuestView')}/>
                </Fragment>
            )
        } else {
            return <Loader />;
        }
    }

}


export default Tracker
