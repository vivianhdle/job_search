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
        let { id, name, email, phone, edit, view } = this.props;
        console.log(this.props);
        let classAdapt = null;
        if(phone === 0  && email === ''){
            classAdapt = 'col-body-none'
        }
        if(phone === 0){
            phone = ''
        }
        return (
            <Fragment>
                <li >
                    {this.state.open && <EditContactModal view={view} exitModal={this.exitContactModal} name={name} email={email} phone={phone} id={id} />}
                    <div className="collapsible-header grey-text text-darken-2" onClick={edit && this.handleClick}>
                        <i className="material-icons grey-text text-darken-2">contacts</i>
                        {name}
                    </div>
                    <div className={`collapsible-body ${classAdapt}`}>
                        {email && <div>
                            <i className="material-icons prefix grey-text text-darken-2">email</i>
                            <div className="contact-email grey-text text-darken-2">
                                {email}
                            </div>
                        </div>}
                        {phone && <div>
                            <i className="material-icons prefix grey-text text-darken-2">phone</i>
                            <div className="contact-phone grey-text text-darken-2">
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