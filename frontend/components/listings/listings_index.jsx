import  React  from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {

componentDidMount() {
  this.props.fetchListings().then;
}

// componentWillReceiveProps(newProps) {
//   if (this.props.Listings.length !== newProps.Listings.length ){
//     this.props.fetchListings();
//   }
//
// }

filterListing() {

}

render() {
  let listingsList = this.props.Listings;
  listingsList = listingsList.map(listing => (
    <ListingsIndexItem
      key ={listing.id}
      listing={listing}
      photo={listing.photoUrl}
       />
  ));

  return (
  <div className="index-wrapper">
  <h1 className="feed-title">Browse The Feed</h1>
  <ul className="index">
    { listingsList }
  </ul>
  </div>

  );
}

}

export default ListingsIndex;
