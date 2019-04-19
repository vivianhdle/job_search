import React from 'react';
import './header.scss';

function Header(props){
    return(
        <div className="row title-header center">
            <div className="col s10 offset-s1">{props.title}</div>
        </div>
    )
}


export default Header;