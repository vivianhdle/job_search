import React, { Component } from 'react';
import './feature_discovery.scss';

class FeatureDiscovery extends Component {
    constructor(props) {
        super(props);
        this.state={
            applications: [],
            tips: null
        }

    }
    componentDidMount(){
        const initial = M.TapTarget.init(this.tutorial);
        this.state.tips = initial;
        if(this.props.stats < 1){
            initial.open();
        }
    }
    manageTips = () =>{
        this.state.tips.open();
    }

    render() {
        const {text, title} = this.props
        return (
            <div className="row feature-discovery"> 
                <div className="fixed-action-btn col s12 left-align tooltips">
                <a id="menu" className="waves-effect waves-light btn btn-floating btn-small teal lighten-2" onClick={this.manageTips}>
                    ?
                </a>
                </div>
                <div className="tap-target teal lighten-2" data-target="menu" ref={(element) => { this.tutorial = element }}>
                    <div className="tap-target-content">
                    <div className="col s10 offset-s1">
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