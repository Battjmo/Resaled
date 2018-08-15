import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEditForm extends React.Component{
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
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

    // const formData = new FormData();
    // this.state.location = this.state.location || "United States";
    // formData.append('user[id]', this.state.id);
    // formData.append('user[username]', this.state.username);
    // formData.append('user[email]', this.state.email);
    // formData.append('user[height]', this.state.height);
    // formData.append('user[weight]', this.state.weight);
    // formData.append('user[location]', this.state.location);
    // formData.append('user[description]', this.state.description);
    handleSubmit(e) {
      e.preventDefault();
      this.state.country = this.state.country || "United States"
      const user = Object.assign({}, this.state);
      this.props.updateUser(user).then(({user}) => this.props.history.push(`/users/${user.id}`));
    }


render() {
  console.log(this.props);
  return(
    <div>
  <p>Here's the user edit page!</p>
  {this.props.user.username}

  <form className="user-form" onSubmit={this.handleSubmit}>
  <h3 className="listing-details-title">DETAILS </h3>
  <div className="detail-columns">

    <div className="left-col">
      <label>Username
      <input
        className="detail brand-field"
        type="text"
        placeholder="Username"
        value={this.state.username}
        onChange={this.update('username')} />
      </label>

      <br/>
      <br/>

      <label>Country
        <select onChange={this.update('country')}className="detail category_field">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Other">Other</option>
        </select>
      </label>

    </div>

    <div className="right-col">
      <label>Email
      <input
        className="detail brand-field"
        type="email"
        placeholder="email"
        value={this.state.email || ""}
        onChange={this.update('email')} />
      </label>

      <div className="size">
        <label>Height
          <input
            className="detail brand-field"
            type="tel"
            placeholder="Inches"
            value={this.state.height || ""}
            onChange={this.update('height')} />
        </label>
        <label>Weight
        <input
          className="detail brand-field"
          type="number"
          placeholder="pounds"
          value={this.state.weight || ""}
          onChange={this.update('weight')} />
        </label>
      </div>
    </div>
  </div>

    <input className="listing-submit" type="submit" value="Update Profile" />
  </form>
</div>
  );
}


//END OF CLASS
}
export default withRouter(UserEditForm);
