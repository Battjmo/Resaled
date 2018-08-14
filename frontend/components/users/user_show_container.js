import { connect } from 'react-redux';
import UserShow from './user_show';
import { openModal } from '../../actions/modal_actions';
import {fetchUser} from '../../actions/user_actions';
import {fetchListings} from '../../actions/listing_actions';
import {getAllListings, getUserListings } from '../../reducers/selectors';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  // listings: getAllListings(state),
  userListings: getUserListings(state.entities.Listings, ownProps.match.params.id),
  user: state.entities.users[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UserShow);
