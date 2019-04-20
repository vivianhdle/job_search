import React, {Component} from 'react';
import axios from 'axios';
import NoteCard from '../cards/note_card';
import CardContact from '../cards/contact_card';
import {formatTime} from '../helpers';
import './view_card.scss'
import ContactCard from '../cards/contact_card';
import {Field,reduxForm} from 'redux-form';


class ViewCard extends Component{
    state = {
        isLoaded:false,
        respData:null
    }

    componentDidMount(){
        this.getRespData();
        M.Collapsible.init(this.contacts);
        
    }

    async getRespData(){
        const {params} = this.props.match;
        //const resp = await axios.get(`/api/data/get_tracker_item.json?id=${params.id}`);
        console.log('params', params.id);
        const resp = await axios.get(`/api/get_tracker_item.php?trackerId=${params.id}`);
        this.setState({
            respData: resp.data.data,
            isLoaded:true
        })
        console.log('Resp Info', this.state.respData);
        console.log('Props', this.props);
    }

    render(){
        // const {title,company,contact=[],created,link,note=[],progress} = this.state.respData
        // const noteElements = note.map((note)=>{
        //     return (
        //         <NoteCard key={note.id} {...note}/>
        //     )
        // })
        // const contactElements=contact.map((contact)=>{
        //     return(
        //         <ContactCard key={contact.id} {...contact} />
        //     )
        // })
        // //more than one contact
        // console.log(this.state.respData);

        return(
            <div>hello</div>
            // <div className="details-container">
            //     <div className="row">
            //         <div className="info col s10 offset-s1">
            //             <h5>{progress}</h5>
            //             <span><button className="btn-floating waves-effect btn-small right"><i class="material-icons">edit</i></button></span>
            //             <div><strong>{company}</strong></div>
            //             <div>{title}</div>
            //             <div>{link}</div>
            //             <div className="right-align created"><em>Added {formatTime(created)}</em></div>
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="contacts col s10 offset-s1">
            //             <ul className="collapsible" ref={(element)=>this.contacts=element}>
            //                 {contactElements}
            //             </ul>
            //         </div>
            //     </div>
                
            //     <div className="notes">
            //         {noteElements}
            //     </div>
            // </div>
        )
    }
}

export default ViewCard;