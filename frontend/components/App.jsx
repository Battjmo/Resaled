import React from 'react';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route, DefaultRoute, Redirect, Switch } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingShowContainer from './listings/listing_show_container';
import UserShowContainer from './users/user_show_container';
import EditListingFormContainer from './listings/edit_listing_form_container';
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
      <AuthRoute exact path="/listings/new" component={CreateListingFormContainer} />
      <AuthRoute exact path="/listings/:id/edit" component={EditListingFormContainer} />
      <Route exact path="/users/:id" component={UserShowContainer} />
      <Route exact path="/listings/:id" component={ListingShowContainer}/>
      <Route path="/" component={ListingsIndexContainer} />
    </Switch>
  </div>
);

export default App;
