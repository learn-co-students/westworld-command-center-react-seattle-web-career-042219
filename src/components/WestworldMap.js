import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area.js";

const WestworldMap = ({ areas, hosts, selectedHostId, selectAHost }) => {
  const renderHosts = area => {
    return hosts.filter(host => {
      return host.area === area.name;
    });
  };

  // console.log(renderHosts());

  const renderAreas = () => {
    return areas.map(area => (
      <Area
        // value={value}
        name={area.name}
        limit={area.limit}
        key={area.id}
        hosts={renderHosts(area)}
        selectedHostId={selectedHostId}
        selectAHost={selectAHost}
        area={area}
      />
    ));
  };
  // const renderAreas = () => {
  //   return areas.map(area => {
  //     return (
  //       <Area
  //         hosts={hosts}
  //         area={area}
  //         selectedHostId={selectedHostId}
  //         selectAHost={selectAHost}
  //         key={area.id}
  //         limit={area.limit}
  //       />
  //     );
  //   });
  // };

  return <Segment id="map">{renderAreas()}</Segment>;
};

export default WestworldMap;
