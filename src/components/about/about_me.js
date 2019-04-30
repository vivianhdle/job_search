import React from 'react';

export default props => (
    <div className="about-me-container">
        <div className={`${props.name} col s10 offset-s1`}>
            <div>{props.name}</div>
            <div>{props.image}</div>
            <div>{props.bio}</div>
        </div>
    </div>
)