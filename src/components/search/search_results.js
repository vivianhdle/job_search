import React from 'react';
import JobProspectList from '../tracker/job_prospect_list';

function SearchResults(props){
    const {searchResults}=props
    return(
        <JobProspectList list={searchResults}/>
    )
}

export default SearchResults