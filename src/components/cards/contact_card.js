import React, { Fragment, Component } from 'react';
import './contact_card.scss';
import EditContactModal from '../edit_card/edit_contact/edit_contact';


class ContactCard extends Component {
    state = {
        open: false

    }
    handleClick = () => {
        this.setState({
            open: true
        })
    }
    exitContactModal = () => {
        this.setState({
            open: false,
        })
    }
    render() {
        let { id, name, email, phone, edit, update,css } = this.props;
        name = !name ? 'No Name' : name;
        let classAdapt = '';
        if(!phone && !email){
            classAdapt = 'col-body-none'
        }
        if(phone === 0){
            phone = ''
        }
        return (
            <Fragment>
                <li >
                    {this.state.open && <EditContactModal update={update} exitModal={this.exitContactModal} name={name} email={email} phone={phone} id={id} />}
                    <div className="collapsible-header" onClick={edit && this.handleClick} style={css}>
                        <i className="material-icons">contacts</i>
                        {name}
                    </div>
                    <div className={`collapsible-body ${classAdapt}`}>
                        {email && <div className={email && phone ? 'double-info' : ''}>
                            <i className="material-icons prefix">email</i>
                            <div className="contact-email">
                                {email}
                            </div>
                        </div>}
                        {phone && <div>
                            <i className="material-icons prefix">phone</i>
                            <div className="contact-phone">
                                {phone}
                            </div>
                        </div>}
                    </div>
                    
                </li>
            </Fragment>
        )
    }
}

export default ContactCard;