import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";

class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    hosts: [],
    areas: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/hosts")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .then(res => this.setState({ hosts: res }))
      .catch(err => console.log(err));
    fetch("http://localhost:4000/areas")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .then(res => this.setState({ areas: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Segment id="app">
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      </Segment>
    );
  }
}

export default App;
