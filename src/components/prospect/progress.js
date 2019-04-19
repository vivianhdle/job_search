import React, { Component, Fragment, FormSection } from 'react';
import { Field } from 'redux-form';

class DropDown extends Component {
    state = {
        isOpen: false
    }

    handleDropDownOpened(){
        var dropdown = M.FormSelect.getInstance(this.progress);
    }

    componentDidMount() {
        console.log(this.progress);
        M.FormSelect.init(this.progress);

    }

    renderSelect = (props) =>{
        return(
        <select {...props.input} ref={(element) => { this.progress = element }}>
            <option value="Started Applications">Started Application</option>
            <option value="Waiting for Response">Waiting for Response</option>
            <option value="Follow-up Needed">Follow-up Needed</option>
            <option value="Archived">Archived</option>
        </select>
    );
    }

    render() {
        return (
            <div className="input-field col s10">
                <Field name="progress" component={this.renderSelect} label="Application Progress" />
            </div>
        );
    }

}

export default DropDown;
