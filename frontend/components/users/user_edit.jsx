import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEditForm extends React.Component{
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return(
      <ul className="listing-error-list">
        {this.props.errors.map((error, i) => (
          <li className="listing-error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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

  handleFile(e) {
   const file = e.currentTarget.files[0];
   const fileReader = new FileReader();
   fileReader.onloadend = () => {

     this.setState({photoFile: file, photoUrl: fileReader.result});
   };
   if (file) {
     fileReader.readAsDataURL(file);
   }
  }

    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      this.state.location = this.state.location || "United States";
      formData.append('user[id]', this.state.id);
      formData.append('user[username]', this.state.username);
      formData.append('user[email]', this.state.email);
      formData.append('user[height]', this.state.height);
      formData.append('user[weight]', this.state.weight);
      formData.append('user[location]', this.state.location);
      formData.append('user[description]', this.state.description);
      this.props.updateUser(formData).then(({user}) => this.props.history.push(`/users/${user.id}`));

render() {
  const preview = this.state.photoUrl ? <img className="avatar-preview" src={this.state.photoUrl} /> : <img className="avatar-preview" src={window.avatarURL} />;
  return(
    <div>
      <div className="user-edit-header">
        {this.props.user.username}
      </div>
      <form className="listing-form" onSubmit={this.handleSubmit}>
        <div className="user-edit-title">Edit Your Info</div>


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
        <label className="size-label">Height
          <input
            className="size-input"
            type="tel"
            placeholder="Inches"
            value={this.state.height || ""}
            onChange={this.update('height')} />
        </label>
        <label className="size-label">Weight
          <input
            className="size-input"
            type="number"
            placeholder="pounds"
            value={this.state.weight || ""}
            onChange={this.update('weight')} />
          </label>
      </div>
    </div>
  </div>
    {this.renderErrors()}
    <input className="listing-submit" type="submit" value="Update Profile" />
  </form>
</div>
  );
}


//END OF CLASS
}
export default withRouter(UserEditForm);
