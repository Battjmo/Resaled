import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';

import ListingForm from './listing_form';

const mapStateToProps = ({session, entities: { users } }) => {
  const currentUser = users[session.id];
  const Listing = { user_id: currentUser.id, title: "", price: 0, size: "", category: "", brand: "", description: ""};
  const formType = "Create Listing";

  return { Listing, formType };
};

const mapDispatchToProps = (dispatch) => ({
  action: listing => dispatch(createListing(listing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);
