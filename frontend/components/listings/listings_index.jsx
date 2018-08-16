import  React  from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.filterListings = this.filterListings.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchListings();
  }

componentWillReceiveProps(newProps) {
  if (this.props.Listings.length !== newProps.Listings.length ){
    this.props.fetchListings();
  }

}

updateSearch() {
  return (e) => {
  this.setState({filter: e.target.value.toUpperCase()});
  };
}

filterListings() {
  if (this.state.filter) {
  let workingArray = this.props.Listings;
  let result = [];
  for (let i = 0; i < workingArray.length; i++) {
    if (workingArray[i].title.toUpperCase().includes(this.state.filter) ||
      workingArray[i].brand.toUpperCase().includes(this.state.filter)) {
      result.push(workingArray[i]);
    }
  }
  return result;
  }
  return this.props.Listings;
}

categoryFilter(category, e) {
  console.log("filter category: ", category);
  e.preventDefault();
  let result = [];
  let workingArray = this.props.Listings;
  for (let i = 0; i < workingArray.length; i++) {
    console.log("element category: ", workingArray[i].category);
    if (workingArray[i].category === category) {
      result.push(workingArray[i]);
      }
    }
  console.log("Category Result: ", result);
    }

render() {
  let listingsList = this.props.Listings;
  if (this.filterListings() !== this.props.Listings) {
    listingsList = this.filterListings();
  }
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
  <input className="search-bar" onChange={this.updateSearch()}></input>
  <button onClick={(e) => this.categoryFilter("Jacket", e)}>Jacket</button>
  <input className="search-input" placeholder="Search" />
  <ul className="index">
    { listingsList }
  </ul>
  </div>

  );
}

}

export default ListingsIndex;
