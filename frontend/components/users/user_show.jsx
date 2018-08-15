import React from 'react';
import { Link } from 'react-router-dom';
import ListingsIndex from '../listings/listings_index.jsx';
import { getUserListings} from '../../reducers/selectors';
import ListingsIndexItem from '../listings/listings_index_item';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
    this.props.fetchUser(this.props.match.params.id);
  }


  render() {
    console.log("user show props:", this.props);
    let listingsList = this.props.userListings;
    listingsList = listingsList.map(listing => (
      <ListingsIndexItem
        key ={listing.id}
        listing={listing}
        photo={listing.photoUrl}
         />
    ));
    const { user } = this.props;
    if (!user) {
      return <div>Loading...</div>;
    } else {
        return (
        <div className="user-show-container">
          <p> {user.username}</p>
            <ul className="index">
              { listingsList }
            </ul>
      </div>
    );
  }
}
}

export default UserShow;
