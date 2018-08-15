import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEditForm extends React.Component{
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);

  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user) {
      this.props.fetchUser(nextProps.match.params.id);
    if (this.props.user.id != nextProps.match.params.id) {
      this.props.fetchListing(nextProps.match.params.id);
      }
    }
  }
}

export default withRouter(UserEditForm);
