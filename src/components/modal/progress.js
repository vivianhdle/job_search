import React, { Component, Fragment, FormSection } from 'react';
import { Field } from 'redux-form';
import Input from '../general';

class DropDown extends Component {
    componentDidMount() {
        M.FormSelect.init(this.progress);

    }

    render() {
        return (
            <Field name="progress" component="select" className="browser-default" label="Application Progress" ref={(element) => { this.progress = element }}>
                <option disabled={true}>Application Progress</option>
                <option value="Started Applications">Started Applications</option>
                <option value="Waiting for Response">Waiting for Response</option>
                <option value="Follow-up Needed">Follow-up Needed</option>
                <option value="Archived">Archived</option>
            </Field>
        );
    }

}

export default DropDown;
