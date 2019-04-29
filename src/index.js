import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import think from './middleware';
import App from './components/app';
import types from './actions/types';
import { checkAuth } from './actions';


const store = createStore(rootReducer, applyMiddleware(think));

// if(localStorage.getItem('signedIn') === 'true'){
//     store.dispatch({
//         type: types.SIGN_IN,
//         email: 'loading'
//     })

//     checkAuth()(store.dispatch);
// }
function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
}
checkAuth()(store.dispatch).finally(renderApp);
