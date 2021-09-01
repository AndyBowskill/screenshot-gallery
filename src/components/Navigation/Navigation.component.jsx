import React from 'react';
import './Navigation.style.css';

const Navigation = ({ onRouteChange, isUserSignedIn }) => {
  if (isUserSignedIn) {
    return (
      <nav className='navigation'>
        <p onClick={() => onRouteChange('signin')}>Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav className='navigation'>
        <p onClick={() => onRouteChange('signin')}>Sign In</p>
        <p onClick={() => onRouteChange('register')}>Register</p>
      </nav>
    );
  }
};

export default Navigation;
