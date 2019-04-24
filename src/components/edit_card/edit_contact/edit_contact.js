import React, {Component} from 'react';
import { reduxForm,Field, initialize } from 'redux-form';
import {connect} from 'react-redux';
import Modal from '../../general/modal';
import Input from '../../general/input';
import Header from '../../general/header';
import axios from 'axios';
import ReactDOM from 'react-dom';

class EditContactModal extends Component{
    state={
        form: {
        name: '',
        email: '',
        phone: ''
        }
    }

    componentDidMount(){
        const action = initialize('add-contact', {name: this.props.name, email: this.props.email, phone: this.props.phone});
        this.props.dispatch(action);
        const {phone, email, name} = this.props;
        this.setState({
            form: {
                name: phone,
                email: email,
                phone: name
                }
        })
    }

    handleDeleteContact = async () => {
        const { id } = this.props;
        await axios.post('/api/delete_contact_item.php', { "id": id });
        this.props.view();
    }

    handleEditContact = async values =>{
        console.log('val',values);
        const {id} = this.props;
        const value = {...values}
        const editContact ={
            contact:{
                id: id,
                name: value.name,
                email: value.email,
                phone: value.phone
            }
        }
        const resp = await axios.post(`/api/update_contact_item.php`, editContact);
        this.props.view();
    }

    render() {
        const {handleSubmit, exitModal} = this.props;
        const{phone, email, name} =this.state.form
        return (
            <div className="action row">
                <Modal modalClass="add-contact-modal" mscss="contact">
                    <button onClick={exitModal}><i className="material-icons exit">close</i></button>
                    
                    <form onSubmit={handleSubmit(this.handleEditContact)} className="center">
                        <Header alignment="left" title="Edit Contact" newClass="col s10 offset-s1"/>
                        <Field ref={(input)=>{this.name=input}} id="name" col="s10 offset-s1" name="name" component={Input} label={!name && "Name"}/>
                        <Field ref={(input)=>{this.email=input}} id="email" col="s10 offset-s1" name="email" component={Input} label={!email && "Email"} />
                        <Field ref={(input)=>{this.phone=input}} id="phone" col="s10 offset-s1" name="phone" component={Input} label={!phone && "Phone"} />
                        
                        <button className="btn add-contact blue-grey">SUBMIT</button>
                    </form>
                    <button className="trash" onClick={this.handleDeleteContact}><i className="material-icons grey-text">delete</i></button>
                </Modal>
            </div>
        )
    }
}

export default connect() (reduxForm({
    form: 'add-contact',
})(EditContactModal)) ;