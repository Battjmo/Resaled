import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { openModal } from '../../actions/modal_actions';
import { deleteListing, fetchListing, fetchListings } from '../../actions/listing_actions';
import {fetchUser} from '../../actions/user_actions';
import {getUserListings} from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.Listings[ownProps.match.params.id],
  currentUser: state.entities.users[state.session.id],
  sellerListings: state.entities.Listings
  // listingUser: state.entities.Listings[ownProps.match.params.id].userId
});

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  deleteListing: id => dispatch(deleteListing(id)),
  openModal: modal => dispatch(openModal(modal)),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
