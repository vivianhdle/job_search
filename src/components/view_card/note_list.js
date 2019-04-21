import React from 'react';
import NoteCard from '../cards/note_card';

function NoteList(props){
    const noteElements = props.note.map((note)=>{
        return (
            <NoteCard key={note.id} {...note}/>
        )
    })
    return (
        <div className="notes">
            {noteElements}
        </div>
    )
}
export default NoteList;