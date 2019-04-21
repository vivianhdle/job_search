import React from 'react';
import Input from '../general/input';
import {Field,reduxForm,FormSection} from 'redux-form';
import ContactForm from '../prospect/contact';
import TextArea from '../general/textarea';
import NoteList from './note_list'; 
import ContactList from './contact_list';
import {formatTime} from '../helpers';



function ViewFormCard(props){
    var {title,company,contact=[],created,link,note=[],progress} = props
    console.log('ViewForm Card:',props)
    return(
        <form action="">
            <div className="row">
                <Field id="company" col="s10 offset-s1" currentValue={company} name="company" component={Input} />
            </div>
            <div className="row">
                <Field id="title" col="s10 offset-s1" currentValue={title} name="title" component={Input}/>
            </div>
            <div className="row">
                <div className="right-align created" col="s10 offset-s1" ><em>Added {formatTime(created)}</em></div>
            </div>
            <div className="row">
                <Field id="link" col="s10 offset-s1" currentValue={link} name="link" component={Input}/>
            </div>
            <ContactList contact={contact}/>
            <NoteList note={note}/>
            <div className="btn-wrapper row">
                <button className="btn blue-grey submit-button">Submit</button>
            </div>
        </form>
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
</div> */}

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