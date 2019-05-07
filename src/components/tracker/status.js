import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './status.scss';
import Header from '../general/header';
import JobProspectList from './job_prospect_list';

function Status(props) {
    const { progress, id, filteredList } = props;
    return (
        <Fragment>
            <div className="job-container" id={id}>
                <Header title={progress} alignment="center" />
                <JobProspectList list={filteredList} />
            </div>
        </Fragment>
    )
}

export default withRouter(Status);