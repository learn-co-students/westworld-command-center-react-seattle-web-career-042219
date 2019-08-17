import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area.js";

const WestworldMap = ({ areas, hosts, selectedHostId, selectAHost }) => {
  console.log(areas);
  console.log(hosts);
  console.log(selectedHostId);
  console.log(selectAHost);
  return (
    <Segment id="map">
      <Area
        hosts={hosts}
        areas={areas}
        selectedHostId={selectedHostId}
        selectAHost={selectAHost}
      />
    </Segment>
  );
};

export default WestworldMap;
