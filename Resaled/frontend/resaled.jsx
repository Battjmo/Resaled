import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, signin, signout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //TESTING STUFF
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = signin;
  window.signUp = signup;
  window.logout = signout;


  ReactDOM.render(<Root store={store} />, root);
});
