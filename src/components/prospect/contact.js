import React, { Component, Fragment } from 'react';
import { Field, FormSection } from 'redux-form';
import Input from '../general/input';
import './contact.scss';

class ContactForm extends Component {
    componentDidMount() {
        M.Collapsible.init(this.contact);
    }
    render() {
        return (
            <div className="col s10 offset-s1">
                <FormSection name={this.props.name}>
                    <ul className="collapsible" ref={(element) => {
                        this.contact = element
                    }}>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">person_add</i>Contacts</div>
                            <div className="collapsible-body">
                                <Field id="name" col="s12" name="name" component={Input} label="Name" icon="person_outline"/>
                                <Field id="email" col="s12" name="email" component={Input} label="Email" icon="mail_outline"/>
                                <Field id="phone" col="s12" name="phone" component={Input} label="Phone" icon="smartphone" />
                            </div>
                        </li>
                    </ul>
                </FormSection>
            </div>
        );
    }
}

export default ContactForm;