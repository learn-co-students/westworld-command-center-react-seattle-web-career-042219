import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    areas: [],
    hosts: [],
    selectedHostId: null
  };

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:4000/areas"),
      fetch("http://localhost:4000/hosts")
    ])
      .then(([res1, res2]) => Promise.all(res1.json(), res2.json()))
      .then(([res1, res2]) => {
        this.setState({ areas: res1, hosts: res2 });
      })
      .catch(err => console.log(err));
  }

  selectAHost = selectedHost => {
    this.setState({ selectedHost: selectedHost.id }, () =>
      console.log(this.state)
    );
  };

  chooseActiveHosts = () => {
    this.state.hosts.filter(host => host.active === true);
  };

  render() {
    return (
      <Segment id="app">
        <WestworldMap
          areas={this.state.areas}
          selectedHostId={this.state.selectedHostId}
          selectAHost={this.selectAHost}
          hosts={this.chooseActiveHosts()}
        />
        <Headquarters />
      </Segment>
    );
  }
}

export default App;
