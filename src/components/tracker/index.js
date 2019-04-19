import React,{Component} from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';

class Tracker extends Component{
    render(){
        let width=window.innerWidth;
        return (
            <div className="tracker-container show-on-small">
                <Status progress="Started Application" id="test-swipe-1"/>
                <Status progress="Waiting for Response" id="test-swipe-2"/>
                <Status progress="Follow-up Needed" id="test-swipe-3"/>
                <Status progress="Archived" id="test-swipe-4"/>
                <NavCookies/>
            </div>
        )
    }
    
}


export default Tracker
// feed NavCookies Status elements