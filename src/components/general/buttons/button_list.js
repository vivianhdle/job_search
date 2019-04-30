import React, {Component} from 'react';
import './button_list.scss';

class ButtonList extends Component{
    componentDidMount(){
        const options={
            hoverEnabled:false,
            direction:'bottom'
        }
        M.FloatingActionButton.init(this.buttonlist, options);
    }
    render(){
        const {sortAlphabetically, sortDate}=this.props
        return (
            <div className="fixed-action-btn" ref={(element) => this.buttonlist = element}>
                <a className="btn-floating btn blue-grey">
                    <i className="large material-icons">sort</i>
                </a>
                <ul>
                    <li onClick={sortDate}><a className="btn-floating grey btn-small"><i className="material-icons">date_range</i></a></li>
                    <li onClick={sortAlphabetically}><a className="btn-floating btn-small yellow darken-1"><i className="material-icons">sort_by_alpha</i></a></li>
                </ul>
            </div>
        )
    }
}

export default ButtonList;