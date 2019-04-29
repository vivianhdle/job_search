import React, { Component } from 'react';
import EditCardForm from './edit_form_card';
import axios from 'axios';

class EditCard extends Component {
    state = {
        respData: null,
        isLoaded: false,
        params: null
    }
    componentDidMount() {
        this.getData();
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
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            return (
                <div className="edit-container">
                    <EditCardForm {...this.state.respData} handleChange={this.handleChange} {...this.props} required={required}/>
                </div>
            )
        }
    }
}


export default EditCard;