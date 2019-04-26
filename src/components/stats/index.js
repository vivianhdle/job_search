import React, {Component} from 'react';
import './stats.scss'
import axios from 'axios';
import StatTable from './stats_table';

class Stats extends Component {
    state={
        metaStats:null
    }
    componentDidMount(){
        this.props.handlePageRender('Career Assistant');
        this.getStats();
        setTimeout(()=>{
            this.photo.style.opacity = '1';
            this.greeting.style.opacity="0";
        },5000)
    }
    async getStats(){
        const resp = await axios.get('./api/data/get_user_stats.json');
        this.setState({
            metaStats:resp.data.data
        })
    }
    render(){
        if (this.state.metaStats){
            const {user_name} = this.state.metaStats
            return(
                <div className="stats-page row">
                    <div className="greeting-content">
                        <div className="greeting center" ref={(element)=>{this.greeting = element}}>
                            <div className="greeting-text grey-text text-darken-2">Welcome back, {user_name}!</div>
                        </div>
                        <div className="greeting-photo" ref={(element)=>{this.photo = element}}></div>
                    </div>
                    <StatTable {...this.state.metaStats}/>
                </div>
            )
        }
        return null;
    }
}

export default Stats;