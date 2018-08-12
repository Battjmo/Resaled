import React from 'react';
import { connect } from 'react-redux';
import ListingForm from './listing_form';
import { fetchListing, updateListing } from '../../actions/listing_actions';

const mapStateToProps = ({ session, entities: { users, Listings } }, ownProps) => {
  const Listing = Listings[ownProps.match.params.id];
  const currentUser = users[session.id];
  const formType = 'Update Listing';

  return { Listing, currentUser, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    action: listing => dispatch(updateListing(listing)),
  };
};

class EditListingForm extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.Listing.id !== nextProps.match.params.listingId) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  render() {
    const { action, formType, Listing, currentUser } = this.props;
    return (
      <ListingForm
        action={action}
        formType={formType}
        Listing={Listing}
        currentUser={currentUser}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListingForm);
