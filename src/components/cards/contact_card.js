import React from 'react';

function ContactCard(props){
    const {id,name,email,phone} = props;

    return(
        <li>
            <div className="collapsible-header"><i className="material-icons">contacts</i>{name}</div>
            <div className="collapsible-body">
                <span>
                    <i className="material-icons prefix">email</i>{email}
                </span>
                <br/>
                <span>
                    <i className="material-icons prefix">phone</i>{phone}
                </span>
            </div>
        </li>
        // <li class="active">
        //     <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
        // </li>
    )
}





export default ContactCard;