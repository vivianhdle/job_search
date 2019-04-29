import React from 'react';

export default props => (
    <div className={props.name}>
        <div>{props.name}</div>
        <div>{props.image}</div>
        <div>{props.bio}</div>
    </div>
)