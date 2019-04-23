import React, {Component} from 'react';
import { reduxForm,Field } from 'redux-form';
import Modal from '../../general/modal';
import Input from '../../general/input';
import './add_contact.scss';

class AddContactModal extends Component{
    render() {
        const {addContact, handleSubmit} = this.props 
        return (
            <div className="action row center">
                <Modal modalClass="add-contact-modal" mscss="contact">
                    <form onSubmit={handleSubmit(addContact)}>
                        <Field id="name" col="s10 offset-s1" name="name" component={Input} label="Name" />
                        <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email" />
                        <Field id="phone" col="s10 offset-s1" name="phone" component={Input} label="Phone" />
                        <button className="btn blue-grey">submit</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-contact',
})(AddContactModal);