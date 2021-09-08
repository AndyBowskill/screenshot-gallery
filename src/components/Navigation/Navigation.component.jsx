import React from 'react';
import './Navigation.style.css';

const Navigation = ({ onRouteChange, isUserSignedIn }) => {
  if (isUserSignedIn) {
    return (
      <nav className='navigation'>
        <p className='navigation-logo'>Screenshot Gallery</p>
        <ul className='navigation-links'>
          <li onClick={() => onRouteChange('signin')}>Sign Out</li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className='navigation'>
        <p className='navigation-logo'>Screenshot Gallery</p>
        <ul className='navigation-links'>
          <li onClick={() => onRouteChange('signin')}>Sign In</li>
          <li onClick={() => onRouteChange('register')}>Register</li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
