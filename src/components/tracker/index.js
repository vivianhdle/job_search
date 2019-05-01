import React, { Component } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import ActionButton from '../general/buttons/action_button';
import './tracker.scss';
import axios from 'axios';
import SearchModal from '../general/modals/search_modal';

class Tracker extends Component {
    constructor(props){
        super(props);
        this.modal=null;
        this.state={
            allJobProspects:[],
            filteredList:[],
            isOpen:false
        }
    }
    componentDidMount(){
        this.props.handlePageRender('Job Tracker');
        this.getDetails();
    }
    goToProspect = () => {
        this.props.history.push('/prospect');
    }
    async getDetails(someStr) {
        const resp = await axios.get('/api/get_jobcard_display.php');
        this.setState({
            allJobProspects:resp.data.data
        })
    }
    toggleOpenSearch=()=>{
        this.setState({isOpen:!this.state.isOpen});
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
    render() {
        return (
            <div className="tracker-container">
                <Status progress="Started Application" id="started-app" />
                <Status progress="Waiting for Response" id="waiting" />
                <Status progress="Follow-up Needed" id="follow-up" />
                <Status progress="Archived" id="archived" />
                <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="blue-grey add-prospect" icon="add"/>
                <ActionButton handleClick={this.toggleOpenSearch} size="btn btn-floating" classes="yellow search-prospect" icon="search"/>   
                <NavCookies />
                <SearchModal runSearch={this.getSearchValues} searchResults={this.state.filteredList} isOpen={this.state.isOpen} closeModal={this.toggleOpenSearch}/>
            </div>
        )
    }

}


export default Tracker
