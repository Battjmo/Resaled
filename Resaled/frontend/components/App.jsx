import React from 'react';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route } from 'react-router-dom';
const App = () => (
  <div>
    <header>
    <h1>Resaled</h1>
    <HeaderContainer />
    </header>
    <Route path="/signin" component={SigninFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
