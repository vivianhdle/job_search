import React, {Component} from 'react';
import {formatTime} from '../helpers';
import './note_card.scss'
import DeleteButton from '../general/button';

class NoteCard extends Component{
    constructor(props){
        super(props);
    }

    editNote = () =>{

    }

    componentDidMount(){
        
    }

    render(){
        const {id,created,input,edit} = this.props
    return(
        <div className="row" >
            <div className="col s10 offset-s1">
                <div className="card white">
                <div className="card-content teal-text text-lighten-2">
                    <p>{input}</p>
                    <span className="card-date created right"><em>{formatTime(created)}</em></span>
                </div>
                </div>
            </div>
            {edit && <DeleteButton icon="close" classes="deletebutton"/>}
        </div>
    )
    }
}



export default NoteCard;