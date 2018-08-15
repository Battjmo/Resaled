import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEditForm extends React.Component{
  constructor(props) {
    super(props);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.match.params.id) {
      this.props.fetchListing(nextProps.match.params.id);
    }
  }

}

export default UserEditForm;
