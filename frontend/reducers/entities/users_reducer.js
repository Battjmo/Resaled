import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      const listingUser = { [action.user.id]: action.user};
      return merge({}, state, listingUser);
    default:
      return state;
  }
};

export default usersReducer;
