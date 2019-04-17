import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React,{Fragment} from 'react';
import '../assets/css/app.scss';
import Tracker from './tracker';

const App = () => (
    <Fragment>
        <Tracker/>
    </Fragment>
);

export default App;
