import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <div>JOIN THE COMMUNITY</div>
          <br/>
          <br/>
          <div className="signupPrompt">{this.props.formType} below or {this.props.otherForm} </div>
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
            <br/>
              <input type="text"
                placeholder="Email"
                onChange={this.update('username')}
                className="signin-input"
              />
            <br/>
            <br/>
            <br/>
              <input type="password"
                placeholder="Password"
                onChange={this.update('password')}
                className="signin-input"
              />
            <br/>
            <br/>
            <br/>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType} />
            <br/>
            <div className="auth-or">
              <div>-------------------</div>
              OR
              <div>-------------------</div>
            </div>
            <input
              className="dummy-signin"
              type="submit"
              value="sign in with demo account" />

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
