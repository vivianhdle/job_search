import React,{Fragment} from 'react';
import Header from './../general/header';


function StatsTable(props){
    const {archived,started_application,total_prospects,waiting_for_response, started_today} = props;
    return (
        <Fragment>
            <Header title="Stats Table"/>
            <div className="stats-table col s10 offset-s1 m10 offset-m1">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Total</th>
                            <th>Started Applications</th>
                            <th>Waiting for Response</th>
                            <th>Follow-up Needed</th>
                            <th>Archived</th>
                            <th>Started Today</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{total_prospects}</td>
                            <td>{started_application}</td>
                            <td>{waiting_for_response}</td>
                            <td>{props["follow-up_needed"]}</td>
                            <td>{archived}</td>
                            <td>{started_today}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>  
    )
}

export default StatsTable;