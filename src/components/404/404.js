import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';

function Error404(props) {
    return (
        <div className="not-found">
            <div className="not-found-content center grey-text text-darken-1">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <div>
                    <Link to="/">
                        <i className="material-icons ">home</i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error404;