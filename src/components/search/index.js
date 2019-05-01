import React, {Component} from 'react';
import './search.scss';
import SearchResults from './search_results';
import Header from '../general/header';
import SearchForm from './search_form';
import axios from 'axios';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            allJobProspects:[],
            filteredList:[]
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
            filteredList:filteredList
        })
    }
    render(){
        return(
            <div className="search-container">
                <Header  title="Search Job Prospects" col='col s10 offset-s1'/>
                <SearchForm runSearch={this.getSearchValues}/>
                <div className="search-result-container">
                    <SearchResults searchResults={this.state.filteredList}/>
                </div>
                <span>hello</span>
            </div>
        )
    }
    
}


export default Search