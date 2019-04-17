import React, {Component} from 'react';

class SideNav extends Component{
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }
    render(){
        return(
            <ul id='sidenav' ref={(element)=>{this.sidenav=element}} className="sidenav">
                {this.props.links}
            </ul>
        )
    }
}

export default SideNav;