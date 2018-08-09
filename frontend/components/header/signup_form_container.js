import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, signin, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoSignIn: (user) => dispatch(signin(user)),
    otherForm: (
      <a className="switch-signups" onClick={() => dispatch(openModal('signin'))}>
        Sign In
      </a>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
