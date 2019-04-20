import React, {Component} from 'react';
import axios from 'axios';
import Header from '../general/header';

class ViewCard extends Component{
    state = {
        respData: []
    }

    componentDidMount(){
        this.getRespData();
    }

    async getRespData(){
        const resp = await axios.get('/api/data/get_tracker_item.json');
        console.log(resp);
    }

    render(){
        return(
            <div>Hello, world.</div>
        )
    }
}