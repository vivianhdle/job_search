import React, {Component} from 'react';
import axios from 'axios';
import Header from '../general/header';

class ViewCard extends Component{
    state = {
        respData: null,
    }

    componentDidMount(){
        this.getRespData();
        
    }

    async getRespData(){
        const {params} = this.props.match;
        //const resp = await axios.get(`/api/data/get_tracker_item.json?id=${params.id}`);
        console.log('params', params.id);
        const resp = await axios.get(`/api/get_tracker_item.php?trackerId=${params.id}`);
        this.setState({
            respData: resp.data.data
        })
        
    }

    render(){
        const respInfo = this.state.respData; 
        console.log('Resp Info', respInfo);
        console.log('Props', this.props)


        return(
            <div>
                <Header/>
                <div>Hello, world.</div>
            </div>
            
        )
    }
}

export default ViewCard;