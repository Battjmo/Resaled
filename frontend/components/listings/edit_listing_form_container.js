import React from 'react';
import { connect } from 'react-redux';
import ListingForm from './listing_form';
import { fetchListing, updateListing, receiveListingErrors } from '../../actions/listing_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({ session, errors, entities: { users, Listings } }, ownProps) => {
  const Listing = Listings[ownProps.match.params.id];
  const currentUser = users[session.id];
  const formType = 'Update Listing';
  errors = errors.listing;

  return { Listing, currentUser, formType, errors };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    action: listing => dispatch(updateListing(listing)),
    clearErrors: () => dispatch(receiveListingErrors([]))
  };
};

class EditListingForm extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.Listing) {
      this.props.fetchListing(nextProps.match.params.id);
    } else if (this.props.Listing.id != nextProps.match.params.id){
      this.props.fetchListing(nextProps.match.params.id);
    }
  }

  render() {
    const { action, formType, Listing, currentUser, errors } = this.props;
    if (!Listing) {
      return null;
    }
    return (
      <ListingForm
        action={action}
        formType={formType}
        Listing={Listing}
        currentUser={currentUser}
        photo={Listing.photoURL}
        errors={errors}/>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditListingForm));
