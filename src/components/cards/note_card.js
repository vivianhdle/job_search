import React, { Component } from 'react';
import { formatTime } from '../helpers';
import './note_card.scss';
import EditNote from '../edit_card/edit_note/edit_note';

class NoteCard extends Component {
    state = {
        editNoteOpen: false
    }
    handleClick = () => {
        this.setState({
            editNoteOpen: true
        })
    }
    handleClose = () => {
        this.setState({
            editNoteOpen: false
        })
    }
    render() {
        const { id, created, input, edit, view } = this.props;
        return (
            <div className="row" >
                <div className="col s10 offset-s1">
                    {this.state.editNoteOpen && <EditNote fieldInput={input} id={id} closeModal={this.handleClose} view={view} />}
                    <div className="card white" onClick={edit && this.handleClick}>
                        <div className="card-content">
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
