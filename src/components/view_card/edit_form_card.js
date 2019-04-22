import React, { Component, Fragment } from 'react';
import Input from '../general/input';
import { Field, reduxForm} from 'redux-form';
import NoteList from './note_list';
import ContactList from './contact_list';
import { formatTime } from '../helpers';
import './edit_form_card.scss';
import Dropdown from '../prospect/progress';
import './view_details.scss';
import axios from 'axios';


class EditFormCard extends Component {
    state = {
        respData: null,
        isLoaded:false
    }
    componentDidMount() {
        this.getData();
    }
    async getData(){
        const { params } = this.props.match;
        const resp = await axios.get(`/api/get_tracker_item.php?trackerId=${params.id}`);
        this.setState({
            respData: resp.data.data,
            isLoaded: true
        })
    }
    handleChange = e => {
        const { respData } = this.state;
        respData[e.target.name] = e.target.value;
        this.setState({
            respData
        })
    }
    render() {
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            const { title, company, contact = [], created, link, note = [], progress } = this.state.respData;
            return (
                <div className="details-container">
                    <form action="">
                        <div className="row editform">
                                <Dropdown col="s10 offset-s1 col edit-progress" progress={progress} />
                                <div className="company">
                                    <Field label={!company && "Company Name"} id="company" col="s10 offset-s1" classes="teal-text text-lighten-2" onChange={this.handleChange} currentValue={company} name="company" component={Input} />
                                </div>
                                <div className="">
                                    <Field label={!title && "Job Title"} id="title" col="s10 offset-s1" onChange={this.handleChange} currentValue={title} name="title" component={Input} />
                                </div>
                                <div className="">
                                    <Field label={!link && "Posting Link"} id="link" col="s10 offset-s1" onChange={this.handleChange} currentValue={link} name="link" component={Input} classes='orange-text text-darken-1' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="right-align created col s10 offset-s1 view-main-text"><em>Added {formatTime(created)}</em></div>
                            </div>
                        <ContactList contact={contact} edit="true"/>
                        <div className="action row center">
                            <div className="btn-floating btn-small waves-effect blue-grey"><i className="material-icons">add</i></div>
                        </div>
                        <NoteList note={note} edit="true"/>
                        <div className="action row center">
                            <div className="btn-floating btn-small waves-effect blue-grey"><i className="material-icons">add</i></div>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

    


export default reduxForm({
    form: 'edit-job-card',
    // validate: validate
})(EditFormCard);