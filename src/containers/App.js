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
      inputWebsite: '',
      screenshots: [],
      route: 'signin',
      isUserSignedIn: false,
      user: {
        id: '',
        email: '',
        name: '',
      },
      isDisabled: true,
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

  onInputWebsiteChange = (event) => {
    this.setState({ inputWebsite: event.target.value });
    if (event.target.value === '') {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  };

  onSaveButtonClick = () => {
    this.setState({ isDisabled: true });

    fetch('https://screenshot-gallery-api.herokuapp.com/screenshot', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.user.email,
        url: this.state.inputWebsite,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.loadScreenshots(data.screenshots);
      });
  };

  onDeleteButtonClick = (screenshotId) => {
    fetch('https://screenshot-gallery-api.herokuapp.com/screenshot', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.user.email,
        id: screenshotId,
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
                    onInputWebsiteChange={this.onInputWebsiteChange}
                    onSaveButtonClick={this.onSaveButtonClick}
                    isDisabled={this.state.isDisabled}
                  />
                  <ItemList
                    items={this.state.screenshots}
                    onDeleteButtonClick={this.onDeleteButtonClick}
                  />
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
