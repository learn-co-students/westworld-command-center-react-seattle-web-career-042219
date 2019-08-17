import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

const Area = props => (
  <div className="area" id={props.area.name}>
    <h3 className="labels">
      {props.area.name
        ? props.area.name
            .replace("_", " ")
            .split(" ")
            .map(
              word =>
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
            )
            .join(" ")
        : null}
    </h3>
    <HostList
      hosts={props.hosts}
      selectedHostId={props.selectedHostId}
      selectAHost={props.selectAHost}
      // limit={props.area.limit}
    />
  </div>
);

Area.propTypes = {
  hosts: function(props, propName, componentName) {
    if (props.hosts && props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${
          props.name
        }. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  }
};

export default Area;
