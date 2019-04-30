import React, {Component} from 'react';
import Modal from './modal';
import './search_modal.scss';
import Input from '../input';
import { reduxForm, Field} from 'redux-form';
import SearchResults from '../../search/search_results';

class SearchModal extends Component{
    componentDidMount() {
        M.FormSelect.init(this.search);
    }
    render(){
        const {handleSubmit, runSearch,searchResults} = this.props
        console.log(searchResults);
        return(
            <Modal modalClass="search" mscss="search-area">
                <form onSubmit={handleSubmit(runSearch)}>
                    <Field id="searched" col="s10 offset-s1" name="searched" component={Input} label="Type in what you want to search"icon="search"/>
                    <button className="btn blue-grey">SEARCH</button>
                </form>
                <SearchResults searchResults={searchResults}/>
            </Modal>
        )
    }
    
}

export default reduxForm({
    form: 'search-prospects'
})(SearchModal);