import  React  from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {

componentDidMount() {
  this.props.fetchListings();
}

render() {
  let listingsList = this.props.Listings;
  listingsList = listingsList.map(listing => (
    <ListingsIndexItem
      className="index-listing"
      id={listing.id}
      listing={listing}
      photo={listing.photoUrl}
       />
  ));

  return (
  <ul className="index">
    { listingsList }
  </ul>
  );
}

}

export default ListingsIndex;
