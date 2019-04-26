import React, { Component } from 'react';
import ContactCard from '../cards/contact_card';

class ContactList extends Component {
    componentDidMount() {
        M.Collapsible.init(this.contacts);
    }
    render() {
        const contactElements = this.props.contact.map((contact) => {
            return (
                <ContactCard view={this.props.view} edit={this.props.edit} key={contact.id} {...contact} numberPhone={this.props.numberPhone}/>
            )
        })
        return (
            <div className="row">
                <div className="contacts col s10 offset-s1">
                    <ul className="collapsible" ref={(element) => this.contacts = element}>
                        {contactElements}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ContactList;