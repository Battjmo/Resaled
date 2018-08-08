import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, logout}) => {
  const sessionLinks = () => (

    //If there's no user...
    <nav className="login-signup">
    <Link to="/login" >Login</Link>
    <Link to="/signup" >Sign Up!</Link>
    </nav>
  );

  //if there is....
  const greeting = () => (
    <nav className="welcome">
      <h3>Welcome, {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </nav>
  );

  return currentUser ? greeting(): sessionLinks() ;

};

export default Header;
