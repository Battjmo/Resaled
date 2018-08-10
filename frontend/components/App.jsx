import React from 'react';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route, DefaultRoute, Redirect, Switch } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';
import {AuthRoute} from '../util/route_util';
import Modal from './header/modal';

const App = () => (
  <div>
    <header>
      <Switch>
    <Route exact path="/" component={HeaderContainer} />
    <AuthRoute exact path="/sell" component={SellFormContainer}></AuthRoute>
    <Redirect to='/' />
    </Switch>
    <Modal />
    </header>
    <ListingsIndexContainer/>
  </div>
);

export default App;
