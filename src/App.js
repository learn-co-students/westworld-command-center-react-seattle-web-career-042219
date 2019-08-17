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
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([res1, res2]) => {
        return this.setState({ areas: res1, hosts: res2 }, () =>
          console.log(this.state)
        );
      })
      .catch(err => console.log(err));
  }

  selectAHost = selectedHostId => {
    this.setState({ selectedHost: selectedHostId }, () =>
      console.log(this.state)
    );
  };

  chooseActiveHosts = () => {
    return this.state.hosts.filter(host => host.active === true);
  };

  activateAllHosts = activated => {
    this.setState(prevState => ({
      hosts: prevState.hosts.map(host => (host.active = activated))
    }));
  };

  setArea = (id, areaName) => {
    this.setState(
      prevState => ({
        hosts: prevState.hosts.forEach(host => {
          if (host.id === id) {
            host.area = areaName;
          }
        })
      }),
      () => console.log(this.state)
    );
  };

  activateHost = id => {
    this.setState(prevState => ({
      hosts: prevState.hosts.forEach(host => {
        if (host.id === id) {
          host.active = !host.active;
        }
      })
    }));
  };

  render() {
    return (
      <Segment id="app">
        <WestworldMap
          areas={this.state.areas}
          selectedHostId={this.state.selectedHostId}
          selectAHost={this.selectAHost}
          // hosts={this.chooseActiveHosts()}
          // hosts={this.state.hosts}
        />
        <Headquarters
          // hosts={this.chooseActiveHosts()}
          hosts={this.state.hosts}
          selectedHostId={this.state.selectedHostId}
          areas={this.state.areas}
          selectAHost={this.selectAHost}
          activateHost={this.activateHost}
          setArea={this.setArea}
          activateAll={this.activateAll}
        />
      </Segment>
    );
  }
}

export default App;
