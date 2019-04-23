import React from 'react';
import {Field, FormSection} from 'redux-form';
import TextArea from '../general/textarea';

export default props =>{
    console.log(props);
    return(
        <FormSection name={props.name}>
            <Field id="note" col="s10 offset-s1" name="note" component={TextArea} label="Notes" />
        </FormSection>
    )
}

    
