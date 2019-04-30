import React from 'react';
import SmallCard from '../cards/small_card';
import { Route } from 'react-router-dom';

function JobProspectList(props){
    const {list} = props
    var cards = list.map((card) => {
        return (
            <Route key={card.id} render={(routingprops) => {
                return (<SmallCard key={card.id} {...card} {...routingprops} />)
            }} />
        )
    })
    return(
        <div className="card-container row col s12">
            {cards}
        </div>
    )
}

export default JobProspectList;