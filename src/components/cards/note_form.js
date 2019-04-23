import React, { Component, Fragment } from 'react';
import { Field, FormSection } from 'redux-form';
import TextArea from '../general/textarea';
import axios from 'axios';
import Input from '../general/input';

class NoteForm extends Component {

    handleAdd = async () => {
        const {id, name} = this.props;
        console.log('tracker props', this.props);
        const values = {
            tracker_id: id,
            note: name/*the field value */
        };
        const resp = await axios.post(`/api/add_note_item.php`, values);
        console.log(resp);
    }

    render() {
        console.log("Props", this.props);
        const { add, name } = this.props
        return (
            <form onSubmit={this.handleAdd}>
                <FormSection name={name}>
                    <Field id="note" col="s10 offset-s1" name="note" component={Input} label="Notes" />
                </FormSection>
                <div className="btn-wrapper row">
                    <button className="btn blue-grey submit-button">Submit</button>
                </div>
            </form>
        )
    }
}
    export default NoteForm;

