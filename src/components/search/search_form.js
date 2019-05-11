import React from 'react';
import Input from '../general/input';
import { reduxForm,Field} from 'redux-form';

function SearchForm(props){
    const {handleSubmit,runSearch} = props
    return(
        <div className="row">
            <form onSubmit={handleSubmit(runSearch)}>
                <Field id="searched" search={true} col="s10 offset-s1" name="searched" component={Input} label="Search by company, title, progress"icon="search"/>
            </form>
        </div>
    )
}


export default reduxForm({
    form: 'search-prospects'
})(SearchForm);

