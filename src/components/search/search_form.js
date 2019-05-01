import React from 'react';
import Input from '../general/input';
import { reduxForm,Field} from 'redux-form';

function SearchForm(props){
    const {handleSubmit,runSearch} = props
    return(
        <div className="row">
            <form onSubmit={handleSubmit(runSearch)}>
                <Field id="searched" col="s10 offset-s1" name="searched" component={Input} label="Type to search!"icon="search"/>
                <div className="right-align col s10 offset-s1">
                    <button className="btn blue-grey">SEARCH</button>
                </div> 
            </form>
        </div>
    )
}


export default reduxForm({
    form: 'search-prospects'
})(SearchForm);

