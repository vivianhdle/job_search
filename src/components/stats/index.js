import React, {Component} from 'react';
import './stats.scss'
import axios from 'axios';
import StatTable from './stats_table';
import Loader from '../general/loader';


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
        },2000)
    }
    async getStats(){
        const resp = await axios.get('./api/get_user_stats.php');
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
                            <div className="greeting-text grey-text text-darken-2">
                                {user_name === 'Guest' ? 'Welcome,' : 'Welcome back,'}
                                <div>
                                    {user_name}!
                                </div>
                            </div>
                        </div>
                        <div className="greeting-photo" ref={(element)=>{this.photo = element}}></div>
                    </div>
                    <StatTable {...this.state.metaStats}/>
                </div>
            )
        }else{
            return <Loader/>
        }
    }
}

export default Stats;