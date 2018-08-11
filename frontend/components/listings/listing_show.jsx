import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.canEdit = this.canEdit.bind(this);
  }

  componentWillMount() {
    this.props.fetchListing(this.props.match.params.id);
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.listing.id !== nextProps.match.params.id) {
  //     this.props.fetchListing(nextProps.match.params.id);
  //   }
  // }

  canEdit() {
    return (this.props.currentUser.id === this.props.listing.user_id);
}

  render() {
    const { listing } = this.props;
    if (!listing) {
      return <div>Loading...</div>;
    } else if (this.canEdit()) {
        return (
        <div>
        <h3>{listing.title}</h3>
        <h3>{listing.price}</h3>
        <h3>{listing.size}</h3>
        <h3>{listing.category}</h3>
        <p>{listing.description}</p>
        <img src={listing.photoUrl} />
        <Link to="/">Back to Index</Link>
        <Link to={`/api/listings/${listing.id}`} />
      </div>
    );
  } else {
    return (
      <div>
      <h3>{listing.title}</h3>
      <h3>{listing.price}</h3>
      <h3>{listing.size}</h3>
      <h3>{listing.category}</h3>
      <p>{listing.description}</p>
      <img src={listing.photoUrl} />
      <Link to="/">Back to Index</Link>
    </div>
  );
  }
}
}

export default ListingShow;
