import React from 'react';
import Surveys from './Surveys';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Welcome to the surveys application</h1>
    <Link to='/survey'>Create a new survey</Link>
    <Surveys />
  </div>
);

export default App;
