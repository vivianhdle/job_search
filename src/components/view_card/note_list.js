import React, {Component} from 'react';
import NoteCard from '../cards/note_card';

class NoteList extends Component{
    state ={
        noteElements: null
    }
    componentDidMount(){
    const {note} = this.props;
    const noteElements = note.map((note)=>{
        return (
            <NoteCard edit={this.props.edit} key={note.id} {...note} view={this.props.view}/>
        )
    })
    this.setState({
        noteElements: noteElements
    })
    }
    render(){
        return(
        <div className="notes">
            {this.state.noteElements}
        </div>
    )}
}
export default NoteList;