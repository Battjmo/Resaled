import  React  from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {

componentDidMount() {
  this.props.fetchListings();
}

render() {
  let listings = this.props.listings;
  console.log(listings);
  listings = listings.map(listing => (
    <ListingsIndexItem
      id={listing.id}
      listing={listing} />
  ));

  return (
  <ul>
    { listings }
  </ul>
  );
}

}

export default ListingsIndex;
