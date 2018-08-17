import React from 'react';
import { Link } from 'react-router-dom';
import {getUserListings} from '../../reducers/selectors';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.canEdit = this.canEdit.bind(this);
    this.delete = this.delete.bind(this);
    this.getSellerListingCount = this.getSellerListingCount.bind(this);
    this.parseHeight = this.parseHeight.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id)
    .then(Listing => this.props.fetchUser(Object.values(Listing)[1].userId))
    .then(user => this.setState({listingUsername: Object.values(user)[1].username,
      listingUserId: Object.values(user)[1].id,
      listingUserHeight: Object.values(user)[1].height,
      listingUserWeight: Object.values(user)[1].weight,
      listingUserCountry: Object.values(user)[1].country
    }));
    this.props.fetchListings();
  }

  canEdit() {
    if (!this.props.currentUser) {
      return false;
    } else if (this.props.currentUser.id === this.props.listing.userId)
    { return (
      <div>
        <Link className='button white' to={`/listings/${this.props.listing.id}/edit`}>Edit Listing</Link>
        <br/>
        <br/>
        <Link className='button white' to={`/`} onClick={this.delete}>Delete Listing</Link>
      </div>
    );
  }
}

  parseHeight() {
    const sellerFeet = Math.floor((this.state.listingUserHeight) / 12);
    const sellerInches = ((this.state.listingUserHeight) % 12);
    return (
      `${sellerFeet} ft ${sellerInches} in, ${this.state.listingUserWeight} lbs`
    );
  }

  getSellerListingCount() {
    const sellerListings = Object.values(this.props.sellerListings).filter(listing => listing.userId === this.state.listingUserId);
    return sellerListings.length;
  }

  delete() {
    this.props.deleteListing(this.props.listing.id);
    this.props.history.push('/');
  }


  render() {
    const { listing } = this.props;
    if (!listing) {
      return <div>Loading...</div>;
    } else {
        return (
        <div className="show-container">
          <div className='listing-image-box'>
          <img className="listing-image" src={listing.photoUrl} />
          </div>
        <div className="listing-info-box">
          <h3 className="listing-brand">{listing.brand}</h3>
          <br/>
          <h3 className="listing">{listing.title}</h3>
          <br/>
          <h3 className="listing">{listing.size}</h3>
          <br/>
          <h3 className="listing-price">$ {listing.price}</h3>
          <br/>
          <br/>
          <button className="button black" onClick={() => this.props.openModal('buy')}>BUY</button>
          <br/>
          <br/>
          {this.canEdit()}
          <br/>
          <p className='description-title'>DESCRIPTION</p>
          <p className='description'>{listing.description}</p>
          <br/>
          <div className="seller-box">
            <p className="description-title">SELLER</p>
            <Link className="user-show-link" to={`/users/${this.state.listingUserId}`}>{this.state.listingUsername}</Link>
              <p className="user-item-count">{this.getSellerListingCount()} Items for Sale</p>
              <p className="listing-stars">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
              <p>{this.parseHeight()}</p>
          </div>
        </div>
      </div>
    );
  }
}
}

export default ListingShow;
