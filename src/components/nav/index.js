import React, { Component, Fragment } from 'react';
import SideNav from './sidenav';
import { Link } from 'react-router-dom';
import './nav.scss';
import { connect } from 'react-redux';

class Nav extends Component {
    state = {
        authLinks: [
            {
                to: '/account/sign-out',
                text: 'Sign Out'
            },
        ],
        guestLinks: [
            {
                to: '/account/sign-in',
                text: 'Sign In'
            },
            {
                to: '/account/sign-up',
                text: 'Sign Up'
            }
        ]
    }
    buildLink(link){
        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }
    renderLinks() {
        const {userAuth} = this.props;
        const {authLinks, guestLinks} = this.state;
        let navLinks = null;

        if(userAuth){
            navLinks = authLinks.map(this.buildLink);
        }else{
            navLinks = guestLinks.map(this.buildLink);
        }
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
                {/* <li className="sidenav-close">
                    <Link to="/account/sign-in">Sign In</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/account/sign-up">Sign Up</Link>
                </li> */}
                {navLinks}
            </Fragment>
        )
    }
    render() {
        const links = this.renderLinks()
        const { title } = this.props;
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

const mapStateToProps = state => {
    return {
        userAuth: state.user.auth
    }
}

export default connect(mapStateToProps)(Nav);

// export default Nav;