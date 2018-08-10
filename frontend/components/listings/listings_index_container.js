import { connect } from 'react-redux';

import ListingsIndex from './listings_index';

import { fetchListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  listings: state.listings
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
