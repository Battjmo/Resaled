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
    this.demoSubmit = this.demoSubmit.bind(this);
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

  demoSubmit(e) {
    e.preventDefault();
    const user = {username: "Mortimer Laraby", email: "", password: "123456"};
    this.props.demoSignIn(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="auth-error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <div>JOIN THE COMMUNITY</div>
          <br/>
          <br/>
          <div className="signupPrompt">{this.props.formType} below or {this.props.otherForm}
          </div>
          <br/>
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
            <br/>
              <input type="text"
                placeholder="Username"
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
              className="button black"
              type="submit"
              value={this.props.formType} />
            <br/>
            <div className="auth-or">
              <div>---------------------------------------------</div>
              OR
              <div>---------------------------------------------</div>
            </div>
          </div>
        </form>
        <button
          className="button dummy"
          onClick={this.demoSubmit}>sign in with demo account</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
