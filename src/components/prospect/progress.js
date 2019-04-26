import React, { Component } from 'react';
import { Field } from 'redux-form';

class DropDown extends Component {
    state = {
        fontColor: false,
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
        const {progress, input, meta: { touched, error, warning }} = props;
        return (
            <div>
            {progress && <select {...input} ref={(element) => { this.progress = element }}  value={progress}>
                <option value="" disabled>Application Status *</option>
                <option value="Started Application">Started Application</option>
                <option value="Waiting for Response">Waiting for Response</option>
                <option value="Follow-up Needed">Follow-up Needed</option>
                <option value="Archived">Archived</option>
            </select>}
            {!progress && <select {...input} ref={(element) => { this.progress = element }}>
                <option value="" disabled>Application Status *</option>
                <option value="Started Application">Started Application</option>
                <option value="Waiting for Response">Waiting for Response</option>
                <option value="Follow-up Needed">Follow-up Needed</option>
                <option value="Archived">Archived</option>
            </select>}
            {touched && ((error && <span className="red-text">{error}</span>) || (warning && <span className="red-text">{warning}</span>))}
            </div>
        );
    }
    render() {
        const { col, required, progress} = this.props;
        return (
            <div className="row">
                <div className={`input-field ${col}`}>
                    <Field name="progress" component={this.renderSelect} validate={required} progress={progress}/>
                </div>
            </div>
        );
    }
}

export default DropDown;
