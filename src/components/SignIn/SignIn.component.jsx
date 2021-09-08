import React from 'react';

import './SignIn.style.css';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSignInSumbit = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          this.props.loadUser(data.user);
          this.props.loadScreenshots(data.screenshots);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <section className='signin flex'>
        <div>
          <h3>Sign In</h3>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Please enter email'
            name='email'
            id='email'
            required
            onChange={this.onEmailChange}
          />

          <label htmlFor='psw'>Password</label>
          <input
            type='password'
            placeholder='Please enter password'
            name='psw'
            id='psw'
            required
            onChange={this.onPasswordChange}
          />

          <button type='submit' onClick={this.onSignInSumbit}>
            Sign In
          </button>
        </div>
      </section>
    );
  }
}

export default SignIn;
