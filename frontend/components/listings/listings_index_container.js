import { connect } from 'react-redux';

import ListingsIndex from './listings_index';

import { fetchListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  Listings: Object.keys(state.entities.Listings).map(id => state.entities.Listings[id])
  
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
