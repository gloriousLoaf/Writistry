import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import SignupView from './views/SignupView';
import SigninView from './views/SigninView';

const App = () => {
  return (
    <Router>
      <Container>
        <Route path='/signup' component={SignupView} />
        <Route path='/signin' component={SigninView} />
      </Container>
    </Router>
  );
};

export default App;
