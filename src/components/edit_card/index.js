import React, { Component } from 'react';
import EditCardForm from './edit_form_card';
import axios from 'axios';
import Loader from '../general/loader';

class EditCard extends Component {
    state = {
        respData: null,
        isLoaded: false,
        params: null
    }
    componentDidMount() {
        this.getData();
        this.props.handlePageRender('Job Tracker');
    }
    async getData() {
        const { params } = this.props.match;
        const resp = await axios.get(`/api/get_tracker_item.php?tracker_id=${params.id}`);
        if(resp.data.success){this.setState({
            respData: resp.data.data,
            isLoaded: true,
            params: params
        })}else{
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }

    }
    handleChange = e => {
        const { respData } = this.state;
        respData[e.target.name] = e.target.value;
        this.setState({
            respData
        })
    }
    render() {
        const required = values => (values || values ? undefined : 'Required Field');
        const linkCheck = values => (values && !/^https?:\/\//.test(values) ? 'Please enter a valid URL with https://' : undefined)
        if (!this.state.isLoaded) {
            return (
                <Loader/>
            )
        } else {
            return (
                <div className="edit-container">
                    <EditCardForm {...this.state.respData} handleChange={this.handleChange} {...this.props} required={required} linkCheck={linkCheck}/>
                </div>
            )
        }
    }
}


export default EditCard;