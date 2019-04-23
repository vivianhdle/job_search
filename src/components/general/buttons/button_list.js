import React, {Component} from 'react';
import ActionButton from './action_button';

class ButtonList extends Component{
    componentDidMount(){
        var instances = M.FloatingActionButton.init(this.buttonlist, {
            direction: 'top',
        });
    }
    render(){
        return(
            <div class="fixed-action-btn" ref={(element)=>this.buttonlist=element}>
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>
        )
    }
}


export default ButtonList;