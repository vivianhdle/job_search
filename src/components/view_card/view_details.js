import React, { Component, Fragment } from 'react';
import NoteList from './note_list';
import ContactList from './contact_list';
import Header from '../general/header';
import './view_details.scss';
import { formatTime } from '../helpers/index';
import ActionButton from '../general/buttons/action_button';

class ViewDetails extends Component {
    constructor(props){
        super(props);
        this.icons={
            'Started Application':'description',
            'Waiting for Response':'watch_later',
            'Follow-up Needed': 'whatshot',
            'Archived':'archive'
        }
    }
    render() {
        const { title, company, contact = [], created, link, note = [], progress, handleEdit } = this.props;
        return (
            <Fragment>
                <div className="row">
                    <ActionButton handleClick={handleEdit} icon="edit" classes="action-button btn-floating" size="btn" />
                    <div className="info col s10 offset-s1">
                        <div className="view-main-text company">{company}</div>
                        <span className="right"><i className="material-icons grey-text ">{this.icons[progress]}</i></span>
                        <div className="view-main-text">{title}</div>
                        <div className="view-main-text">{progress}</div>
                        {link && <a href={link} target="_blank" className="view-main-text posting-link">Posting Link</a>}
                        <div className="right-align view-main-text created "><em>Added {formatTime(created)}</em></div>
                    </div>
                </div>
                <Header title="Contacts" alignment="left" newClass="view-section-header" />
                {contact.length ? <ContactList contact={contact} /> : <ContactList contact={[{ name: 'No Contacts Added', phone: 0, email: '', id: 1 }]} css={{cursor:"auto"}}/>}
                <Header title="Notes" alignment="left" newClass="view-section-header" />
                {note.length ? <NoteList note={note} /> : <NoteList note={[{ input: 'No Notes Added', created: "1970-01-01 00:00:00", id: 1 }]} />}
            </Fragment>
        )
    }
}



export default ViewDetails;