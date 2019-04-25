import React from 'react';
import './header.scss';

function Header(props) {
    const { alignment = "", title, newClass = "" } = props;
    return (
        <div className={`row title-header ${alignment} ${newClass}`}>
            <div className="title-content col s10 offset-s1">
                {title}
            </div>
        </div>
    )
}

export default Header;