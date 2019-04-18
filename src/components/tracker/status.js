import React, {Component,Fragment} from 'react';
import './tracker.scss';
import ModalStartForm from '../modal/index.js';
import SmallCard from '../job_card/small-card';
import axios from 'axios';

class Status extends Component{
    state={
        modalOpen:false,
        cards:[]
    }
    componentDidMount(){
        this.getDetails();
    }
    async getDetails(){
        const resp = await axios.get('/api/data/get_jobcard_display.json');
        this.setState({
            cards:resp.data.data
        })
    }
    handleAdd(){
        console.log('add form here')
    }
    render(){
        const {progress, id}=this.props;
        const {modalOpen}=this.state;
        const cards = this.state.cards.filter((card)=>{
            return card.progress === progress
        }).map((card)=>{
            return (
                <SmallCard key={card.id} {...card}/>
            )
        })
        
        return(
            <Fragment>
                <div className="job-container" id={id}>
                    <div className="progress-title center ">{progress}</div>
                    <div className="card-container row col s12">
                        {cards}
                        {cards}
                        {cards}
                        {!cards ? <div>Click the add button to add a card!</div>:null}
                        <div className="row col s12 center">
                            <button onClick={this.handleAdd} className="add btn-floating center btn-large waves-effect waves-light red"><i className="material-icons center">add</i></button>
                        </div>
                    </div>
                </div>
                <ModalStartForm isOpen={modalOpen}/>
            </Fragment>
        )
    }
}

export default Status