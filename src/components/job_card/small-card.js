import React from 'react';

function SmallCard(props){
    const {company,created,id,progress,title} = props;
    return(
        <div className="small-card-container col s10 offset-s1">
            <span className="company">{company}</span>
            <span className="title">{title}</span>
            <span className="created right">{created}</span>
        </div>
    )
}

export default SmallCard;