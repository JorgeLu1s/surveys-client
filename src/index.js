import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Login from './components/Login';
import Survey from './components/Survey';
import SurveyDetail from './components/SurveyDetail';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

const PrivateRoute = ({ component: Component,  ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('surveys_jwt') !== null
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
);

const routing = (
  <div className='container'>
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={App}/>
          <PrivateRoute path='/new' component={Survey}/>
          <PrivateRoute path='/survey/:id' component={SurveyDetail}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(routing, document.getElementById('root'));
