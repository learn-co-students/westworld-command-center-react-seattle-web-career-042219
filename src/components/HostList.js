import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

const HostList = ({ hosts, selectAHost, selectedHostId }) => {
  const renderHosts = () =>
    hosts
      ? hosts.map(({ imageUrl, id }) => {
          if (selectedHostId === id) {
            return (
              <Host
                imageUrl={imageUrl}
                id={id}
                key={id}
                selectAHost={selectAHost}
                selected
              />
            );
          } else {
            return (
              <Host
                imageUrl={imageUrl}
                id={id}
                key={id}
                selectAHost={selectAHost}
              />
            );
          }
        })
      : null;

  return <Card.Group itemsPerRow={6}>{renderHosts()}</Card.Group>;
};

export default HostList;
