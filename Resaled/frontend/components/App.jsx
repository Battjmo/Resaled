import React from 'react';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
const App = () => (
  <div>
    <header>
    <h1>Resaled</h1>
    <HeaderContainer />
    </header>
    <AuthRoute path="/signin" component={SigninFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
