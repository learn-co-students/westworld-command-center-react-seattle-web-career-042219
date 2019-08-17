import React, { Component } from "react";
import "../stylesheets/Headquarters.css";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  state = {
    activated: false,
    logEvents: []
  };

  addLog = e => {
    this.setState(prevState => ({ logEvents: [e, ...prevState.logEvents] }));
  };

  handleActivate = e => {
    this.setState(
      prevState => ({ activated: !prevState.activated }),
      () => this.props.activateAll(this.state.activated)
    );
  };

  selectedHost = () => {
    this.props.hosts.find(host => host.id === this.props.selectedHostId);
  };

  renderDecomissionedHosts = () => {
    this.props.hosts.filter(host => !host.active);
  };

  render() {
    const {
      areas,
      hosts,
      selectedHostId,
      selectAHost,
      activateHost,
      setArea
    } = this.props;
    return (
      <Grid celled="internally">
        <Grid.Column width={8}>
          {
            <ColdStorage
              hosts={this.renderDecomissionedHosts()}
              selectAHost={selectAHost}
              selectedHostId={selectedHostId}
            />
          }
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={hosts}
            areas={areas}
            activateHost={activateHost}
            setArea={setArea}
            selectedHost={this.selectedHost()}
            addLog={this.addLog}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          {
            <LogPanel
              handleActivate={this.handleActivate}
              events={this.state.logEvents}
              activated={this.state.activated}
              addLog={this.addLog}
            />
          }
        </Grid.Column>
      </Grid>
    );
  }
}

export default Headquarters;
