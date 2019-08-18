import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

class App extends Component {
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

  selectAHost = selectedHostIdInput => {
    this.setState({ selectedHostId: selectedHostIdInput });
  };

  chooseActiveHosts = () => {
    debugger;
    return this.state.hosts.filter(host => host.active === true);
  };

  // makes state.hosts undefined

  // setArea = (id, areaName) => {
  //   this.setState(prevState => ({
  //     hosts: prevState.hosts.forEach(host => {
  //       if (host.id === id) {
  //         host.area = areaName;
  //       }
  //     })
  //   }));
  // };

  setArea = (id, areaName) => {
    const newState = [...this.state.hosts];
    newState.forEach(host => (host.id === id ? (host.name = areaName) : null));
    this.setState({ hosts: newState });
  };

  // makes state.hosts undefined

  // activateAHost = id => {
  //   this.setState(
  //     prevState => ({
  //       hosts: prevState.hosts.forEach(host => {
  //         if (host.id === id) {
  //           host.active = !host.active;
  //         }
  //       })
  //     })
  //   );
  // };

  activateAHost = id => {
    const newHosts = [...this.state.hosts];
    newHosts.forEach(host =>
      host.id === id ? (host.active = !host.active) : null
    );
    this.setState({ hosts: newHosts });
  };

  activateAllHosts = activated => {
    const newHostsActivated = [...this.state.hosts];
    newHostsActivated.map(host => (host.active = activated));
    this.setState({
      hosts: newHostsActivated
    });
  };

  render() {
    return (
      <Segment id="app">
        <WestworldMap
          areas={this.state.areas}
          selectedHostId={this.state.selectedHostId}
          selectAHost={this.selectAHost}
          // gives index.js:2178 Warning: Cannot update during an existing state transition
          hosts={this.chooseActiveHosts()}
          // breaks completely.
          // hosts={() => {
          //   this.chooseActiveHosts();
          // }}
        />
        <Headquarters
          hosts={this.state.hosts}
          selectedHostId={this.state.selectedHostId}
          areas={this.state.areas}
          selectAHost={this.selectAHost}
          activateAHost={this.activateAHost}
          setArea={this.setArea}
          activateAllHosts={this.activateAllHosts}
        />
      </Segment>
    );
  }
}

export default App;
