import { RECEIVE_LISTING_ERRORS, RECEIVE_LISTING } from '../../actions/listing_actions';
import merge from 'lodash/merge';

const listingErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case RECEIVE_LISTING:
      return [];
    default:
      return state;
  }
};

export default listingErrorsReducer;
