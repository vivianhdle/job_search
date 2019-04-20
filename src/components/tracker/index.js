import React,{Component, Fragment} from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import {Route} from 'react-router-dom';

class Tracker extends Component{
    render(){
        return (
            <div className="tracker-container show-on-small">
                <Route render={(routingprops)=>{
                    return(
                        <Fragment>
                            <Status progress="Started Application" id="test-swipe-1" {...routingprops}/>
                            <Status progress="Waiting for Response" id="test-swipe-2" {...routingprops}/>
                            <Status progress="Follow-up Needed" id="test-swipe-3" {...routingprops}/>
                            <Status progress="Archived" id="test-swipe-4" {...routingprops}/>
                        </Fragment>
                    )
                }} />
                <NavCookies/>
            </div>
        )
    }
    
}


export default Tracker
