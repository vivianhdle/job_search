import React, { Component } from 'react';
import { Field } from 'redux-form';

class DropDown extends Component {
    state = {
        fontColor: false
    }
    handleDropDownOpened() {
        M.FormSelect.getInstance(this.progress);
    }
    toggleClass() {
        const { fontColor } = this.state;
        this.setState({ fontColor: !fontColor });
    }
    componentDidMount() {
        M.FormSelect.init(this.progress);
    }
    renderSelect = (props) => {
        return (
            <select {...props.input} value={props.progress} ref={(element) => { this.progress = element }}>
                <option value="" disabled>Application Status</option>
                <option value="Started Application">Started Application</option>
                <option value="Waiting for Response">Waiting for Response</option>
                <option value="Follow-up Needed">Follow-up Needed</option>
                <option value="Archived">Archived</option>
            </select>
        );
    }
    render() {
        const { col, progress } = this.props
        return (
            <div className="row">
                <div className={`input-field ${col}`}>
                    <Field progress={progress} name="progress" component={this.renderSelect} />
                </div>
            </div>
        );
    }
}

export default DropDown;
