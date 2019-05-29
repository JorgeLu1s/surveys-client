import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Login from './components/Login';
import store from './store';
import './index.css';

const PrivateRoute = ({ component: Component,  ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('surveys_jwt') !== null
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
);

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
