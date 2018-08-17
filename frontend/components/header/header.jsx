import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
    <nav className="header">

      <Link to="/" className="mainTitle">Resaled</Link>
      <div className='headerMenu'>
        <a className="sell-button" onClick={() => this.props.openModal('signin')}>Sell</a>
      <a onClick={() => this.props.openModal('signin')}>SignIn</a>
        &nbsp;/&nbsp;
     <a onClick={() => this.props.openModal('signup')}>SignUp</a>
     </div>
    </nav>
    )
  }

    greeting() {
      return (
      <nav className="header">
        <a href="/" className="mainTitle">Resaled</a>
        <div className='headerMenu'>
        <Link className="sell-button" to="/listings/new">Sell</Link>
        <br/>
        <Link className="logoutButton" to={`/users/${this.props.currentUser.id}`}>
        <div className="profile-link-image" /> </Link>
        <a href="/" className="logoutButton" onClick={this.props.signout}>Sign Out</a>
        </div>
      </nav>
      )
    }

  render() {
    return this.props.currentUser ? this.greeting(): this.sessionLinks() ;
  }
}

  export default withRouter(Header);
