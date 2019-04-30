import React, {Component} from 'react';
import Modal from './modal';
import './search_modal.scss';
import Input from '../input';
import { reduxForm, Field} from 'redux-form';
import SearchResults from '../../search/search_results';

class SearchModal extends Component{
    render(){
        const {handleSubmit, runSearch,searchResults,closeModal,isOpen} = this.props;
        if(isOpen){
            return(
                <Modal modalClass="search" mscss="search-area">
                    <div className="row">
                        <button onClick={closeModal}><i className="material-icons exit">close</i></button>
                        <form onSubmit={handleSubmit(runSearch)}>
                            <Field id="searched" col="s10 offset-s1" name="searched" component={Input} label="Type to search!"icon="search"/>
                            <div className="right-align col s10 offset-s1">
                                <button className="btn blue-grey">SEARCH</button>
                            </div> 
                        </form>
                    </div>
                    <div className="search-result-container">
                        <SearchResults searchResults={searchResults}/>
                    </div>
                </Modal>
            )
        }
        return null;
    }
}

export default reduxForm({
    form: 'search-prospects'
})(SearchModal);

