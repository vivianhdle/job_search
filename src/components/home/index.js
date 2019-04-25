import React, {Component} from 'react';

class Home extends Component {
    componentDidMount(){
        this.props.handlePageRender('Career Assistant');
    }
    render(){
        return(
            <div>THIS IS MY HOME</div>
        )
    }
}

export default Home;