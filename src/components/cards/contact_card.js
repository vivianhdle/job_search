import React from 'react';

function ContactCard(props){
    const {id,name,email,phone} = props;

    return(
        <li>
            <div className="collapsible-header"><i className="material-icons">contacts</i>{name}</div>
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
        // <li class="active">
        //     <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
        // </li>
    )
}





export default ContactCard;