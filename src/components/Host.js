import React from "react";
import "../stylesheets/Host.css";
import { Card } from "semantic-ui-react";

const Host = ({ img_url, id, key, selectAHost, selected }) => {
  const clicked = selected ? "host selected" : "host";
  return (
    <Card
      className={clicked}
      onClick={() => selectAHost(id)}
      image={img_url}
      raised
    />
  );
};

export default Host;
