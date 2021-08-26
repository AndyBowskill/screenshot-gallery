import React from 'react';
import ItemList from '../components/ItemList/ItemList.component';
import Navigation from '../components/Navigation/Navigation.component';
import ScreenshotForm from '../components/ScreenshotForm/ScreenshotForm.component';
import Register from '../components/Register/Register.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      screenshots: [],
      route: 'register',
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSaveButtonClick = () => {
    fetch('http://localhost:3000/screenshot', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ screenshots: data });
      });
  };

  render() {
    return (
      <div>
        <Navigation />
        {this.state.route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <ScreenshotForm
              onInputChange={this.onInputChange}
              onSaveButtonClick={this.onSaveButtonClick}
            />
            <ItemList items={this.state.screenshots} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
