import React, {Component} from 'react';
import EditCardForm from './edit_form_card';
import axios from 'axios';

class EditCard extends Component{
    state = {
        respData: null,
        isLoaded:false,
        params: null
    }
    componentDidMount() {
        this.getData();
    }
    async getData(){
        const { params } = this.props.match;
        const resp = await axios.get(`/api/get_tracker_item.php?trackerId=${params.id}`);
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
    render(){
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            return (
                <div className="edit-container">
                    <EditCardForm {...this.state.respData} handleChange={this.handleChange}/>
                </div>
            )
        }            
    }
}


export default EditCard;