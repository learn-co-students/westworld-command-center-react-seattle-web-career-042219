import React from "react";
import "../stylesheets/Host.css";
import { Card } from "semantic-ui-react";

const Host = ({ imageUrl, id, selectAHost, selected }) => {
  const clicked = selected ? "host selected" : "host";
  return (
    <Card
      className={clicked}
      onClick={() => selectAHost(id)}
      image={imageUrl}
      key={id}
      raised
    />
  );
};

export default Host;
