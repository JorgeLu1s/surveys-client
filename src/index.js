import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Login from './components/Login';
import store from './store';
import './index.css';

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
