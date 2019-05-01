import React, {Component} from 'react';
import './search.scss';
import SearchResults from './search_results';
import Header from '../general/header';
import SearchForm from './search_form';
import axios from 'axios';
import ButtonList from '../general/buttons/button_list';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            allJobProspects:[],
            filteredList:[],
            searched:false,
            sortedCards:[],
            sortOrder:'date-asc'
        }
    }
    componentDidMount(){
        this.getDetails();
    }
    async getDetails(someStr) {
        const resp = await axios.get('/api/get_jobcard_display.php');
        this.setState({
            allJobProspects:resp.data.data
        })
    }
    getSearchValues= event =>{
        const {allJobProspects}= this.state;
        let regex = new RegExp(`${event.searched}`,"gmi")
        var filteredList = allJobProspects.filter((jobProspect)=>{
            return (regex.test(jobProspect["title"]) || regex.test(jobProspect["company"]) || regex.test(jobProspect["progress"]))
        })
        this.setState({
            filteredList:filteredList,
            searched:true
        })
    }
    sortCards(){
        const unsortedListCopy = [...this.state.filteredList];
        let sortedList = [];
        switch(this.state.sortOrder){
            case 'date-asc':
                this.setState({
                    sortedCards: unsortedListCopy
                })
                break;
            case 'date-dec':
                sortedList = unsortedListCopy.reverse();
                this.setState({
                    sortedCards:sortedList
                })
                break;
            case 'AtoZ':
                sortedList = unsortedListCopy.sort((card1,card2)=>{
                    let greater = card1.company.toUpperCase()>card2.company.toUpperCase();
                    return greater ? 1:-1
                })
                this.setState({
                    sortedCards:sortedList
                })
                break;
            case 'ZtoA':
                sortedList = unsortedListCopy.sort((card1,card2)=>{
                    let greater = card1.company.toUpperCase()>card2.company.toUpperCase();
                    return greater ? -1:1
                })
                this.setState({
                    sortedCards:sortedList
                })
                break;
        }
    }
    toggleAlphabetical=async (e)=>{
        await this.state.sortOrder === 'AtoZ' ? this.setState({
            sortOrder:'ZtoA'
        }):this.setState({
            sortOrder:'AtoZ'
        })
        this.sortCards();
    }
    toggleDates=async (e)=>{
        await this.state.sortOrder === 'date-dec' ? this.setState({
            sortOrder:'date-asc'
        }):this.setState({
            sortOrder:'date-dec'
        })
        this.sortCards();
    }
    render(){
        const {filteredList,searched,sortedCards} = this.state;
        return(
            <div className="search-container">
                <Header  title="Search Job Prospects" col='col s10 offset-s1' alignment="left-align"/>
                <SearchForm runSearch={this.getSearchValues}/>
                <div className="row">
                    <div className="col s10 offset-s1">
                    {searched && (filteredList.length ? <span>{filteredList.length} items found</span>:<span>0 items found</span>)}
                    </div>
                </div>
                <div className="search-result-container">
                    {sortedCards.length ? <SearchResults searchResults={sortedCards}/>:<SearchResults searchResults={filteredList}/>}
                </div>
                {searched && <ButtonList classes="search-sort" sortAlphabetically={this.toggleAlphabetical} sortDate={this.toggleDates} direction="bottom"/>}
            </div>
        )
    }
    
}


export default Search