import React, {Fragment} from 'react';
import './contact_card.scss'

function ContactCard(props){
    const {id,name,email,phone,edit} = props;

    return(
        <Fragment>
            <li>
                <div className="collapsible-header grey-text text-darken-2">
                    <i className="material-icons grey-text text-darken-2">contacts</i>
                    {name}
                </div>
                <div className="collapsible-body">
                    <span>
                        <i className="material-icons prefix grey-text text-darken-2">email</i>
                        <div className="contact-email grey-text text-darken-2">
                            {email}
                        </div>
                    </span>
                    <br/>
                    <span>
                        <i className="material-icons prefix grey-text text-darken-2">phone</i>
                        <div className="contact-phone grey-text text-darken-2">
                            {phone}
                        </div>
                    </span>
                </div>
            </li>
        </Fragment>
    )
}





export default ContactCard;