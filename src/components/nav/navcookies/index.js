import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Status from '../../tracker/status';

class NavCookies extends Component{
    componentDidMount(){
        M.Tabs.init(this.navcookie)
    }
    render(){
        return(
            <Fragment>
                <ul ref={(element)=>this.navcookie=element} id="tabs-swipe-demo" className="tabs navcookie">
                    <li className="tab col s4"><a href="#test-swipe-1">Test 1</a></li>
                    <li className="tab col s4"><a className="active" href="#test-swipe-2">Test 2</a></li>
                    <li className="tab col s4"><a href="#test-swipe-3">Test 3</a></li>
                    <li className="tab col s4"><a href="#test-swipe-4">Test 4</a></li>
                </ul>
            </Fragment>
        )
    }
}

export default NavCookies;