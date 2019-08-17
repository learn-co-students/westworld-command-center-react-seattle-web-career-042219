import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

const HostList = ({ hosts, selectAHost, selectedHostId, limit }) => {
  const renderHosts = () =>
    hosts.map(({ image_url, id }) => {
      if (selectedHostId === id) {
        return (
          <Host
            image_url={image_url}
            id={id}
            key={id}
            selectAHost={selectAHost}
            selected
          />
        );
      } else {
        return <Host image_url={image_url} id={id} selectAHost={selectAHost} />;
      }
    });

  return <Card.Group itemsPerRow={6}>{renderHosts()}</Card.Group>;
};

export default HostList;
