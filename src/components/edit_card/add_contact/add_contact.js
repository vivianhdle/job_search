import React, {Component} from 'react';
import { Field } from 'redux-form';
import Modal from '../../general/modal';
import Input from '../../general/input';
import './add_contact.scss';

class AddContactModal extends Component{
    render() {
        return (
            <div className="action row center">
                <Modal modalClass="add-contact-modal" mscss="contact">
                    <form>
                        <Field id="name" col="s10 offset-s1" name="name" component={Input} label="Name" />
                        <Field id="email" col="s10 offset-s1" name="email" component={Input} label="Email" />
                        <Field id="phone" col="s10 offset-s1" name="phone" component={Input} label="Phone" />
                    </form>
                </Modal>
            </div>
        )
    }
}


export default AddContactModal;