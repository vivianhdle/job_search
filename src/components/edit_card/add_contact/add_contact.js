import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Modal from '../../general/modals/modal';
import Input from '../../general/input';
import './add_contact.scss';
import Header from '../../general/header';

class AddContactModal extends Component {
    render() {
        const { addContact, handleSubmit, exitModal} = this.props
        return (
            <div className="action row">
                <Modal modalClass="add-contact-modal" mscss="contact">
                    <button onClick={exitModal}><i className="material-icons exit">close</i></button>
                    <form onSubmit={handleSubmit(addContact)} className="center">
                        <Header title="Add Contact" newClass="col s10 offset-s1" />
                        <Field id="name" col="s10 offset-s1" name="name" component={Input} label="Name" />
                        <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email" type="email"/>
                        <Field id="phone" col="s10 offset-s1" name="phone" component={Input} label="Phone"  type="number"/>
                        <button className="btn add-contacts">SUBMIT</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-contact',
})(AddContactModal);