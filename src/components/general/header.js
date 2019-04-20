import React from 'react';
import './header.scss';

function Header(props){
    const style= {
        "background-color":props.color
    }
    return(
        <div className="row title-header center" style={style}>
            <div className="col s10 offset-s1">
                <span>{props.title}</span>
            </div>
        </div>
    )
}


export default Header;