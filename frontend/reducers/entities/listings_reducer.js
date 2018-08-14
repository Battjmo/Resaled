import merge from 'lodash/merge';

import {
  RECEIVE_LISTING,
  RECEIVE_LISTINGS,
  REMOVE_LISTING,
  RECEIVE_LISTING_ERRORS
} from '../../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.Listings;
    case RECEIVE_LISTING:
      const newListing = { [action.Listing.id]: action.Listing };
      return merge({}, state, newListing);
    case REMOVE_LISTING:
      let newState = merge({}, state);
      delete newState[action.listingId];
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
