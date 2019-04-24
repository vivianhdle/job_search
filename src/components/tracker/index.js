import React,{Component, Fragment} from 'react';
import Status from './status';
import NavCookies from '../nav/navcookies';
import {Route} from 'react-router-dom';
import ActionButton from '../general/buttons/action_button';

class Tracker extends Component{
    goToProspect = () => {
        this.props.history.push('/prospect');
    }
    render(){
        return (
            <div className="tracker-container">
                <Route render={(routingprops)=>{
                    return(
                        <Fragment>
                            <Status progress="Started Application" id="test-swipe-1" {...routingprops}/>
                            <Status progress="Waiting for Response" id="test-swipe-2" {...routingprops}/>
                            <Status progress="Follow-up Needed" id="test-swipe-3" {...routingprops}/>
                            <Status progress="Archived" id="test-swipe-4" {...routingprops}/>
                            <ActionButton handleClick={this.goToProspect} size="btn btn-floating" classes="blue-grey darken-1 add-prospect" icon="add"/>
                        </Fragment>
                    )
                }} />
                <NavCookies/>
            </div>
        )
    }
    
}


export default Tracker
