import React, { Fragment } from 'react';
import Header from './../general/header';
import {Link} from 'react-router-dom';

function StatsTable(props) {
    const { archived, started_application, total_prospects, waiting_for_response, started_today } = props;
    return (
        <Fragment>
            <Header title="Job Stats" />
            <div className="stats-table col s10 offset-s1 m6 offset-m3 l10 offset-l1">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Started Today</th>
                            <th><Link to={{
                                pathname:"/tracker",
                                search:"?active=started-app"
                            }}>Started Applications</Link></th>
                            <th><Link to={{
                                pathname:"/tracker",
                                search:"?active=waiting"
                            }}>Waiting for Response</Link></th>
                            <th><Link to={{
                                pathname:"/tracker",
                                search:"?active=follow-up"
                            }}>Follow-up Needed</Link></th>
                            <th><Link to={{
                                pathname:"/tracker",
                                search:"?active=archived"
                            }}>Archived</Link></th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{started_today}</td>
                            <td>{started_application}</td>
                            <td>{waiting_for_response}</td>
                            <td>{props["follow-up_needed"]}</td>
                            <td>{archived}</td>
                            <td>{total_prospects}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default StatsTable;