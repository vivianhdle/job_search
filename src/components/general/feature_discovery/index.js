import React, { Component } from 'react';
import axios from 'axios';
import './feature_discovery.scss';

class FeatureDiscovery extends Component {
    constructor(props) {
        super(props);
        this.state={
            applications: [],
            tips: null
        }

    }
    async getDetails() {
        const resp = await axios.get('/api/get_jobcard_display.php');
        console.log(resp);
        this.setState({
            applications: resp.data.data
        })
    }
    async componentDidMount(){
        await this.getDetails();
        const initial = M.TapTarget.init(this.tutorial);
        this.state.tips = initial;
        if(this.state.applications.length < 1){
            initial.open();
        }
    }
    manageTips = () =>{
        this.state.tips.open();
    }

    render() {
        const {text, title} = this.props
        return (
            <div className="row "> 
                <div className="fixed-action-btn col s12 right-align tooltip">
                <a id="menu" className="waves-effect waves-light btn btn-floating" onClick={this.manageTips}>
                    ?
                </a>
                </div>
                <div className="tap-target teal lighten-2" data-target="menu" ref={(element) => { this.tutorial = element }}>
                    <div className="tap-target-content">
                    <div className="center">
                        <h5>{title}</h5>
                    </div>
                        <div className="col s10 offset-s1">
                        <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureDiscovery;