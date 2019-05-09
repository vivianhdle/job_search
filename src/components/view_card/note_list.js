import React from 'react';
import NoteCard from '../cards/note_card';

function NoteList(props){
    const {note} = props;
    let newList = [...note].reverse();
    const noteElements = newList.map((note) => {
        return (
            <NoteCard edit={props.edit} key={note.id} {...note} update={props.update} />
        )
    })
    return (
        <div className="notes">
            {noteElements}
        </div>
    )

}
export default NoteList;