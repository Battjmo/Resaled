import React from 'react';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route, DefaultRoute, Redirect, Switch } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';
import CreateListingFormContainer from './listings/create_listing_form_container';
import {AuthRoute} from '../util/route_util';
import Modal from './header/modal';

const App = () => (
  <div>
    <header>
      <Route path="/" component={HeaderContainer} />
      <Modal />
      </header>
    <Switch>
      <Route exact path="/api/listings/new" component={CreateListingFormContainer} />
      <Route exact path="/" component={ListingsIndexContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
