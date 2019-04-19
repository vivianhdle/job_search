import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Status from '../../tracker/status';
import { callbackify } from 'util';
import './navcookies.scss';

class NavCookies extends Component{
    state ={
        options:{
            swipeable:false
        }
    }
    
    renderLinks(){
        return(
            <li>
                <Link to="/">Job Tracker</Link>
            </li>
        );
    }

    componentDidMount(){
        M.Tabs.init(this.navcookie, this.state);
    }

    render(){
        return(
            <Fragment>
                <ul ref={(element)=>this.navcookie=element} id="tabs-swipe-demo" className="tabs navcookie hide-on-med-and-up">
                    <li className="tab col s4 "><a href="#test-swipe-1"><i className="material-icons">note_add</i></a></li>
                    <li className="tab col s4"><a className="active" href="#test-swipe-2"><i className="material-icons">watch_later</i></a></li>
                    <li className="tab col s4"><a href="#test-swipe-3"><i className="material-icons">whatshot</i></a></li>
                    <li className="tab col s4"><a href="#test-swipe-4"><i className="material-icons">archive</i></a></li>
                </ul>
            </Fragment>
        )
    }
}

export default NavCookies;