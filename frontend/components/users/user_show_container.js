import { connect } from 'react-redux';
import UserShow from './user_show';
import { openModal } from '../../actions/modal_actions';
import {fetchUser} from '../../actions/user_actions';
import {fetchListings} from '../../actions/listing_actions';
import {getAllListings, getUserListings } from '../../reducers/selectors';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[parseInt(ownProps.match.params.id, 10)],
  currentUser: state.entities.users[state.session.id],
  Listings: Object.keys(state.entities.Listings).map(id => state.entities.Listings[id]),
  userListings: getUserListings(state, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UserShow);
