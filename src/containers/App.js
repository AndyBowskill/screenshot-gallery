import React from "react";
import ItemList from "../components/ItemList/ItemList.component";
import Navigation from "../components/Navigation/Navigation.component";
import ScreenshotForm from "../components/ScreenshotForm/ScreenshotForm.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      screenshots: []
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSaveButtonClick = () => {
    fetch('http://localhost:3000/screenshot', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        url: this.state.input,
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ screenshots: data });
    })

  }

  render() {
    return (
      <div>
        <Navigation />
        <ScreenshotForm 
          onInputChange={this.onInputChange}
          onSaveButtonClick={this.onSaveButtonClick}
        />
        <ItemList items={this.state.screenshots} />
      </div>
    );
  }
}

export default App;
