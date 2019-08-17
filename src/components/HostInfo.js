import "../stylesheets/HostInfo.css";
import React, { Component } from "react";
//prettier-ignore
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react';
import { Log } from "../services/Log";

class HostInfo extends Component {
  state = {
    options: [
      { key: "some_area", text: "Some Area", value: "some_area" },
      { key: "another_area", text: "Another Area", value: "another_area" }
    ],
    value: "some_area"
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  };

  handleChange = (e, { value }) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    let newArea = this.props.areas.find(area => area.name === value);
    let hostsInArea = this.props.hosts.find(host => host.area === value);
    if (newArea.limit < hostsInArea.length + 1) {
      this.props.addLog(
        Log.error(
          `Too many hosts. Cannot add ${this.props.selectedHost.firstName} to ${
            newArea.namesObject.text
          }.`
        )
      );
    } else {
      this.props.addLog(
        Log.notify(
          `${this.props.selectedHost.firstName} set in area ${
            newArea.namesObject.text
          }`
        )
      );
      this.props.setArea(this.props.selectedHost.id, value);
    }
  };

  toggle = () => {
    if (this.selectedHost.active) {
      this.props.addLog(
        Log.notify(`Decommissioned ${this.selectedHost.firstName}`)
      );
    } else {
      this.props.addLog(Log.notify(`Activated ${this.selectedHost.firstName}`));
    }
    console.log("The radio button fired");
  };

  // hosts={hosts}
  // areas={areas}
  // activateHost={activateHost}
  // setArea={setArea}
  // selectedHost={this.selectedHost()}
  // addLog={this.addLog}

  render() {
    const formattedNames = this.props.areas.map(area => area.namesObject);
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.selectedHost.img_url}
            floated="left"
            size="small"
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.selectedHost.firstName} |{" "}
                {this.props.selectedHost.gender === "Male" ? (
                  <Icon name="man" />
                ) : (
                  <Icon name="woman" />
                )}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={
                    this.props.selectedHost.active ? "Active" : "Decommissioned"
                  }
                  checked={this.props.selectedHost.active}
                  slider
                />
              </Card.Meta>
              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.selectedHost.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HostInfo;
