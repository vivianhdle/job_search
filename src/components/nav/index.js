import React,{Component,Fragment} from 'react';
import SideNav from './sidenav';
import {Link} from 'react-router-dom';

class Nav extends Component{
    renderLinks(){
        return(
            <Fragment>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/prospect">Job Prospect</Link>
                </li>
            </Fragment>
        )
    }
    render(){
        const links = this.renderLinks()
        return(
            <Fragment>
                <nav>
                    <div className="nav-wrapper blue-grey ">
                        <Link className="brand-logo" to="/">Tracker</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">{links}</ul>
                    </div>
                </nav>
                <SideNav links={links}/>
            </Fragment>
            
        )
    }
}

export default Nav;