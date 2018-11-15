import React from 'react';

import ReactGA from 'react-ga';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './header/signup_form_container';
import SigninFormContainer from './header/signin_form_container';
import { Route, DefaultRoute, Redirect, Switch, HashRouter } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingShowContainer from './listings/listing_show_container';
import UserShowContainer from './users/user_show_container';
import UserEditContainer from './users/user_edit_container';
import EditListingFormContainer from './listings/edit_listing_form_container';
import CreateListingFormContainer from './listings/create_listing_form_container';

import {AuthRoute} from '../util/route_util';
import Modal from './header/modal';
import Favicon from 'react-favicon';

ReactGA.initialize('UA-129320580-3');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <HashRouter>
  <div>
    <header>
      <Route path="/" component={HeaderContainer} />
      <Modal />
      <Favicon url="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png" />
      </header>
    <Switch>
      <AuthRoute exact path="/listings/new" component={CreateListingFormContainer} />
      <AuthRoute exact path="/listings/:id/edit" component={EditListingFormContainer} />
      <AuthRoute exact path="/users/:id/edit" component={UserEditContainer} />
      <Route exact path="/users/:id" component={UserShowContainer} />
      <Route exact path="/listings/:id" component={ListingShowContainer}/>
      <Route path="/" component={ListingsIndexContainer} />
    </Switch>
  </div>
  </HashRouter>
);

export default App;
