import React from 'react';
import { Link } from 'react-router-dom';
import ListingsIndex from '../listings/listings_index.jsx';
import { getUserListings} from '../../reducers/selectors';
import ListingsIndexItem from '../listings/listings_index_item';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.canEdit = this.canEdit.bind(this);
    this.parseHeight = this.parseSize.bind(this);
    this.cantEditAdjustor = this.cantEditAdjustor.bind(this);
    this.headerNameAdjustor = this.headerNameAdjustor.bind(this);
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

  canEditIndicator() {
    if (!this.props.currentUser) {
      return false;
    } else if (this.props.currentUser.id === this.props.user.id) {
      return true;
    }
  }

  cantEditAdjustor() {
    if (this.canEditIndicator()) {
      return (<div className="user-edit-container"> {this.canEdit()} </div>)
        }
      }

  parseSize() {
    if (this.props.user.height === null && this.props.user.weight === null){
      return (
        `No Measurements`
      );
    }
    let weight = this.props.user.weight;
    if (!this.props.user.weight) {
      weight = 'No Weight Given';
    } else {
      weight = `${this.props.user.weight} lbs`;
    }
    const userFeet = Math.floor((this.props.user.height / 12));
    const userInches = (this.props.user.height % 12);
    return (
      `${userFeet} ft ${userInches} in, ${weight}`
    );
  }

  headerNameAdjustor() {
    if (this.canEdit()) {
      return 'offset-username';
    }
    else {
      return 'centered-username';
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
          <div className="user-name-container">
          <div className="avatar"></div>
          <div className={this.headerNameAdjustor()}>
            <div className='username'>
          {user.username}
          <div className="star-rating">
          <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
          </div>
          </div>

          </div>

          </div>
          {this.cantEditAdjustor()}
          </div>
          <div className="user-details">
          <Link to="#" className="user-listing-count">Listings ({listingsList.length})
          </Link>
          <div className="user-subdetails">
          <div className="user-country">{user.country}</div>

          <div className="user-size">
          {this.parseSize()}
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
