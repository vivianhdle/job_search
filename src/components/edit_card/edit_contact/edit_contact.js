import React, { Component } from 'react';
import { reduxForm, Field, initialize } from 'redux-form';
import { connect } from 'react-redux';
import Modal from '../../general/modals/modal';
import Input from '../../general/input';
import Header from '../../general/header';
import axios from 'axios';
import './edit_contact.scss'
import DeleteModal from '../../general/modals/delete_confirmation';

class EditContactModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteConfirmationOpen: false,
            form: {
                name: '',
                email: '',
                phone: ''
            },
            error: false,
            errorMsg: ''
        }
    }
    componentDidMount() {
        const action = initialize('add-contact', { name: this.props.name, email: this.props.email, phone: this.props.phone });
        this.props.dispatch(action);
        const { phone, email, name } = this.props;
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
        const resp = await axios.post('/api/delete_contact_item.php', { "id": id });
        if (resp.data.success) {
            this.props.update();
            this.props.exitModal();
        } else {
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }
    }
    handleEditContact = async values => {
        const { id } = this.props;
        const value = { ...values }
        const editContact = {
            contact: {
                id: id,
                name: value.name,
                email: value.email,
                phone: value.phone
            }
        }
        const resp = await axios.post(`/api/update_contact_item.php`, editContact);
        if (resp.data.success) {
            this.props.update();
            this.props.exitModal();
        } else {
            if (resp.data.error === ""){
                this.props.update();
            }else {
                this.setState({
                    errorMsg: resp.data.error,
                    error: true
                })
            }
        }
    }
    deleteConfirmation = () => {
        this.setState({
            deleteConfirmationOpen: true
        })
    }
    closeConfirmation = () => {
        this.setState({
            deleteConfirmationOpen: false
        })
    }
    closeErrorModal = () => {
        this.setState({
            error: false
        })
    }
    render() {
        const { handleSubmit, exitModal } = this.props;
        return (
            <div className="action row">
                {this.state.deleteConfirmationOpen ? <DeleteModal handleDelete={this.handleDeleteContact} closeModal={this.closeConfirmation} modalClass="edit-note-modal" mscss="note" /> :
                    <Modal modalClass="edit-contact-modal" mscss="contact">
                        <button className="edit-exit" onClick={exitModal}><i className="material-icons exit">close</i></button>
                        <form onSubmit={handleSubmit(this.handleEditContact)} className="center">
                            <Header title="Edit Contact" newClass="col s10 offset-s1" />
                            <Field ref={(input) => { this.name = input }} id="name" col="s10 offset-s1" name="name" component={Input} label="Name" />
                            <Field ref={(input) => { this.email = input }} id="email" col="s10 offset-s1" name="email" component={Input} label="Email"/>
                            <Field ref={(input) => { this.phone = input }} id="phone" col="s10 offset-s1" name="phone" component={Input} label="Phone" />
                            <button className="btn edit-submit">SAVE</button>
                        </form>
                        <button className="trash right" onClick={this.deleteConfirmation}><i className="material-icons">delete</i></button>
                        {this.state.error &&
                            <div className='errorMsg row'>
                                <div className="col s10 offset-s1 left-align" >
                                    <i className='material-icons prefix'>warning</i>
                                    {this.state.errorMsg}
                                </div>
                            </div>}
                    </Modal>}
            </div>
        )
    }
}

export default connect()(reduxForm({
    form: 'add-contact',
})(EditContactModal));