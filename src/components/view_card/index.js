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
        const {params} = this.props.match;
        const resp = await axios.get(`/api/data/get_tracker_item.json?id=${params.id}`);
        console.log('params', params.id);

        //const resp = await axios.get(`/api/get_tracker_item.php?id=${params.id}`);
        this.setState({
            respData: resp.data.data
        })
        
    }

    render(){
        const respInfo = this.state.respData; 
        console.log(respInfo);
        console.log(this.props)


        return(
            <div>
                <Header/>
                <div>Hello, world.</div>
            </div>
            
        )
    }
}

export default ViewCard;