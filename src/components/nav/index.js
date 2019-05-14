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
                text: 'Sign Out',
                icon:'fas fa-sign-out-alt'
            },
        ],
        guestLinks: [
            {
                to: '/account/sign-in',
                text: 'Sign In',
                icon:'fas fa-sign-in-alt'
            },
            {
                to: '/account/sign-up',
                text: 'Sign Up',
                icon:'fas fa-user-plus'
            }
        ]
    }
    buildLink(link){
        return (
            <li key={link.to} className="sidenav-close">
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }
    buildSidenavLink(link){
        return (
            <li key={link.to} className="sidenav-close">
                <Link to={link.to}><i className={`${link.icon}`}></i>{link.text}</Link>
                <div className="divider"></div>
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
                <li className="sidenav-close">
                    <Link to="/search">Search</Link>
                </li>
                {navLinks}
            </Fragment>
        )
    }
    renderSidenavLinks() {
        const {userAuth} = this.props;
        const {authLinks, guestLinks} = this.state;
        let navLinks = null;

        if(userAuth){
            navLinks = authLinks.map(this.buildSidenavLink);
        }else{
            navLinks = guestLinks.map(this.buildSidenavLink);
        }
        return (
            <Fragment>
                <li className="sidenav-close">
                    <Link to="/"><i className='material-icons'>home</i>Home</Link>
                    <div className="divider"></div>
                </li>
                <li className="sidenav-close">
                    <Link to="/tracker"><i className='material-icons'>view_list</i>View Prospects</Link>
                    <div className="divider"></div>
                </li>
                <li className="sidenav-close">
                    <Link to="/prospect"><i className='material-icons'>playlist_add</i>Add Prospect</Link>
                    <div className="divider"></div>
                </li>
                <li className="sidenav-close">
                    <Link to="/search"><i className='material-icons'>search</i>Search</Link>
                    <div className="divider"></div>
                </li>
                {navLinks}
            </Fragment>
        )
    }
    render() {
        const links = this.renderLinks();
        const sidenavLinks=this.renderSidenavLinks();
        const { title } = this.props;
        return (
            <Fragment>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <Link className="brand-logo" to="/">{title}</Link>
                            <a href="#" data-target="sidenav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">{links}</ul>
                        </div>
                    </nav>
                </div>
                <SideNav links={sidenavLinks} />
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
