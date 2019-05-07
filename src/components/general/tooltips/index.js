import React, { Component, Fragment } from './node_modules/react';
import axios from './node_modules/axios';

class Tutorial extends Component {
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
        return (
            <div className="row"> 
                <div>
                <a id="menu" className="waves-effect waves-light btn" onClick={this.manageTips}>
                    <i className="material-icons">menu</i>
                </a>
                <div className="tap-target" data-target="menu" ref={(element) => { this.tutorial = element }}>
                    <div className="tap-target-content">
                        <h5>Tool Tip</h5>
                        <p>A bunch of text</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Tutorial;