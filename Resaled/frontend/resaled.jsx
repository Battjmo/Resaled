import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<h1>Resaled</h1>, root);
});
