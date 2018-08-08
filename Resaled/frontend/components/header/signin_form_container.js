import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign In'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user)),
    otherForm: (
      <a className="switch-signups" onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </a>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
