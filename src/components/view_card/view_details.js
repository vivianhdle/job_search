import React, {Fragment} from 'react';
import NoteList from './note_list';
import ContactList from './contact_list';
import Header from '../general/header';
import './view_details.scss';
import {formatTime} from '../helpers/index';

function ViewDetails(props){
    const { title, company, contact = [], created, link, note = [], progress } = props;
    return(
        <Fragment>
            <div className="row">
                <div className="info col s10 offset-s1">
                    <Header title={progress} bgcolor="rgba(243, 243, 243, 0.856)" />
                    <div className="view-main-text company">{company}</div>
                    <span><button onClick={props.handleEdit} className="blue-grey btn-floating waves-effect btn-small right"><i className="material-icons">edit</i></button></span>
                    <div className="view-main-text">{title}</div>
                    <a href={link} target="_blank" className="view-main-text teal-text text-lighten-2">Posting Link</a>
                    <div className="right-align created view-main-text"><em>Added {formatTime(created)}</em></div>
                </div>
            </div>
            <ContactList contact={contact}/>
            <NoteList note={note}/>
        </Fragment>
    )
}



export default ViewDetails;