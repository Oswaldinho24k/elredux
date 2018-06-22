import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {makeStore} from './redux/store'
import {Provider} from 'react-redux';//redux
import {BrowserRouter} from 'react-router-dom'

const store = makeStore()

const WithRouter = () => (
    <BrowserRouter>       
            <App/>
    </BrowserRouter>
);

const WithProvider = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
) 



ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
