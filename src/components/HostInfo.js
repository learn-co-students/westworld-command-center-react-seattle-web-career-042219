import "../stylesheets/HostInfo.css";
import React from "react";
//prettier-ignore
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react';
import { Log } from "../services/Log";

// class HostInfo extends Component {
//   state = {
//     options: [
//       { key: "some_area", text: "Some Area", value: "some_area" },
//       { key: "another_area", text: "Another Area", value: "another_area" }
//     ],
//     value: "some_area"
//     // This state is just to show how the dropdown component works.
//     // Options have to be formatted in this way (array of objects with keys of: key, text, value)
//     // Value has to match the value in the object to render the right text.

//     // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
//   };

//prettier-ignore
const HostInfo = ({ hosts, areas, selectedHost, activateAHost, setArea, addLog}) => {

  const handleChange = (e, { value }) => {

    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled

    let newArea = areas.find(area => area.name === value);
    let hostsInArea = hosts.filter(host => host.area === value);
    if (newArea.limit < hostsInArea.length + 1) {
      addLog(
        Log.error(
          `Too many hosts. Cannot add ${selectedHost.firstName} to ${
            // newArea.namesObject.text
            newArea.name
          }.`
        )
      );
    } else {
      addLog(
        Log.notify(
          `${selectedHost.firstName} set in area ${
            newArea.name
          }`
        )
      );
      setArea(selectedHost.id, value);
    }
  }
 
  const toggle = () => {
    if (selectedHost.active) {
      addLog(
        Log.notify(`Decommissioned ${selectedHost.firstName}`)
      );
    } else {
      addLog(Log.notify(`Activated ${selectedHost.firstName}`));
    }
    activateAHost(selectedHost.id)
  };


  // const formattedNames = areas.map(area => area.name)

  const formattedNames = areas.map(area => {
    return  { key: `${area.name}`, text: `${area.name.replace("_", " ")
  .split(" ")
  .map(
    word =>
      word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  )
  .join(" ")}`, value: `${area.name}` }})


return (
  <Grid>
    <Grid.Column width={6}>
      <Image
        src={selectedHost.imageUrl}
        floated="left"
        size="small"
        className="hostImg"
      />
    </Grid.Column>
    <Grid.Column width={10}>
      <Card>
        <Card.Content>
          <Card.Header>
            {selectedHost.firstName} |{" "}
            {selectedHost.gender === "Male" ? (
              <Icon name="man" />
            ) : (
              <Icon name="woman" />
            )}
          </Card.Header>
          <Card.Meta>
            <Radio
              onChange={toggle}
              label={
                selectedHost.active ? "Active" : "Decommissioned"
              }
              checked={selectedHost.active}
              slider
            />
          </Card.Meta>
          <Divider />
          Current Area:
          <Dropdown
            onChange={handleChange}
            value={selectedHost.area}
            options={formattedNames}
            selection
            // 
          />
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
);
}

export default HostInfo;
