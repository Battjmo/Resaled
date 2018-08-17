import  React  from 'react';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {searchFilter: "", categoryFilter: ""};
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
  this.setState({searchFilter: e.target.value.toUpperCase()});
  };
}

categoryFilter(category = "") {
  this.setState({categoryFilter: category.toUpperCase()});
    }

  filterByCategory(listings) {
    if (!this.state.categoryFilter) {
      return listings;
    }
    let result = [];
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].category.toUpperCase().includes(this.state.categoryFilter)) {
      result.push(listings[i]);
      }
    }
    return result;
  }

  filterBySearch(listings) {
    if (!this.state.searchFilter) {
      return listings; }
    let result = [];
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].title.toUpperCase().includes(this.state.searchFilter) ||
        listings[i].brand.toUpperCase().includes(this.state.searchFilter) ||
        listings[i].category.toUpperCase().includes(this.state.searchFilter)){
        result.push(listings[i]);
      }
  }
  return result;
}

render() {
  let listingsList = this.props.Listings;
  listingsList = this.filterByCategory(listingsList);
  listingsList = this.filterBySearch(listingsList);
  listingsList = listingsList.map(listing => (
    <ListingsIndexItem
      key ={listing.id}
      listing={listing}
      photo={listing.photoUrl}
       />
  ));

  return (
  <div className="index-wrapper">

    <div className="category-container">
    <button className="category-option" onClick={() => this.categoryFilter("Shirt")}>Shirts</button>
    <button className="category-option" onClick={() => this.categoryFilter("Outerwear")}>Outerwear</button>
    <button className="category-option" onClick={() => this.categoryFilter("Bottoms")}>Bottoms</button>
    <button className="category-option" onClick={() => this.categoryFilter("Shoes")}>Shoes</button>
    <button className="category-option" onClick={() => this.categoryFilter("Accessories")}>Accessories</button>
    <button className="category-option" onClick={() => this.categoryFilter("Luggage")}>Luggage</button>
    <button className="category-option" onClick={() => this.categoryFilter("Other")}>Other</button>
    </div>
    <h1 className="feed-title">Browse The Feed</h1>
  <input className="search-input" onChange={this.updateSearch()} placeholder="Search Supreme, Dior, Zanerobe, shirt, anorak, etc."></input>
  <ul className="index">
    { listingsList }
  </ul>
  </div>

  );
}

}

export default ListingsIndex;
