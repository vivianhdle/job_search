import React from 'react';
import NoteCard from '../cards/note_card';

function NoteList(props){
    const notes = props.note
    const noteElements = notes.map((note)=>{
        return (
            <NoteCard edit={props.edit} key={note.id} {...note}/>
        )
    })
    return (
        <div className="notes">
            {noteElements}
        </div>
    )
}
export default NoteList;