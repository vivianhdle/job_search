import React, {Component} from 'react';
import StatBox from './stat_box';

class Stats extends Component {
    componentDidMount(){
        this.props.handlePageRender('Career Assistant');
    }
    render(){
        return(
            <div className="stats-page">
                <StatBox/>
            </div>
        )
    }
}

export default Stats;