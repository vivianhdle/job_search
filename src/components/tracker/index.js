import React, { Component } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import ActionButton from '../general/buttons/action_button';
import './tracker.scss';
import axios from 'axios';
import Loader from '../general/loader';

class Tracker extends Component {
    constructor(props){
        super(props);
        this.status = ['Started Application','Waiting for Response','Follow-up Needed','Archived'];
        this.state={
            lists:null,
            isLoaded:false
        }
    }
    componentDidMount(){
        this.props.handlePageRender('Job Tracker');
        this.getDetails();
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
        this.status.forEach((status)=>{
            const filteredList = unfilteredList.filter((card)=>{
                return card.progress === status
            })
            totalFiltered[status] = filteredList
        })
        this.setState({
            lists:totalFiltered,
            isLoaded:true
        })
    }

    render() {
        if (this.state.isLoaded){
            return (
                <div className="tracker-container">
                    <Status progress="Started Application" id="started-app" filteredList={this.state.lists['Started Application']}/>
                    <Status progress="Waiting for Response" id="waiting" filteredList={this.state.lists['Waiting for Response']}/>
                    <Status progress="Follow-up Needed" id="follow-up" filteredList={this.state.lists['Follow-up Needed']}/>
                    <Status progress="Archived" id="archived" filteredList={this.state.lists['Archived']}/>
                    <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="add-prospect" icon="add"/>
                    <ActionButton handleClick={this.goToSearch} size="btn btn-floating" classes="search-prospect" icon="search"/>   
                    <NavCookies active={this.props.location.search.replace('?active=','')}/>
                </div>
            )
        }else{
            return <Loader/>;
        }
    }

}


export default Tracker
