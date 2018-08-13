import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.canEdit = this.canEdit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id);
  }

  canEdit() {
    if (!this.props.currentUser) {
      return false;
    } else if (this.props.currentUser.id === this.props.listing.userId)
    { return (
      <div>
        <Link className='button white' to={`/api/listings/${this.props.listing.id}/edit`}>Edit Listing</Link>
        <br/>
        <br/>
        <Link className='button white' to={`/`} onClick={this.delete}>Delete Listing</Link>
      </div>
    );
  }
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

        </div>
      </div>
    );
  }
}
}

export default ListingShow;
