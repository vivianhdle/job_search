import React from 'react';
import './no_items.scss';

function NoItems(){
    return(
        <div className="photo-container">
            <div className="photo-content"></div>
            <div className="text-content center">You have no job prospects, click the plus button to add</div>
        </div>
    )
}

export default NoItems;