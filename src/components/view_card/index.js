import React, { Component } from 'react';
import axios from 'axios';
import EditFormCard from './edit_form_card';
import ViewDetails from './view_details';

class ViewCard extends Component {
    state = {
        isLoaded: false,
        respData: null,
        editable:false
    }
    componentDidMount() {
        this.getRespData();
    }
    async getRespData() {
        const { params } = this.props.match;
        const resp = await axios.get(`/api/get_tracker_item.php?trackerId=${params.id}`);
        this.setState({
            respData: resp.data.data,
            isLoaded: true
        })
    }
    editMode=()=>{
        this.setState({editable:true});
    }
    render() {
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            return (
                <div className="details-container">
                    {!this.state.editable && <ViewDetails handleEdit={this.editMode} {...this.state.respData}/>}
                    {this.state.editable && <EditFormCard respData={this.state.respData}/>}
                </div>
            )
        }
    }

}

export default ViewCard;