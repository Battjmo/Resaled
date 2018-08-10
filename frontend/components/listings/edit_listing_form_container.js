import React from 'react';
import { connect } from 'react-redux';
import ListingForm from './listing_form';
import { fetchListing, updateListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultListing = { user_id: 0, title: "", price: 0, size: "", category: "", brand: "", description: ""};
  const Listing = state.Listings[ownProps.match.params.listingId] || defaultListing;
  const formType = 'Update Listing';

  return { Listing, formType };
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
    const { action, formType, Listing } = this.props;
    return (
      <ListingForm
        action={action}
        formType={formType}
        Listing={Listing} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListingForm);
