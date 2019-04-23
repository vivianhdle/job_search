import React from 'react';
import './header.scss';

function Header(props){
    const {alignment="center",margin,bgcolor} = props;
    const style= {
        "marginTop":margin
    }
    return(
        <div className={`row title-header ${alignment}`} style={style}>
            <div className="col s10 offset-s1">
                <span>{props.title}</span>
            </div>
        </div>
    )
}


export default Header;