import React, { Component, Fragment } from 'react';
import SideNav from './sidenav';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
    renderLinks() {
        return (
            <Fragment>
                <li className="sidenav-close">
                    <Link to="/">Home</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/tracker">View Prospects</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/prospect">Add Prospect</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        )
    }
    render() {
        const links = this.renderLinks()
        const {title} = this.props;
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper navbar-fixed blue-grey">
                        <Link className="brand-logo center" to="/">{title}</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">{links}</ul>
                    </div>
                </nav>
                <SideNav links={links} />
            </Fragment>

        )
    }
}

export default Nav;