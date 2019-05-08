import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navcookies.scss';

class NavCookies extends Component {
    state = {
        options: {
            swipeable: false
        }
    }
    renderLinks() {
        return (
            <li>
                <Link to="/">Job Tracker</Link>
            </li>
        );
    }
    async componentDidMount() {
        const {options} = this.props;
        this.setState({
            options
        })
        M.Tabs.init(this.navcookie, this.state.options);
    }
    componentDidUpdate(){
        const {options} = this.props;
        M.Tabs.init(this.navcookie, options);
    }
    render() {
        const {active='started-app'} = this.props
        return (
            <Fragment>
                <ul ref={(element) => this.navcookie = element} id="tabs-swipe-demo" className="tabs navcookie">
                    <li className="tab col s4 "><a className={active === 'started-app' ? 'active':''} href="#started-app"><i className="material-icons">note_add</i></a></li>
                    <li className="tab col s4"><a className={active === 'waiting' ? 'active':''} href="#waiting"><i className="material-icons">watch_later</i></a></li>
                    <li className="tab col s4"><a className={active === 'follow-up' ? 'active':''} href="#follow-up"><i className="material-icons">whatshot</i></a></li>
                    <li className="tab col s4"><a className={active === 'archived' ? 'active':''} href="#archived"><i className="material-icons">archive</i></a></li>
                </ul>
            </Fragment>
        )
    }
}

export default NavCookies;