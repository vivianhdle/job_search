import React, {Component} from 'react';
import './modal.scss';
import AddForm from './add-form';
import axios from 'axios';

class Modal extends Component{
    async handleAdd(values){
        const resp = await axios.post('/api/add_tracker_item.php',values);
        // console.log(resp)
    }
    render(){
        const {isOpen}=this.props
        if (isOpen){
            return (
                <div className="add-form-modal">
                    <div className="form">
                        <AddForm add={this.handleAdd}/>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal