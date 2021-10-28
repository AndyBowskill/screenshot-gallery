import React from 'react';
import { signinService } from '../../services/signin.service';
import { googleSigninService } from '../../services/googleSignin.service';
import GoogleLogin from 'react-google-login';

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

  onSignInSumbit = async () => {
    const signin = await signinService(this.state.email, this.state.password);
    if (signin.user) {
      this.props.loadUser(signin.user);
      this.props.loadScreenshots(signin.screenshots);
      this.props.onRouteChange('home');
    }
  };

  onGoogleSignInSubmit = async (response) => {
    const email = response.profileObj.email;
    if (email) {
      const googleSignin = await googleSigninService(email);
      this.props.loadGoogleUser(email);
      this.props.loadScreenshots(googleSignin.screenshots);
      this.props.onRouteChange('home');
    }
  };

  onGoogleFailure = async (response) => {
    console.log(response);
  };

  render() {
    return (
      <section className='signin flex'>
        <div>
          <h3>Sign In</h3>
          <GoogleLogin
            clientId='116269793133-7ih340bt80irmt46dhkpg2h5r8ntsg8f.apps.googleusercontent.com'
            buttonText='Sign in with Google'
            cookiePolicy={'single_host_origin'}
            onSuccess={this.onGoogleSignInSubmit}
            onFailure={this.onGoogleFailure}
          />
          <hr />
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
