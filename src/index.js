import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Config from 'dotenv';

import reducers from './reducers';
import Keynote from './containers/Keynote';
import ListKeynotes from './containers/ListKeynotes';
import KeynoteForm from './containers/KeynoteForm';

import registerServiceWorker from './registerServiceWorker';

Config.config();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
            <Route path="/keynote/new" component={KeynoteForm} />
            <Route path="/keynote/:id" component={KeynoteForm} />
            <Route path="/start/:id" component={Keynote} />
            <Route path="/" component={ListKeynotes} />
        </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();