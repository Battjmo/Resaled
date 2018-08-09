import React from 'react';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route, DefaultRoute } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import Modal from './header/modal';

const App = () => (
  <div>
    <header>
    <Route path="/" component={HeaderContainer} />
    <Modal />
    </header>
  </div>
);

export default App;
