import React, {Component,Fragment} from 'react';
import NoteList from './note_list';
import ContactList from './contact_list';
import Header from '../general/header';
import './view_details.scss';
import {formatTime} from '../helpers/index';
import ActionButton from '../general/action_button';

class ViewDetails extends Component{
    render(){
        const { title, company, contact = [], created, link, note = [], progress, handleEdit } = this.props;
        return(
            <Fragment>
                <div className="row">
                    <ActionButton handleClick={handleEdit} icon="edit" classes="blue-grey btn-floating" size="btn"/>
                    {/* <span><button className="blue-grey btn-floating waves-effect btn right edit"><i className="material-icons">edit</i></button></span> */}
                    <div className="info col s10 offset-s1">
                        <div className="view-main-text company">{company}</div>
                        <div className="view-main-text grey-text text-darken-2">{title}</div>
                        <div className="view-main-text grey-text text-darken-2">{progress}</div>
                        <a href={link} target="_blank" className="view-main-text teal-text text-lighten-2">{link}</a>
                        <div className="right-align created view-main-text"><em>Added {formatTime(created)}</em></div>
                    </div>
                </div>
                <ContactList contact={contact}/>
                <NoteList note={note}/>
            </Fragment>
        )
    }
}



export default ViewDetails;