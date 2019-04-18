import React from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';

export default function Tracker(props){
    return (
        <div className="tracker-container">
            <Status progress="Started Application" id="test-swipe-1"/>
            <Status progress="Waiting for Response" id="test-swipe-2"/>
            <Status progress="Follow-up Needed" id="test-swipe-3"/>
            <Status progress="Archived" id="test-swipe-4"/>
            <NavCookies/>
        </div>
    )
}
// feed NavCookies Status elements