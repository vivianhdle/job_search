import React, { Fragment } from 'react';
import Header from './../general/header';


function StatsTable(props) {
    const { archived, started_application, total_prospects, waiting_for_response, started_today } = props;
    console.log(props);
    return (
        <Fragment>
            <Header title="Job Stats" />
            <div className="stats-table col s10 offset-s1 m6 offset-m3 l10 offset-l1">
                <table className="responsive-table">
                    <thead>
                        <tr onClick={() => {
                            props.history.push(`/tracker`);
                        }}>
                            <th>Started Today</th>
                            <th>Started Applications</th>
                            <th>Waiting for Response</th>
                            <th>Follow-up Needed</th>
                            <th>Archived</th>
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