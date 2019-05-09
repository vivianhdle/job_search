import React, { Component } from 'react';
import './search.scss';
import SearchResults from './search_results';
import Header from '../general/header';
import SearchForm from './search_form';
import axios from 'axios';
import ButtonList from '../general/buttons/button_list';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allJobProspects: [],
            filteredList: [],
            searched: false,
            sortedCards: [],
            sortOrder: 'Oldest',
            lastAlphabetOrder: '',
            lastDateOrder: ''
        }
    }
    componentDidMount() {
        this.getDetails();        
    }
    async getDetails() {
        const resp = await axios.get('/api/get_jobcard_display.php');
        this.setState({
            allJobProspects: resp.data.data
        })
    }
    getSearchValues = event => {
        const { allJobProspects } = this.state;
        if (!event.searched){
            var filteredList = allJobProspects;
        } else {
            let regex = new RegExp(`${event.searched}`, "gmi")
            var filteredList = allJobProspects.filter((jobProspect) => {
                return (regex.test(jobProspect["title"]) || regex.test(jobProspect["company"]) || regex.test(jobProspect["progress"]))
            })
        }
        this.setState({
            sortedCards:[],
            filteredList: filteredList,
            sortedCards: [],
            searched: true
        })
    }
    sortCards() {
        const unsortedListCopy = [...this.state.filteredList];
        let sortedList = [];
        switch (this.state.sortOrder) {
            case 'Oldest':
                this.setState({
                    sortedCards: unsortedListCopy
                })
                break;
            case 'Newest':
                sortedList = unsortedListCopy.reverse();
                this.setState({
                    sortedCards: sortedList
                })
                break;
            case 'A to Z':
                sortedList = unsortedListCopy.sort((card1, card2) => {
                    let greater = card1.company.toUpperCase() > card2.company.toUpperCase();
                    return greater ? 1 : -1
                })
                this.setState({
                    sortedCards: sortedList
                })
                break;
            case 'Z to A':
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
            await this.state.lastAlphabetOrder === 'Z to A' ? this.setState({
                sortOrder: 'Z to A',
                lastAlphabetOrder: 'A to Z',
            }) : await this.setState({
                sortOrder: 'A to Z',
                lastAlphabetOrder: 'Z to A'
            })
        }
        this.sortCards();
    }
    toggleDates = async (e) => {
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
            await this.state.lastDateOrder === 'Newest' ? this.setState({
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
        const { filteredList, searched, sortedCards, sortOrder } = this.state;
        return (
            <div className="search-container row">
                <Header title="Search Job Prospects" col='col s10 offset-s1' alignment="left-align" />
                <SearchForm runSearch={this.getSearchValues} />
                <div className="row">
                    <div className="col s10 offset-s1 total-results">
                        {searched && (filteredList.length ? <span>{filteredList.length} results found</span> : <span>0 results found</span>)}
                        {searched && (sortedCards.length ? <span className="right">Sort Order: {sortOrder}</span> : null)}
                    </div>
                </div>
                <div className="search-result-container">
                    {sortedCards.length ? <SearchResults searchResults={sortedCards} /> : <SearchResults searchResults={filteredList} />}
                </div>
                {searched && <ButtonList classes="search-sort" sortAlphabetically={this.toggleAlphabetical} sortDate={this.toggleDates} direction="bottom" />}
            </div>
        )
    }

}


export default Search