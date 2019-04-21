import React, {Fragment} from 'react';
import Input from '../general/input';
import {Field,reduxForm,FormSection} from 'redux-form';
import ContactForm from '../prospect/contact';
import TextArea from '../general/textarea';
import NoteList from './note_list'; 
import ContactList from './contact_list';
import {formatTime} from '../helpers';
import Header from '../general/header';
import './view_card.scss';



function ViewFormCard(props){
    var {title,company,contact=[],created,link,note=[],progress} = props
    console.log('ViewForm Card:',props)
    return(
        // <div className="row">
        //     <div className="info col s10 offset-s1">
        //         <Header title={progress} bgcolor="rgba(243, 243, 243, 0.856)" />
        //         <div className="view-main-text company">{company}</div>
        //         <span><button className="blue-grey btn-floating waves-effect btn-small right"><i className="material-icons">edit</i></button></span>
        //         <div className="view-main-text">{title}</div>
        //         <a href={link} target="_blank" className="view-main-text teal-text text-lighten-2">Website Link</a>
        //         <div className="right-align created view-main-text"><em>Added {formatTime(created)}</em></div>
        //     </div>
        // </div>
        <Fragment>
            <Header title={progress} bgcolor="rgba(243, 243, 243, 0.856)"/>
            <form action="">
                <div className="row">
                    <Field id="company" col="s10 offset-s1" currentValue={company} name="company" component={Input} />
                    <Field id="title" col="s10 offset-s1" currentValue={title} name="title" component={Input}/>
                    <Field id="link" col="s10 offset-s1" currentValue={link} name="link" component={Input}/>
                </div>
                <div className="row">
                    <div className="s10 right-align offset-s1 col created" col="s10 offset-s1" ><em>Added {formatTime(created)}</em></div>
                </div>
                <ContactList contact={contact}/>
                <NoteList note={note}/>
            </form>
        </Fragment>  
    )
}

{/* <div className="row">
    <div className="info col s10 offset-s1">
        <Header title={progress} bgcolor="rgba(243, 243, 243, 0.856)" />
        <div className="view-main-text company">{company}</div>
        <span><button className="blue-grey btn-floating waves-effect btn-small right"><i className="material-icons">edit</i></button></span>
        <div className="view-main-text">{title}</div>
        <a href={link} target="_blank" className="view-main-text teal-text text-lighten-2">Website Link</a>
        <div className="right-align created view-main-text"><em>Added {formatTime(created)}</em></div>
    </div>
</div> */}


export default reduxForm({
    form: 'add-job-card',
    // validate: validate
})(ViewFormCard);