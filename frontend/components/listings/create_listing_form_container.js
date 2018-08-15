import { connect } from 'react-redux';
import { createListing, receiveListingErrors } from '../../actions/listing_actions';

import ListingForm from './listing_form';

const mapStateToProps = ({session, errors, entities: { users } }) => {
  const currentUser = users[session.id];
  const Listing = { userId: currentUser.id, title: "", price: "", size: "", category: "", brand: "", description: ""};
  let photoFile = null;
  const formType = "Create Listing";
  errors = errors.listing;


  return { Listing, formType, photoFile, errors };
};

const mapDispatchToProps = (dispatch) => ({
  action: listing => dispatch(createListing(listing)),
  clearErrors: () => dispatch(receiveListingErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);
