import React, { Component } from 'react';
import axios from 'axios';
import ViewDetails from './view_details';
import ErrorHandler from '../general/error_handler';
import Loader from '../general/loader';

class ViewCard extends Component {
    state = {
        isLoaded: false,
        respData: null,
        editable: false,
        errorMsg: '',
        error: false
    }
    componentDidMount() {
        this.getRespData();
    }
    async getRespData() {
        const { params } = this.props.match;
        const resp = await axios.get(`/api/get_tracker_item.php?tracker_id=${params.id}`);
        if(resp.data.success){
            this.setState({
                respData: resp.data.data,
                isLoaded: true
            })
        }else{
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }
    }
    editMode = () => {
        const { params } = this.props.match;
        this.props.history.push(`/tracker/edit/${params.id}`);
    }
    closeErrorModal = ()=>{
        this.setState({
            error: false
        })
    }
    render() {
        if (!this.state.isLoaded) {
            return (
                <Loader/>
            )
        } else {
            return (
                <div className="details-container row">
                    {this.state.error && <ErrorHandler errorMsg={this.state.errorMsg} closeError={this.closeErrorModal}/>}
                    {!this.state.editable && <ViewDetails handleEdit={this.editMode} {...this.state.respData} />}
                </div>
            )
        }
    }
}

export default ViewCard;