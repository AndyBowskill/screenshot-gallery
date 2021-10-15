import React from 'react';
import { registerService } from '../../services/register.service';
import './Register.style.css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      password: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onRegisterSumbit = async () => {
    const register = await registerService(
      this.state.email,
      this.state.name,
      this.state.password
    );
    if (register.user) {
      this.props.loadUser(register.user);
      this.props.loadScreenshots([]);
      this.props.onRouteChange('home');
    }
  };

  render() {
    return (
      <section className='register flex'>
        <div>
          <h3>Register</h3>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Please enter email'
            name='email'
            id='email'
            required
            onChange={this.onEmailChange}
          />

          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='Please enter name'
            name='name'
            id='name'
            required
            onChange={this.onNameChange}
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
      </section>
    );
  }
}

export default Register;
