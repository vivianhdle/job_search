import React from 'react';
import {formatTime} from '../helpers';
import './note_card.scss'

function NoteCard(props){
    const {id,created,input} = props
    console.log(props);
    return(
        <div className="row">
            <div className="col s10 offset-s1">
                <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <p>{input}</p>
                    <span className="card-date created right"><em>{formatTime(created)}</em></span>
                </div>
                </div>
            </div>
        </div>
    )
}



export default NoteCard;