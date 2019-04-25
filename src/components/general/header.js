import React from 'react';
import './header.scss';

function Header(props) {
    const { alignment = "center", margin, title, newClass = "" } = props;
    const style = {
        "marginTop": margin
    }
    return (
        <div className={`row title-header ${alignment} ${newClass}`} style={style}>
            <div className="col s10 offset-s1">
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Header;