import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import SignupView from './views/SignupView';
import SigninView from './views/SigninView';
import FeedView from './views/FeedView';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/signup' component={SignupView} />
        <Route path='/signin' component={SigninView} />
        <Route path='/feed' component={FeedView} />
      </Container>
    </Router>
  );
};

export default App;
