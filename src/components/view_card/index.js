import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from '../cards/note_card';
import ViewFormCard from './view_form_card';
import ContactList from './contact_list';
import NoteList from './note_list';
import './view_card.scss';

class ViewCard extends Component {
    state = {
        isLoaded: false,
        respData: null
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
        M.Collapsible.init(this.contacts);
    }
    render() {
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            const { title, company, contact = [], created, link, note = [], progress } = this.state.respData
            return (
                <div className="details-container">
                    <ViewFormCard {...this.state.respData}/>
                </div>
            )
        }
    }

}

export default ViewCard;