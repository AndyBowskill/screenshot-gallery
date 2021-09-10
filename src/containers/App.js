import React from 'react';
import ItemList from '../components/ItemList/ItemList.component';
import Navigation from '../components/Navigation/Navigation.component';
import ScreenshotForm from '../components/ScreenshotForm/ScreenshotForm.component';
import Register from '../components/Register/Register.component';
import SignIn from '../components/SignIn/SignIn.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      screenshots: [],
      route: 'signin',
      isUserSignedIn: false,
      user: {
        id: '',
        email: '',
        name: '',
      },
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });

    if (route === 'home') {
      this.setState({ isUserSignedIn: true });
    } else {
      this.setState({ isUserSignedIn: false });
    }
  };

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  };

  loadScreenshots = (screenshots) => {
    this.setState({ screenshots: screenshots });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSaveButtonClick = () => {
    fetch('https://screenshot-gallery-api.herokuapp.com/screenshot', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.user.email,
        url: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.loadScreenshots(data.screenshots);
      });
  };

  render() {
    return (
      <div>
        <Navigation
          onRouteChange={this.onRouteChange}
          isUserSignedIn={this.state.isUserSignedIn}
        />
        {(() => {
          switch (this.state.route) {
            case 'register':
              return (
                <Register
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser}
                  loadScreenshots={this.loadScreenshots}
                />
              );
            case 'signin':
              return (
                <SignIn
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser}
                  loadScreenshots={this.loadScreenshots}
                />
              );
            case 'home':
              return (
                <div>
                  <ScreenshotForm
                    onInputChange={this.onInputChange}
                    onSaveButtonClick={this.onSaveButtonClick}
                  />
                  <ItemList items={this.state.screenshots} />
                </div>
              );
            default:
              break;
          }
        })()}
      </div>
    );
  }
}

export default App;
