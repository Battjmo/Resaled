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
      id={listing.id}
      listing={listing} />
  ));

  return (
  <ul>
    { listingsList }
  </ul>
  );
}

}

export default ListingsIndex;
