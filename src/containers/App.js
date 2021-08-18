import React from "react";
import Navigation from "../components/Navigation/Navigation.component";
import ScreenshotForm from "../components/ScreenshotForm/ScreenshotForm.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      screenshotURL: ''

    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSaveButtonClick = () => {
    this.setState({ screenshotURL: this.state.input });
  }

  render() {
    return (
      <div>
        <Navigation />
        <ScreenshotForm 
          onInputChange={this.onInputChange}
          onSaveButtonClick={this.onSaveButtonClick}
        />
      </div>
    );
  }
}

export default App;
