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
        this.setState({
            respData: resp.data.data,
            isLoaded: true,
            params: params
        })
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
        const numberPhone = values => (values && !/[0-9]?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})/gm.test(values)) ? 'Must be a valid phone number' : undefined;
        const minLength = values => (values && values < 10 ? "Must Be at Least 10 characters long" : undefined);
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            return (
                <div className="edit-container">
                    <EditCardForm {...this.state.respData} handleChange={this.handleChange} {...this.props} required={required} numberPhone={numberPhone} minLength={minLength}/>
                </div>
            )
        }
    }
}


export default EditCard;