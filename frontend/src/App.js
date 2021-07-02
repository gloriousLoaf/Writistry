import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeView from './views/HomeView';
import TermsView from './views/TermsView';
import SignupView from './views/SignupView';
import SigninView from './views/SigninView';
import ProfileView from './views/ProfileView';
import ProfileEditView from './views/ProfileEditView';
import FeedView from './views/FeedView';
import BlogView from './views/BlogView';
import CreateView from './views/CreateView';
import EditView from './views/EditView';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/' component={HomeView} exact />
        <Route path='/terms' component={TermsView} exact />
        <Route path='/signup' component={SignupView} exact />
        <Route path='/signin' component={SigninView} exact />
        <Route path='/profile/:id' component={ProfileView} exact />
        <Route path='/profile/:id/edit' component={ProfileEditView} exact />
        <Route path='/feed' component={FeedView} exact />
        <Route path='/blogposts/:id' component={BlogView} exact />
        <Route path='/create' component={CreateView} exact />
        <Route path='/edit/:id' component={EditView} />
      </Container>
    </Router>
  );
};

export default App;
