import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './404.scss';

class Error404 extends Component {
    componentDidMount(){
        this.props.handlePageRender('Career Assistant');
    }
    render(){
        return(
            <div className="not-found">
                <div className="not-found-content center">
                    <h1>404 Page not Found</h1>
                    <div>
                        <Link to="/">
                        <i className="material-icons">home</i>
                        </Link>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Error404;