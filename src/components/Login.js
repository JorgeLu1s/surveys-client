import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../actions/user';
import { Redirect } from 'react-router-dom';
import { hasSession } from '../selectors/user';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    if (email && password) {
      this.props.onLogin(email, password);
      this.setState({ email: '', password: '' });
    }
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const  { hasSession } = this.props;

    if (hasSession) {
      return <Redirect to='/' />
    }

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <button type="submit">
          Log In
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  hasSession: hasSession(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: (email, password) => dispatch(doLogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
