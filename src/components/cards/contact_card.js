import React from 'react';

function ContactCard(props){
    const {id,name,email,phone} = props;

    return(
        <li>
            <div class="collapsible-header"><i class="material-icons">contacts</i>{name}</div>
            <div class="collapsible-body">
                <span>
                    <i class="material-icons prefix">email</i>{email}
                </span>
                <br/>
                <span>
                    <i class="material-icons prefix">phone</i>{phone}
                </span>
            </div>
        </li>
        // <li class="active">
        //     <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
        // </li>
    )
}





export default ContactCard;