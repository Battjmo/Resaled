import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signUp, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //TESTING STUFF
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signUp = signUp;
  window.logout = logout;


  ReactDOM.render(<Root store={store} />, root);
});
