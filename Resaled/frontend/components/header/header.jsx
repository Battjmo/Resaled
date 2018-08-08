import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, signout, openModal}) => {
  const sessionLinks = () => (

    //If there's no user...
    <nav className="login-signup">

      <button onClick={() => openModal('signin')}>Sign In</button>
     &nbsp;or&nbsp;
     <button onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  );

  //if there is....
  const greeting = () => (
    <nav className="welcome">
      <h3>Welcome, {currentUser.username}!</h3>
      <button onClick={signout}>Logout</button>
    </nav>
  );

  return currentUser ? greeting(): sessionLinks() ;

};

export default Header;
