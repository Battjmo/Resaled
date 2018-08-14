import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { openModal } from '../../actions/modal_actions';
import { deleteListing, fetchListing } from '../../actions/listing_actions';
import {fetchUser} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.Listings[ownProps.match.params.id],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  deleteListing: id => dispatch(deleteListing(id)),
  openModal: modal => dispatch(openModal(modal)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
