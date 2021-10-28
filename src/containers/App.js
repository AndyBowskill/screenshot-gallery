import React from 'react';
import ItemList from '../components/ItemList/ItemList.component';
import Navigation from '../components/Navigation/Navigation.component';
import ScreenshotForm from '../components/ScreenshotForm/ScreenshotForm.component';
import Register from '../components/Register/Register.component';
import SignIn from '../components/SignIn/SignIn.component';
import { saveScreenshotService } from '../services/saveScreenshot.service';
import { deleteScreenshotService } from '../services/deleteScreenshot.service';
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
      buttonText: 'Save',
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

  loadGoogleUser = (email) => {
    this.setState({
      user: {
        id: 0,
        email: email,
        name: '',
      },
    });
  };

  loadScreenshots = (screenshots) => {
    this.setState({ screenshots: screenshots });
  };

  onInputWebsiteChange = (event) => {
    this.setState({ inputWebsite: event.target.value });
    this.setState({ buttonText: 'Save' });
    if (event.target.value === '') {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  };

  onSaveButtonClick = async () => {
    this.setState({ isDisabled: true });
    this.setState({ buttonText: 'Fetching...' });

    const saveScreenshot = await saveScreenshotService(
      this.state.user.email,
      this.state.inputWebsite
    );
    this.loadScreenshots(saveScreenshot.screenshots);
    this.setState({ isDisabled: false });
    this.setState({ buttonText: 'Save' });
  };

  onDeleteButtonClick = async (screenshotId) => {
    const deleteScreenshot = await deleteScreenshotService(
      this.state.user.email,
      screenshotId
    );
    this.loadScreenshots(deleteScreenshot.screenshots);
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
                  loadGoogleUser={this.loadGoogleUser}
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
                    buttonText={this.state.buttonText}
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
