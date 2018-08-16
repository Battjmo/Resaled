import React from 'react';
import { Link } from 'react-router-dom';
import ListingsIndex from '../listings/listings_index.jsx';
import { getUserListings} from '../../reducers/selectors';
import ListingsIndexItem from '../listings/listings_index_item';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.canEdit = this.canEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings();
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const currentPath = this.props.location.pathname.split("");
    const currentPageUserId = currentPath[currentPath.length - 1];
    if ( currentPageUserId != nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  canEdit() {
      if (!this.props.currentUser) {
        return false;
      } else if (this.props.currentUser.id === this.props.user.id)
      { return (
        <div>
          <Link className='button white' to={`/users/${this.props.user.id}/edit`}>Edit</Link>
          <br/>
        </div>
      );
    }
  }


  render() {
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
          <div className="user-info">
          <div className="username-container">
          <p> {user.username}</p>
          </div>
          <div className="user-edit-container">
            {this.canEdit()}
          </div>
          </div>
          <div className="user-details">

          <div className="user-listing-count">Listings ({listingsList.length})
          </div>
          <div className="user-subdetails">
          <div className="user-country">{user.country}</div>

          <div className="user-size">
          {user.height}
          {user.weight}
          </div>
          </div>
          </div>


            <ul className="index user-index">
              { listingsList }
            </ul>
      </div>
    );
  }
}
}

export default UserShow;
