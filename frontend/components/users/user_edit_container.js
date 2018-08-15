import React from 'react';
import {connect} from 'react-redux';
import UserEditForm from './user_edit';
import {fetchUser, updateUser, receiveUserErrors } from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id],
  errors: state.errors.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user)),
    clearErrors: () => dispatch(receiveUserErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
