import React from 'react';
import './no_items.scss';
import {Link} from 'react-router-dom';

function NoItems(props){
    const {progress} = props;
    return(
        <div className="photo-container">
            <Link to={{pathname:"/prospect",search:`?progress=${progress}`}}><div className="photo-content"></div></Link>
            <div className="text-content center">You have no job prospects, click the plus button to add.</div>
        </div>
    )
}

export default NoItems;