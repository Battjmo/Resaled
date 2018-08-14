import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { openModal } from '../../actions/modal_actions';
import { deleteListing, fetchListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  return ({listing: state.entities.Listings[ownProps.match.params.id]});

};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  deleteListing: id => dispatch(deleteListing(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
