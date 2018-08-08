import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Header from './header';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
