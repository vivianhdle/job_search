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
    render(){
        console.log(this.state.cards)
        const cards = this.state.cards.map((card)=>{
            return (
                <SmallCard key={card.id} {...card}/>
            )
        })
        const {progress, id}=this.props;
        const {modalOpen}=this.state;
        
        return(
            <Fragment>
                <div className="job-container" id={id}>
                    <div className="progress-title center">{progress}</div>
                    <div className="card-container row">
                        {cards}
                        {cards}
                        {cards}
                        <button className="add"><i className="material-icons center">add</i></button>
                    </div>
                </div>
                <ModalStartForm isOpen={modalOpen}/>
            </Fragment>
        )
    }
}

export default Status