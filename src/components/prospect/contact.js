import React, { Component, Fragment } from 'react';
import { Field, FormSection } from 'redux-form';
import Input from '../general/input';

class ContactForm extends Component {
    componentDidMount() {
        M.Collapsible.init(this.contact);
    }

    render() {
        return (
            <Fragment>
                <FormSection name={this.props.name} col="s10 offset-s1">
                    <ul className="collapsible" ref={(element) => {
                        this.contact = element
                    }}>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">contacts</i>Contacts</div>
                            <div className="collapsible-body">
                                <Field id="name" col="s12" name="name" component={Input} label="Name" />
                                <Field id="email" col="s12" name="email" component={Input} label="Email" />
                                <Field id="phone" col="s12" name="phone" component={Input} label="Phone" />
                            </div>
                        </li>
                    </ul>
                </FormSection>
            </Fragment>
        );
    }

}

export default ContactForm;