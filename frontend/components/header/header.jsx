import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, signout, openModal}) => {

  //If there's no user...
  const sessionLinks = () => (
    <nav className="header">
      <Link to="/" className="mainTitle">Resaled</Link>
      <div className='headerMenu'>
      <a href="/sell">Sell Yo Shit</a>
      <a onClick={() => openModal('signin')}>SignIn</a>
        &nbsp;/&nbsp;
     <a onClick={() => openModal('signup')}>SignUp</a>
     </div>
    </nav>
  );

  //if there is....
  const greeting = () => (
    <nav className="header">
      <a href="/" className="mainTitle">Resaled</a>
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
