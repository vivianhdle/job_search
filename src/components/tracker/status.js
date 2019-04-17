import React, {Component,Fragment} from 'react';
import './tracker.scss';
import ModalStartForm from '../modal/index.js';

class Status extends Component{
    state={
        modalOpen:false
    }
    handleAdd(){

    }
    render(){
        const {progress}=this.props;
        const {modalOpen}=this.state;
        return(
            <Fragment>
                <div className="job-container">
                    <div>jobs go here</div>
                    <button className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
                </div>
                <ModalStartForm isOpen={modalOpen}/>
            </Fragment>
        )
    }
}

export default Status