import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from '../cards/note_card';
import { formatTime } from '../helpers';
import './view_card.scss'
import ContactCard from '../cards/contact_card';
import Header from '../general/header';
import ContactList from './contact_list';
import NoteList from './note_list';

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
            const noteElements = note.map((note) => {
                return (
                    <NoteCard key={note.id} {...note} />
                )
            })
            return (
                <div className="details-container">
                    <div className="row">
                        <div className="info col s10 offset-s1">
                            <Header title={progress} bgcolor="rgba(243, 243, 243, 0.856)" />
                            <div className="view-main-text company">{company}</div>
                            <span><button className="blue-grey btn-floating waves-effect btn-small right"><i className="material-icons">edit</i></button></span>
                            <div className="view-main-text">{title}</div>
                            <a href={link} target="_blank" className="view-main-text teal-text text-lighten-2">Website Link</a>
                            <div className="right-align created view-main-text"><em>Added {formatTime(created)}</em></div>
                        </div>
                    </div>
                    <ContactList contact={contact}/>
                    <NoteList note={note}/>>
                </div>
            )
        }
    }

}

export default ViewCard;