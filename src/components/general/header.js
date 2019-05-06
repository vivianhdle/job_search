import React, {Fragment} from 'react';
import './header.scss';

function Header(props) {
    const { alignment = "center", title, newClass = "", addButton=false, addHandler,col='col s10 offset-s1'} = props;
    return (
            <Fragment>
                <div className={`row title-header ${alignment} ${newClass}`}>
                    <div className={`title-content ${col}`}>
                        {title}
                    </div>
                </div>
                {addButton && <div><i onClick={addHandler} className="material-icons">add</i></div>}
            </Fragment>
    )
}

export default Header;