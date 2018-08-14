import React from 'react';
import { Link } from 'react-router-dom';
import ListingsIndex from '../listings/listings_index.jsx';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchListings();
  }


  render() {
    const { user } = this.props;
    if (!user) {
      return <div>Loading...</div>;
    } else {
        return (
        <div className="user-show-container">
          <p> {user.username}</p>
          {this.props.userListings}
      </div>
    );
  }
}
}

export default UserShow;
