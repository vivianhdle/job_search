import React, {Component} from 'react';
import {formatTime} from '../helpers';
import './note_card.scss';
import EditNote from '../edit_card/edit_note/edit_note'
import axios from 'axios';

class NoteCard extends Component{
    state={
        editNoteOpen: false,
        
    }

    handleClick = ()=>{
        this.setState({
            editNoteOpen: true
        })
    }

    handleEditNote = async values =>{
        const {id} = this.props
        const editNoteValues ={
            id: id,
            note: values.note
        }
        const resp = await axios.post('/api/update_note_item.php', editNoteValues);
    }

    render(){
        const {id,created,input,edit} = this.props;
    return(
        <div className="row" >
            <div className="col s10 offset-s1">
                <div className="card white" onClick={edit && this.handleClick}>
                {this.state.editNoteOpen && <EditNote editNote={this.handleEditNote} fieldInput={input}/>}
                    <div className="card-content blue-grey-text">
                        <p>{input}</p>
                        <span className="card-date created right"><em>{formatTime(created)}</em></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
    }
}

export default NoteCard;

//{edit && <DeleteButton icon="close" classes="deletebutton"/>}
//note card on click popus up modal
//modal is a field in a form that shows default text from previous entry
