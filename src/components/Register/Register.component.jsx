import React from 'react';
import './Register.style.css';

class Register extends React.Component {
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

  onRegisterSumbit = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        this.props.onRouteChange('home');
      });
  };

  render() {
    return (
      <article>
        <div className='register flex'>
          <div>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

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

            <button type='submit' onClick={this.onRegisterSumbit}>
              Register
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Register;
