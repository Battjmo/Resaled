import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, signout, openModal}) => {

  //If there's no user...
  const sessionLinks = () => (
    <nav className="header">
      <h1 className="mainTitle">Resaled</h1>
      <div className='headerMenu'>
      <a onClick={() => openModal('signin')}>Sign In</a>
        &nbsp;/&nbsp;
     <a onClick={() => openModal('signup')}>Sign Up</a>
     </div>
    </nav>
  );

  //if there is....
  const greeting = () => (
    <nav className="header">
      <h1 className="mainTitle">Resaled</h1>
      <div className='headerMenu'>
      <h3>Welcome, {currentUser.username}!</h3>
      <br/>
      <a className="logoutButton" onClick={signout}>Sign Out</a>
      </div>
    </nav>
  );

  return currentUser ? greeting(): sessionLinks() ;

};

export default Header;
