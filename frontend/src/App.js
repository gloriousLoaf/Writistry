import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeView from './views/HomeView';
import SignupView from './views/SignupView';
import SigninView from './views/SigninView';
import FeedView from './views/FeedView';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/' component={HomeView} exact />
        <Route path='/signup' component={SignupView} exact />
        <Route path='/signin' component={SigninView} exact />
        <Route path='/feed' component={FeedView} exact />
      </Container>
    </Router>
  );
};

export default App;
