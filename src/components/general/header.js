import React, {Fragment} from 'react';
import './header.scss';

function Header(props) {
    const { alignment = "center", title, newClass = "", addButton=false, addHandler} = props;
    return (
            <div className="row">
                <div className={`row title-header ${alignment} ${newClass}`}>
                    <div className="title-content col s10 offset-s1">
                        {title}
                    </div>
                </div>
                {addButton && <div><i onClick={addHandler} className="material-icons teal-text text-lighten-1">add</i></div>}
            </div>
    )
}

export default Header;