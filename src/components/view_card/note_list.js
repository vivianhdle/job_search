import React from 'react';
import NoteCard from '../cards/note_card';

function NoteList(props){
    const {note, css} = props;
    let newList = [...note].reverse();
    const noteElements = newList.map((note) => {
        return (
            <NoteCard edit={props.edit} key={note.id} {...note} update={props.update} css={css}/>
        )
    })
    return (
        <div className="notes">
            {noteElements}
        </div>
    )

}
export default NoteList;