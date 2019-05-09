import React, { Component, Fragment } from 'react';
import EditCardForm from './edit_form_card';
import axios from 'axios';
import Loader from '../general/loader';
import FeatureDiscovery from '../general/feature_discovery/';
import '../general/feature_discovery/feature_discovery_text';

class EditCard extends Component {
    state = {
        respData: null,
        isLoaded: false,
        params: null
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const { params } = this.props.match;
        const resp = await axios.get(`/api/get_tracker_item.php?tracker_id=${params.id}`);
        if(resp.data.success){
            await this.setState({
                respData: resp.data.data,
                isLoaded: true,
                params: params
            })
        }else{
            await this.setState({
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
        const text = featureDiscoveryText.editPage;
        const title = featureDiscoveryTitle.editPage;
        if (!this.state.isLoaded) {
            return (
                <Loader/>
            )
        } else {
            return (
                <Fragment>
                <div className="edit-container row">
                    <EditCardForm {...this.state.respData} handleChange={this.handleChange} {...this.props} required={required} linkCheck={linkCheck} getData={this.getData}/>
                </div>
                <FeatureDiscovery text={text} title={title}/>
                </Fragment>
            )
        }
    }
}


export default EditCard;