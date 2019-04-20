import React, {Component} from 'react';
import axios from 'axios';
import Header from '../general/header';

class ViewCard extends Component{
    state = {
        respData: [],
    }

    componentDidMount(){
        this.getRespData();
        
    }

    async getRespData(){
        const resp = await axios.get('/api/data/get_tracker_item.json');
        this.setState({
            respData: resp.data.data
        })
        
    }

    render(){
        const respInfo = this.state.respData; 
        console.log(respInfo);

        return(
            <div>
                <Header/>
                <div>Hello, world.</div>
            </div>
            
        )
    }
}

export default ViewCard;