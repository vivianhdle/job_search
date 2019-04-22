import React, {Fragment} from 'react';
import DeleteButton from '../general/button';

function ContactCard(props){
    const {id,name,email,phone,edit} = props;

    return(
        <Fragment>
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">contacts</i>
                    {name}
                    {edit && <DeleteButton icon="cancel" classes="contact"/>}  
                </div>
                <div className="collapsible-body">
                    <span>
                        <i className="material-icons prefix">email</i>
                        <div className="contact-email">
                            {email}
                        </div>
                    </span>
                    <br/>
                    <span>
                        <i className="material-icons prefix">phone</i>
                        <div className="contact-phone">
                            {phone}
                        </div>
                    </span>
                </div>
            </li>
        </Fragment>
    )
}





export default ContactCard;