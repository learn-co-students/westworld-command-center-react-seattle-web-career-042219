import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

const ColdStorage = ({ hosts, selectAHost, selectedHostId }) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">Cold Storage</h3>
    </Segment>
    <Segment compact>
      <HostList
        hosts={hosts}
        selectAHost={selectAHost}
        selectedHostId={selectedHostId}
      />
    </Segment>
  </Segment.Group>
);

export default ColdStorage;
