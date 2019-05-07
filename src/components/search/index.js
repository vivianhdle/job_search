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
            sortOrder: 'date-asc',
            lastAlphabetOrder: '',
            lastDateOrder: ''
        }
    }
    componentDidMount() {
        this.props.handlePageRender('Job Tracker');
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
        let regex = new RegExp(`${event.searched}`, "gmi")
        var filteredList = allJobProspects.filter((jobProspect) => {
            return (regex.test(jobProspect["title"]) || regex.test(jobProspect["company"]) || regex.test(jobProspect["progress"]))
        })
        this.setState({
            filteredList: filteredList,
            searched: true
        })
    }
    sortCards() {
        const unsortedListCopy = [...this.state.filteredList];
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
        const { filteredList, searched, sortedCards } = this.state;
        return (
            <div className="search-container row">
                <Header title="Search Job Prospects" col='col s10 offset-s1' alignment="left-align" />
                <SearchForm runSearch={this.getSearchValues} />
                <div className="row">
                    <div className="col s10 offset-s1 total-results">
                        {searched && (filteredList.length ? <span>{filteredList.length} results found</span> : <span>0 results found</span>)}
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