import React, { Component, Fragment } from 'react';
import Modal from '../../general/modal';
import { reduxForm,Field } from 'redux-form';
import ActionButton from '../../general/buttons/action_button';
import Input from '../../general/input';
import TextArea from '../../general/textarea';
import ReactDOM from 'react-dom';
import './edit_note.scss';

class EditNote extends Component {
    state={
        note: ''
    }
    componentDidMount(){
        ReactDOM.findDOMNode(this.editNote).getElementsByTagName("textarea")[0].focus();
        const {fieldInput} = this.props;
        this.setState({
            note: fieldInput
        })
    } 

    handleChange = e => {
        let { note } = this.state;
        note = e.target.value;
        this.setState({
            note: note
        })

    }


    render() {
        const {editNote, handleSubmit, fieldInput} = this.props 
        return (
            <div className="action row center">
                <Modal modalClass="add-note-modal" mscss="note">
                    <form onSubmit={handleSubmit(editNote)} >
                        <Field ref={(textarea)=>{this.editNote=textarea}} id="note" col="s10 offset-s1" name="note" handleChange={this.handleChange}  component={TextArea} currentValue={this.state.note}/>
                        <button className="btn blue-grey">submit</button>
                    </form>   
                </Modal>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-note',
})(EditNote);