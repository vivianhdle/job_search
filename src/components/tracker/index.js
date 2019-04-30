import React, { Component, Fragment } from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import { Route } from 'react-router-dom';
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
        this.modal = M.Modal.init(this.modalRef);
        this.modal.close();
    }
    // componentWillUnmount(){
    //     this.modal.destroy();
    // }
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
        if(!this.state.isOpen)
            {this.modal.open();
        }else{
            this.modal.close();
        };
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
                <Route render={(routingprops) => {
                    return (
                        <Fragment>
                            <SearchModal innerRef={(elem)=>this.modalRef=elem} runSearch={this.getSearchValues} searchResults={this.state.filteredList} closeModal={this.toggleOpenSearch}/>
                            <Status progress="Started Application" id="started-app" {...routingprops} />
                            <Status progress="Waiting for Response" id="waiting" {...routingprops} />
                            <Status progress="Follow-up Needed" id="follow-up" {...routingprops} />
                            <Status progress="Archived" id="archived" {...routingprops} />
                            <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="blue-grey darken-1 add-prospect" icon="add"/>
                            <ActionButton handleClick={this.toggleOpenSearch} size="btn btn-floating" classes="yellow search-prospect" icon="search"/>
                        </Fragment>
                    )
                }} />
                <NavCookies />
            </div>
        )
    }

}


export default Tracker
