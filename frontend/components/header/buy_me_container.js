import { connect } from 'react-redux';
import BuyMe from './buy_me';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


export default connect(mapStateToProps, null)(BuyMe);
