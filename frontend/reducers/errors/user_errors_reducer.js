import { RECEIVE_USER_ERRORS, RECEIVE_USER} from '../../actions/listing_actions';
import merge from 'lodash/merge';

const listingErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER_ERRORS:
    if (action.errors) {
      return action.errors;
    } else {
      return [];
    }
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default listingErrorsReducer;
