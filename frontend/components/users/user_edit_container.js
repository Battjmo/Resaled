import React from 'react';
import {connect} from 'react-redux';
import UserEditForm from './user_edit_form';
import {fetchUser, updateUser, receiveUserErrors } from '../../action/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
