import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './status.scss';
import Header from '../general/header';
import JobProspectList from './job_prospect_list';
import NoItems from '../general/no_items';

function Status(props) {
    const { progress, id, filteredList,goToProspect } = props;
    return (
        <Fragment>
            <div className="job-container" id={id}>
                <Header title={progress} alignment="center" />
                {filteredList.length>0 ? <JobProspectList list={filteredList}/>:<NoItems goToProspect={goToProspect}/>}
            </div>
        </Fragment>
    )
}

export default withRouter(Status);