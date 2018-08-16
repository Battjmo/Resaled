import React from 'react';
import { Link } from 'react-router-dom';

  class Header extends React.component {}
const Header = ({currentUser, signout, openModal}) => {

  //If there's no user...
  const sessionLinks = () => (
    <nav className="header">
      <input className="search-input" placeholder="Search" />
      <Link to="/" className="mainTitle">Resaled</Link>
      <div className='headerMenu'>
        <a className="sell-button" onClick={() => openModal('signin')}>Sell</a>
      <a onClick={() => openModal('signin')}>SignIn</a>
        &nbsp;/&nbsp;
     <a onClick={() => openModal('signup')}>SignUp</a>
     </div>
    </nav>
  );

  //if there is....
  const greeting = () => (
    <nav className="header">
      <input className="search-input" placeholder="Search" />
      <a href="/" className="mainTitle">Resaled</a>
      <div className='headerMenu'>
      <Link className="sell-button" to="/listings/new">Sell</Link>
      <br/>
      <Link className="logoutButton" to={`/users/${currentUser.id}`}>Profile</Link>
      <a href="/" className="logoutButton" onClick={signout}>Sign Out</a>
      </div>
    </nav>
  );

  return currentUser ? greeting(): sessionLinks() ;

};

export default Header;
