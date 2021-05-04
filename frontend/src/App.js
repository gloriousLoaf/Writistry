import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupView from './views/SignupView';
import SigninView from './views/SigninView';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route path='/signup' component={SignupView} />
        <Route path='/signin' component={SigninView} />
      </Router>
    </div>
  );
};

export default App;
