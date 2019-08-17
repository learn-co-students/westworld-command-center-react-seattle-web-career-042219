import React, { Component } from "react";
import "../stylesheets/Headquarters.css";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  componentDidMount() {}

  render() {
    return (
      <Grid celled="internally">
        <Grid.Column width={8}>{<ColdStorage />}</Grid.Column>
        <Grid.Column width={5}>
          <Details />
        </Grid.Column>
        <Grid.Column width={3}>{<LogPanel />}</Grid.Column>
      </Grid>
    );
  }
}

export default Headquarters;
