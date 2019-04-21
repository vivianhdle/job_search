import React, {Component,Fragment} from 'react';
import Input from '../general/input';
import {Field,reduxForm,FormSection} from 'redux-form';
import ContactForm from '../prospect/contact';
import TextArea from '../general/textarea';
import NoteList from './note_list'; 
import ContactList from './contact_list';
import {formatTime} from '../helpers';
import Header from '../general/header';
import './edit_form_card.scss';
import Dropdown from '../prospect/progress';


class EditFormCard extends Component{
    state={
        addNote:false,
        addContact:false,
        form:{
            company:'',
            title:'',
            link:''
        }
    }
    componentDidMount(){

    }
    render(){
        var {title,company,contact=[],created,link,note=[],progress} = this.props
        console.log('Edit Form Card:',this.props)
        return(
        <Fragment>
            <Dropdown col="s10 offset-s1" progress={progress}/>
            <form action="">
                <div className="row">
                    <Field id="company" col="s10 offset-s1" currentValue={company} name="company" component={Input} />
                    <Field id="title" col="s10 offset-s1" currentValue={title} name="title" component={Input}/>
                    <Field id="link" col="s10 offset-s1" currentValue={link} name="link" component={Input}/>
                </div>
                <div className="row">
                    <div className="s10 right-align offset-s1 col view-main-text created" col="s10 offset-s1" ><em>Added {formatTime(created)}</em></div>
                </div>
                <ContactList contact={contact}/>
                <NoteList note={note}/>
            </form>
        </Fragment>  
        )
    }
    
}

export default reduxForm({
    form: 'edit-job-card',
    // validate: validate
})(EditFormCard);